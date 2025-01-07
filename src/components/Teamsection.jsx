import { AnimatedTestimonials } from "./Home/animated-testimonials";

export function Team() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/about.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/about.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/about.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/about.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/about.png",
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
          <a className="bg-white text-black p-2 rounded-md" href="/team">Meet the Team</a>
        </div>
        <div className="relative flex flex-col items-start justify-center h-fit gap-10 p-4">
          <h1 className="text-4xl font-semibold text-white">Sponsors</h1>
          <p className="text-white text-left w-full">
            Our sponsors help us bring you the best experience possible. We are
            grateful for their support and dedication to our mission.
          </p>
          <a className="bg-white text-black p-2 rounded-md" href="/sponsors">View Sponsors</a>
        </div>
      </div>
    </div>
  );
}
