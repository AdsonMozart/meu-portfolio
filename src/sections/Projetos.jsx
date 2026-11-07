import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Bilheteria Digital",
    description: "Um sistema de compra de bilhetes para cinema e shows em tempo real.",
    image:"projeto_mozartickets.png",
    tags: ["React", "Typescript", "Java", "MySQL", "Stripe Payment", "Docker"],
    link: "https://bilheteria-digital.vercel.app",
    github: "https://github.com/AdsonMozart/bilheteria-digital.git"
  }
]

export const Projetos = () => {
  return (
    <section id="projetos" className="py-32 relative overflow-hidden">
      
      {/*Bg Glows*/}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
      
        {/*Section Header*/}
        <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Trabalho em destaque
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Projetos
              <span className="font-serif italic font-normal text-white">
                {" "}
                e seus impactos.
              </span>
            </h2>
            <p className= "text-muted-foreground animate-fade-in animation-delay-200">
              Seção destinada aos meus projetos recentes, com identificação das tecnologias e ferramentas utilizadas
              em sua construção.
            </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((projects, index) => (
            <div 
              key={index} 
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className = "absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
                {/* Overlay Links*/}
                <div className= "absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={projects.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground trasition-all">
                    <ArrowUpRight className="w-5 h-5"/>
                  </a>
                  <a href={projects.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground trasition-all">
                    <FaGithub className="w-5 h-5"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
