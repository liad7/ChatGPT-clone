'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"

export function Login() {
    return (
        <section className="bg-[#11a37f] h-screen flex flex-col items-center justify-center text-center">
            <Image
                src="https://links.papareact.com/2i6"
                width={300}
                height={300}
                alt="logo"
            />
            <button onClick={() => signIn('google')}
                className="text-white font bold text-3xl animate-pulse">Sign In to use ChatGPT</button>
        </section>
    )
}