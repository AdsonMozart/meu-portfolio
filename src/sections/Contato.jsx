import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mozar7.dev@gmail.com",
    href: "mailto:mozar7.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatSapp",
    value: "(71) 98884-7768",
    href: "wa.me/+5571988847768",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Salvador, BA",
    href: "#",
  }
]

export const Contato = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Entre em contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Vamos construir{" "}
            <span className="font-serif italic font-normal text-white">
              algo incrível.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Possui algum projeto ou ideia em mente? Eu adoraria escutar. Envie para mim
            uma mensagem e vamos conversar sobre como podemos colocar em prática trabalhando juntos.
          </p>
        </div>
      </div> 
    </section>
  );
};
