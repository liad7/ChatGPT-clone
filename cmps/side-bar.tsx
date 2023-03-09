'use client'

import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { NewChat } from "./new-chat"
import { db } from '../firebase'
import { ChatRow } from './chat-row'

export function SideBar() {
    const { data: session } = useSession()
    const [chats, loading, error] = useCollection(
        session && query(
            collection(db, 'users', session?.user?.email!, 'chats'),
            orderBy('createdAt', 'asc'),
        )
    )

    console.log('chats:', chats?.docs)
    return (
        <section className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    <NewChat />
                    {chats?.docs.map(chat =>
                        <ChatRow key={chat.id} id={chat.id} />
                    )}
                </div>
            </div>
            {session && (
                <img src={session.user?.image!}
                    onClick={() => signOut()}
                    className='h-12 w-12 rounded-full curser-pointer mx-auto mb-2 hover:opacity-50' />
            )}
        </section>
    )
}