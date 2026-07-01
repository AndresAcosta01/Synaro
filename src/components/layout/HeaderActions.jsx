import { Bell, Moon, Plus } from "lucide-react"

const HeaderActions = () => {
    return (
        <section className="flex items-center gap-[12px]">
            <button>
                <Bell />
            </button>
            <button>
                <Moon />
            </button>
            <button className="flex bg-pine rounded-[8px] px-[10px] py-[10px] text-white">
                <Plus />
                Nuevo registro
            </button>
        </section>
    )
}

export default HeaderActions