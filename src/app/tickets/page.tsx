import { Footer } from "@/components/Home/Fotter";
import Navbar from "@/components/Home/Navbar";
import TicketForm from "@/components/Tickets/ticketform";

export default function Page() {
  return (
    <div className="bg-black">
      <Navbar />
      <TicketForm />
      <Footer />
    </div>
  );
}
