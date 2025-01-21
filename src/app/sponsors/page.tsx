import { Footer } from "@/components/Home/Fotter";
import Navbar from "@/components/Home/Navbar";
import { Sponsorship } from "@/components/sponsorssection";

export default function Page() {
  return (
    <div className="bg-black md:pt-10">
      <Navbar />
      <Sponsorship />
      <Footer />
    </div>
  );
}
