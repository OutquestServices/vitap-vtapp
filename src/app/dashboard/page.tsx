import Dashboard from "@/components/Dashboards/Dashboard";
import { Footer } from "@/components/Home/Fotter";
import Navbar from "@/components/Home/Navbar";

export default function Page() {
  return (
    <div className="bg-black">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}
