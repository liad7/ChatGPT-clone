import { Chat } from "../../../cmps/chat"
import { ChatInput } from "../../../cmps/chat-input"
type Props = {
    params: {
        id: string
    }
}

export default function ChatPage({ params: { id } }: Props ) {
    return (
        <section className='flex flex-col h-screen overflow-hidden'>
            <Chat chatId={id}/>
            <ChatInput chatId={id}/>
        </section>
    )
}