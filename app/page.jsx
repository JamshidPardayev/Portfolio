import Image from "next/image";
import Header from "./header/page";
import Service from "./service/page";
import Projects from "./projects/page";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="w-full  overflow-x-hidden">
      <Header />
      <Service />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
