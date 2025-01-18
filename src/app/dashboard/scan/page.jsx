import { Footer } from "@/components/Home/Fotter";
import Navbar from "@/components/Home/Navbar";
import VerifyQR from "../../../components/Dashboards/verifyQr";

export default function Page() {
  return (
    <div className="bg-black">
      <Navbar />
      <VerifyQR />
      <Footer />
    </div>
  );
}
