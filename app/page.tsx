function HomePage() {
    return (
        <section className="flex flex-col items-center justify-center h-screen px-2 text-white">
            <h1 className="text-5xl font-bold mb-20">ChatGPT-messenger</h1>
            <div>
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        <h2>Examples</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="text-info">"Explain something to me"</p>
                        <p className="text-info">"What is the different between a dog and a cat?"</p>
                        <p className="text-info">"What is the color of the sun?"</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage