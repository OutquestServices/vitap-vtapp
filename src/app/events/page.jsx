import { Events } from "@/components/events/events";
import { Footer } from "@/components/Home/Fotter";
import Navbar from "@/components/Home/Navbar";

export default function Page() {
  return (
    <div className="bg-black md:pt-10">
      <Navbar />
      <div className="h-full bg-none flex items-center justify-center py-20 md:py-28 lg:py-32">
        <Events />
      </div>
      <Footer />
    </div>
  );
}
