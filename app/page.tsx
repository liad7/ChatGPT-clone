import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'
import { NewChat } from '../cmps/new-chat'
function HomePage() {
    return (
        <section className="flex flex-col items-center justify-center h-screen px-2 text-white">
            <h1 className="text-5xl font-bold mb-20">ChatGPT-messenger</h1>
            <div className='lg:hidden mb-5'>
                <NewChat />
            </div>
            <div className='flex space-x-2 text-center'>
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <SunIcon  className='h-8 w-8'/>
                        <h2>Examples</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="info-text">"Explain something to me"</p>
                        <p className="info-text">"What is the different between a dog and a cat?"</p>
                        <p className="info-text">"What is the color of the sun?"</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <BoltIcon  className='h-8 w-8'/>
                        <h2>Capabilities</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="info-text">"Remembers what user said earlier in the conversation"</p>
                        <p className="info-text">"Allows user to provide follow-up corrections"</p>
                        <p className="info-text">"Trained to decline inappropriate requests"</p>
                    </div>
                </div>
                <div className='hidden sm:inline'>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <ExclamationTriangleIcon  className='h-8 w-8'/>
                        <h2>Limitations</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="info-text">"May occasionally generate incorrect information"</p>
                        <p className="info-text">"May occasionally produce harmful instructions or biased content"</p>
                        <p className="info-text">"Limited knowledge of world and events after 2021"</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage