import { SideNavigation } from "@/Components/ProfileDashboardSIdeBar";
import { GetUserInserver } from "@/lib/Action/GetUser";




export default async function DashboardLayout({ children }) {
    const Userinfo = await GetUserInserver()



    return (
        <div className=" md:flex   min-h-screen">
            <SideNavigation Userinfo={Userinfo}></SideNavigation>
            <main className="flex-1">{children}</main>

        </div>
    );
}