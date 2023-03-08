import { SideBar } from '../cmps/side-bar'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex'>
          <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
          <SideBar />
          </div>
          <div className='bg-[#343541] flex-1'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
