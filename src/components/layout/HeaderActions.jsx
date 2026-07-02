import { Bell, Moon, Plus } from "lucide-react";

const HeaderActions = () => {
    return (
        <section className="flex items-center gap-[12px] lg:gap-[22px]">
            <button>
                <Bell className="w-[20px] h-[20px]" />
            </button>
            <button>
                <Moon className="w-[20px] h-[20px]" />
            </button>
            <button className="flex items-center bg-pine rounded-[13px] px-[12px] lg:px-[14px] py-[8px] text-white text-[14px] font-bold gap-[5px]">
                <Plus className="w-[18px] h-[18px]" />
                <span className="hidden sm:inline sm:whitespace-nowrap">Nuevo registro</span>
            </button>
        </section>
    );
};

export default HeaderActions;