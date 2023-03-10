'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import { toast } from "react-hot-toast"
import useSWR from "swr"
import { db } from "../firebase"
import { ModelSelection } from "./model-selection"

type Props = {
    chatId: string
}

export function ChatInput({ chatId }: Props) {
    const [prompt, setPrompt] = useState('')
    const { data: session } = useSession()
    const { data: model } = useSWR('model', {
        fallbackData: 'text-davinci-003',
    })

    const sendMessage = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        if (!prompt) return

        const input = prompt.trim()
        setPrompt('')

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || 'https://ui-avatars.com/api/?name=' + session?.user?.name,
            }
        }

        await addDoc(
            collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
            message
        )

        const notification = toast.loading('ChatGPT is thinking...')

        await fetch('/api/askQuest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input, chatId, model, session
            })
        }).then(() =>
            toast.success('ChatGPT has responded', {
                id: notification
            })
        )
    }
    return (
        <section className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
            <form className='p-5 space-x-5 flex'
                onSubmit={sendMessage}>
                <input type="text"
                    className="bg-transparent focus:outline-none flex-1
                disabled:cursor-not-allowed disabled:text-gray-300"
                    disabled={!session}
                    value={prompt}
                    onChange={(ev) => { setPrompt(ev.target.value) }}
                    placeholder="Type your message here..." />
                <button
                    className='bg-[#11a37f] hover:opacity-50 text-white font-bold px-4 py-2 disabled:bg-gray-300 disabled:cursor-not-allowed'
                    disabled={!prompt || !session}
                >
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                </button>
            </form>

            <div className="md:hidden">
                <ModelSelection />
            </div>
        </section>
    )
}