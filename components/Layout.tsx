import Sidebar from "./Layout/Sidebar";

interface LayoutProps{
    children: React.ReactNode;
}
const Layout:React.FC<LayoutProps> = ({children}) => {
    return(
        <div className="h-screen bg-emerald-200">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl">
                <div className="grid grid-cols-5 h-full">
                    <Sidebar/> 
                    <div className="
                    col-span-2
                    lg:col-span-4
                    border-x-[1px]
                    border-neutral-800"
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;