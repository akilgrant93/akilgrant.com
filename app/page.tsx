import Image from "next/image";
import Hero from "@/components/Hero"; 
import Grid from "@/components/Grid"; 
import Projects from "@/components/Projects"; 
import { FloatingNav } from "@/components/ui/FloatingNav";
import { BiHome } from "react-icons/bi";

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto'>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <BiHome />}, 
          {name: 'Projects', link: '#projects'},  
          {name: 'Contact', link: '#contact'}]}
        />
        <Hero />  
        <Grid />
        {/* <Projects /> */}
      </div>
    </main>
  );
}
