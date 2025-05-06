// app/page.jsx

import Header from "./header/page";
import Service from "./service/page";
import Projects from "./projects/page";
import About from "./about/page";
import Contact from "./contact/page";
import { Meteors } from "@/components/magicui/meteors";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">

      <div className="fixed inset-0 pointer-events-none">
        <Meteors className={"mt-[120px]"}/>
        <Meteors className={"mt-[120px]"}/>
        <Meteors className={"mt-[120px]"}/>
        <Meteors className={"mt-[120px]"}/>
        <Meteors className={"mt-[120px]"}/>
      </div>

      <Header />
      <About />
      <Service />
      <Projects />
      <Contact />
    </div>
  );
}
