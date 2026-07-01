import { LogOut } from "lucide-react";

const UserProfile = () => {
    return (
        <section className="flex items-center justify-between p-[16px]">
            <div className="flex items-center gap-[12px]">
                <div className="w-[44px] h-[44px] rounded-full bg-moss"></div>
                <div className="flex-1 flex flex-col">
                    <p className="text-[14px] font-medium">Nombre</p>
                    <p className="text-[12px] text-pine">Correo</p>
                </div>
            </div>
            <button className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] hover:bg-gray-100 transition-colors duration-200">
                <LogOut />
            </button>
        </section>
    )
}

export default UserProfile