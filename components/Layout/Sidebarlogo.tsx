import { useRouter } from "next/router";
import { BsShop } from "react-icons/bs";
const Sidebarlogo = ()=>{
    const router = useRouter();
    return(
        <div className="
        rounded-full
        h-50
        w-50
        p-4
        flex
        items-center
        justify-center
        hover:bg-blue-300
        hober:bg-opacity-10
        cursor-pointer
        transition
        ">
        <BsShop size={50} color="white"/>
        </div>
    );
}
export default Sidebarlogo