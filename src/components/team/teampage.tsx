import { FocusCards } from "./focus-cards";

export function TeamPage() {
  const cards = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      title: "Dr. G. Viswanathan",
      designation: "Founder & Chancellor, VIT",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.%20G.%20Viswanathan.avif",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      title: "Mr. Sankar Viswanathan",
      designation: "Vice-President, VIT",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Mr.%20Sankar%20Viswanathan.avif",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      title: "Dr. Sekar Viswanathan",
      designation: "Vice-President, VIT",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.%20Sekar%20Viswanathan.avif",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      title: "Dr. G. V. Selvam",
      designation: "Vice-President, VIT",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.%20G.%20V.%20Selvam.avif",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      title: "Dr. Sandhya Pentareddy",
      designation: "Executive Director",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.%20Sandhya%20Pentareddy.avif",
    },
    {
      quote:
        "The platform is intuitive and easy to use. It has helped us streamline our processes and improve overall efficiency.",
      title: "Dr. S. V. Kota Reddy",
      designation: "Vice Chancellor",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.%20S.%20V.%20Kota%20Reddy.avif",
    },
    {
      quote:
        "We are extremely pleased with the results. The platform has exceeded our expectations and we are excited to continue using it.",
      title: "Dr. Jagadish Chandra Mudiganti",
      designation: "Registrar",
      src: "https://www.vitap.ac.in/AVIF_Images/Leadership_Page/Dr.-JAGADISH-CHANDRAMUDIGANTI.avif",
    },
    {
      quote:
        "We are thrilled with the platform's performance and ease of use. It has helped us streamline our processes and improve overall efficiency.",
      title: "Dr.SK.KHADHEER PASHA",
      designation: "Deputy Director, Student Welfare",
      src: "https://vitap-backend.s3.ap-south-1.amazonaws.com/Dr_Khadheer_Pasha_Sk_IMG_9445_A_SASPHY_21a18e2791.avif",
    },
    {
      quote:
        "The platform has revolutionized the way we work. It has helped us become more efficient and productive as a team.",
      title: "Dr. Hussain Syed",
      designation: "Convener",
      src: "https://vitap-backend.s3.ap-south-1.amazonaws.com/Dr_Hussain_Syed_70032_IMG_4953_SCOPE_d31f2b1b37.avif",
    },
    {
      quote:
        "The platform has been a game-changer for our organization. It has helped us improve efficiency and streamline our processes.",
      title: "Dr. Asish Kumar Dalai",
      designation: "Co - Convener",
      src: "https://vitap-backend.s3.ap-south-1.amazonaws.com/Dr_Asish_Kumar_Dalai_70054_IMG_2613_SCOPE_8d41a5d321.avif",
    },
    {
      quote:
        "The platform has been a game-changer for our organization. It has helped us improve efficiency and streamline our processes.",
      title: "Dr. S. Gopikrishnan",
      designation: "Co - Convener",
      src: "https://vitap-backend.s3.ap-south-1.amazonaws.com/Dr_S_Gopikrishnan_70107_0214_0692d6708b.avif",
    },
  ];

  return <FocusCards cards={cards} />;
}
