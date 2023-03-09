import { getServerSession } from 'next-auth'
import { SessionProvider } from '../cmps/session-provider'
import { SideBar } from '../cmps/side-bar'
import '../styles/globals.css'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { Login } from '../cmps/login'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        {!session ?
          <Login />
          :
          <SessionProvider session={session}>
            <div className='flex'>
              <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                <SideBar />
              </div>
              <div className='bg-[#343541] flex-1'>
                {children}
              </div>
            </div>
          </SessionProvider>
        }
      </body>
    </html>
  )
}
