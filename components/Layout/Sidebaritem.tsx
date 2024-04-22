import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconBase, IconType } from "react-icons";

interface SidebaritemProps{
    label: string;
    href?: string;
    icon: IconType;
    onClick?: ()=>void;
}
const Sidebaritem: React.FC<SidebaritemProps> = ({
    label,
    href,
    icon: Icon,
    onClick
})=>{
    const router = useRouter();
    const handleClick  = useCallback(()=>{
        if(onClick){
            return onClick();
        }
        if(href){
        router.push(href);
        }
    },[router,onClick,href]);
    return(
        <div onClick={handleClick}className='flex flex-row item-center'>
            <div className="
            relative
            rounded-full
            h-14
            w-14
            flex
            item-center
            jsutify-center
            p-4
            hover:bg-blue-300
            hover:bg-opacity-50
            cursor-pointer
            lg:hidden">
                <Icon size={28} color="white"/>
            </div>
            <div className="
            relative
            hidden
            lg:flex
            item-row
            gap-4
            p-4
            rounded-full
            hover:bg-blue-300
            hover:bg-opacity-50
            cursor-pointer
            ">
                <Icon size={28}color="white"/>
                <p className="hidden lg:block text-black text-xl">
                {label}
                </p>
            </div>
        </div>
    );
}
export default Sidebaritem