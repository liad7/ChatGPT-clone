'use client'

import { useSession,signOut } from 'next-auth/react'
import { NewChat } from "./new-chat"

export function SideBar() {
    const { data:session }= useSession()

    return (
        <section className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    <NewChat />
                </div>
            </div>
            {session && (
                <img src={session.user?.image}
                onClick={signOut}
                // onClick={()=>signOut()}
                className='h-12 w-12 rounded-full curser-pointer mx-auto mb-2 hover:opacity-50'/>
            )}
            </section>
    )
}