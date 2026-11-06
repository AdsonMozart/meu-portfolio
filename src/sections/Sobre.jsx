import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Escrevo código limpo, legível e de fácil manutenção, seguindo boas práticas de desenvolvimento.",
  },
  {
    icon: Rocket,
    title: " Alta Performance",
    description:
      "Otimizo aplicações para garantir alta performance e eficiência com o recurso necessário, proporcionando uma experiência fluida aos usuários.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Aprecio a comunicação e o trabalho em equipe para promover o alinhamento e o alto rendimento.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Busco constantemente me atualizar com novas soluções e abordagens criativas para resolver problemas complexos.",
  },
];

export const Sobre = () => {
  return (
    <section id="sobre" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Sobre mim</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Superando limites,
              <span className="font-serif italic font-normal text-white">
                 {" "}
                 um obstáculo de cada vez.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Sou graduado em Sistemas de Informação, com sólida experiência no setor de
                suporte, monitoração e automações, tenho foco em construir soluções full-stack
                completas e eficientes. Aplicando sempre boas práticas de arquitetura, design,
                testes e automações. Busco oportunidade como Desenvolvedor de Software, valorizo
                bastante inovação, melhoria de processos, colaboração em equipe e aprendizado contínuo.
              </p>
              <p>
                Desenvolvo aplicações robustas e escaláveis geralmente em Java, .NET e React integradas à IA.
                Minha abordagem conecta engenharia de software, metodologia ágil e um pouco da cultura
                DevOps aplicando versionamento, conteinerização e pipelines de deploy para otimizar o fluxo
                de entrega até a produção.
              </p>
              <p>
                Quando não estou codando, estou sembre buscando explorar novas tecnologias, contribuindo
                em projetos, realizando desafios, me atualizando em fóruns da comunidade sobre o avanço tech
                para permanecer sempre em evolução e entregando soluções de alta qualidade.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Minha missão é criar experiências digitais que além de funcionais, sejam verdadeiramente
                encantadoras, produtos que os usuários sejam apaixonados em utilizar, que os desenvolvedores tenham
                facilidade em manter e que promovam um impacto real na vida das pessoas trazendo praticidade."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-2xl glow-border animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
