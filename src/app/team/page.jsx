import { Footer } from "@/components/Home/Fotter";
import Navbar from "@/components/Home/Navbar";
import { TeamPage } from "@/components/team/teampage";

export default function Page() {
  return (
    <div className="bg-black md:py-10">
      <Navbar />
      <TeamPage />
      <Footer />
    </div>
  );
}
