import { About } from "../components/Aboutsection";
import Hero from "../components/Herosection";
import { Team } from "../components/Teamsection";
import { Tshirts } from "../components/tshirts";

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Team />
      <Tshirts />
    </div>
  );
}
