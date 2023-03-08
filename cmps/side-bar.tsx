import { NewChat } from "./new-chat"

export function SideBar() {
    return (
        <section className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    <NewChat />
                </div>
            </div>
        </section>
    )
}