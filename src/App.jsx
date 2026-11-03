import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Sobre } from "@/sections/Sobre";
import { Projetos } from "@/sections/Projetos";
import { Experiencias } from "@/sections/Experiencias";
import { Depoimentos } from "@/sections/Depoimentos";
import { Contato } from "@/sections/Contato";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Experiencias />
        <Depoimentos />
        <Contato />
      </main>
    </div>
  )
}

export default App;
