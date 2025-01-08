import { AnimatedTestimonials } from "./Home/animated-testimonials";

export function Team() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Dr. G. Viswanathan",
      designation: "Founder & Chancellor, VIT",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.%20G.%20Viswanathan.avif",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Mr. Sankar Viswanathan",
      designation: "Vice-President, VIT",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Mr.%20Sankar%20Viswanathan.avif",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Dr. Sekar Viswanathan",
      designation: "Vice-President, VIT",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.%20Sekar%20Viswanathan.avif",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Dr. G. V. Selvam",
      designation: "Vice-President, VIT",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.%20G.%20V.%20Selvam.avif",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Dr. Sandhya Pentareddy",
      designation: "Executive Director",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.%20Sandhya%20Pentareddy.avif",
    },
    {
      quote:
        "The platform is intuitive and easy to use. It has helped us streamline our processes and improve overall efficiency.",
      name: "Dr. S. V. Kota Reddy",
      designation: "Vice Chancellor",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.%20S.%20V.%20Kota%20Reddy.avif",
    },
    {
      quote:
        "We are extremely pleased with the results. The platform has exceeded our expectations and we are excited to continue using it.",
      name: "Dr. Jagadish Chandra Mudiganti",
      designation: "Registrar",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.-JAGADISH-CHANDRAMUDIGANTI.avif",
    },
    {
      quote:
        "The platform has revolutionized the way we work. It has helped us become more efficient and productive as a team.",
      name: "Dr. Hussain Syed",
      designation: "Convener",
      src: "https://vitap-backend.s3.ap-south-1.amazonaws.com/Dr_Hussain_Syed_70032_IMG_4953_SCOPE_d31f2b1b37.avif",
    },
    {
      quote:
        "We are thrilled with the platform's performance and ease of use. It has helped us streamline our processes and improve overall efficiency.",
      name: "Dr.SK.KHADHEER PASHA",
      designation: "Deputy Director, Student Welfare",
      src: "https://vitap-backend.s3.ap-south-1.amazonaws.com/Dr_Khadheer_Pasha_Sk_IMG_9445_A_SASPHY_21a18e2791.avif",
    },
    {
      quote:
        "The platform has been a game-changer for our organization. It has helped us improve efficiency and streamline our processes.",
      name: "Dr. Asish Kumar Dalai",
      designation: "Co - Convener",
      src: "https://vitap-backend.s3.ap-south-1.amazonaws.com/Dr_Asish_Kumar_Dalai_70054_IMG_2613_SCOPE_8d41a5d321.avif",
    },
    {
      quote:
        "The platform has been a game-changer for our organization. It has helped us improve efficiency and streamline our processes.",
      name: "Dr. S. Gopikrishnan",
      designation: "Co - Convener",
      src: "https://vitap-backend.s3.ap-south-1.amazonaws.com/Dr_S_Gopikrishnan_70107_0214_0692d6708b.avif",
    },
  ];
  return (
    <div>
      <div className="relative bg-black flex-col items-center justify-center h-fit hidden md:flex">
        <h1 className="text-4xl font-semibold text-white">Our Team</h1>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <div className="md:hidden flex flex-col gap-16 bg-black">
        <div className="relative flex flex-col items-start justify-center h-fit gap-10 p-4">
          <h1 className="text-4xl font-semibold text-white">Our Team</h1>
          <p className="text-white text-left w-full">
            Our team is dedicated to providing the best experience for our
            customers. We are always here to help you with any questions or
            concerns you may have.
          </p>
          <a className="bg-white text-black p-2 rounded-md" href="/team">
            Meet the Team
          </a>
        </div>
        <div className="relative flex flex-col items-start justify-center h-fit gap-10 p-4">
          <h1 className="text-4xl font-semibold text-white">Sponsors</h1>
          <p className="text-white text-left w-full">
            Our sponsors help us bring you the best experience possible. We are
            grateful for their support and dedication to our mission.
          </p>
          <a className="bg-white text-black p-2 rounded-md" href="/sponsors">
            View Sponsors
          </a>
        </div>
      </div>
    </div>
  );
}
