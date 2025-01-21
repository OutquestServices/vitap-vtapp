import { HoverEffect } from "./ui/card-hover-effect";

export function Sponsorship() {
  return (
    <div className="max-w-5xl mx-auto px-8 min-h-[60vh]">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Lenovo",
    src: "/sponsors/lenovo.jpg",
    link: "https://www.lenovo.com",
  },
  {
    title: "Google",
    src: "/sponsors/google.jpg",
    link: "https://www.google.com",
  },
  {
    title: "BOSCH",
    src: "/sponsors/bosch.png",
    link: "https://www.bosch.com",
  },
];
