import { Outlet } from "react-router-dom";
import IconStudent from "../assets/icons/Student.svg";
import IconHome from "../assets/icons/Home.svg";
import IconTeacher from "../assets/icons/Teacher.svg";
import IconCalendar from "../assets/icons/Calendar.svg";
import LinkNav from "@/components/ui/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdNotificationsNone } from "react-icons/md";



const HomeLayout = () => {
    return (
        <>
            <main>
                <section className="">
                    <section className="h-16 w-full bg-governor-bay-100 flex">
                        <div className="flex items-center h-16 bg-governor-bay-700 min-w-64 w-64 justify-center ">
                            <h1 className="text-4xl text-white">Logo</h1>
                        </div>
                        <div className="flex items-center justify-between bg-governor-bay-100 w-full" >
                            <div>
                                <h2 className=" text-governor-bay-800 text-2xl font-medium">Dashboard</h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <button>
                                <MdNotificationsNone className=" text-3xl bg-white rounded-full text-governor-bay-500" />
                                </button>
                            
                                <button>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                </button>
                                
                            </div>
                        </div>
                    </section>
                    <section className="flex">
                        <section className="h-screen min-w-64 w-64  bg-governor-bay-700 text-white">
                            <div className="mt-8 pl-7">
                                <LinkNav name="Dashboard" imgUrl={IconHome} />
                                <LinkNav name="Estudiantes" imgUrl={IconStudent} />
                                <LinkNav name="Profesores" imgUrl={IconTeacher} />
                                <LinkNav name="Examen" imgUrl={IconStudent} />
                                <LinkNav name="Eventos" imgUrl={IconCalendar} />
                            </div>
                        </section>
                        <section className="h-screen w-full bg-governor-bay-100">

                        </section>
                    </section>

                </section>
                <section>
                    <Outlet />
                </section>
            </main>
        </>
    )
}
export default HomeLayout