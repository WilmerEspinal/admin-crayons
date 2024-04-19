import { Outlet } from "react-router-dom";
import IconStudent from "../assets/icons/Student.svg";
import IconHome from "../assets/icons/Home.svg";
import IconTeacher from "../assets/icons/Teacher.svg";
import IconCalendar from "../assets/icons/Calendar.svg";
import LinkNav from "@/components/ui/link";


const HomeLayout = () => {
    return (
        <>
        <main>
            <section className="flex">
                <section className="h-screen w-2/12 min-w-40 bg-governor-bay-700 text-white">
                    <h2 className="text-center text-4xl">Logo</h2>
                    <div className="mt-8 pl-7">
                        <LinkNav name="Dashboard" imgUrl={IconHome}/>
                        <LinkNav name="Estudiantes" imgUrl={IconStudent}/>
                        <LinkNav name="Profesores" imgUrl={IconTeacher}/>
                        <LinkNav name="Examen" imgUrl={IconStudent}/>
                        <LinkNav name="Eventos" imgUrl={IconCalendar}/>
                    </div>
                </section>
                <section className="w-screen h-screen bg-governor-bay-100">
                    
                </section>
            </section>
            <section>
                <Outlet/>
            </section>
        </main>
        </>
    )
}
export default HomeLayout