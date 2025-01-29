import { Footer } from "@/components/Home/Fotter";
import Navbar from "@/components/Home/Navbar";
import Registrations from "@/components/Dashboards/records"

export default function Page() {
    return (
        <div className="bg-black">
            <Navbar />
            <Registrations />
            <Footer />
        </div>
    )
}