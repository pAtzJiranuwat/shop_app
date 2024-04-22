import { BsBellFill, BsHousesFill,BsFolder } from "react-icons/bs";
import{FaUser}from 'react-icons/fa';
import Sidebarlogo from "./Sidebarlogo";
import Sidebaritem from "./Sidebaritem";
import { BiLogOut } from "react-icons/bi";
import SidebarLoginButton from "./SidebarLogin";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
const Sidebar = () => {
    const {data:currentUser} = useCurrentUser();
    const items =[
        {
            label:'Catagory',
            href: '/',
            icon: BsFolder
        },
        {
            label: 'Notification',
            href:'/notification',
            icon: BsBellFill
        },
        {
            label:'Profile',
            href:'/user/123',
            icon: FaUser
        }

    ]
    return(
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col item-end">
                <div className="space-y-2 lg:w-[230px]">
                <Sidebarlogo />
                {items.map((item)=>(
                    <Sidebaritem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    />
                ))}
                {currentUser &&(
                <Sidebaritem onClick={()=> signOut()} icon={BiLogOut} label="Logout"/>
                )}
                <SidebarLoginButton/>
                
                </div>
            </div>
        </div>
    );
}

export default Sidebar;