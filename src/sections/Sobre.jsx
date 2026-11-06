import { Code2 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Escrevo código limpo, legível e de fácil manutenção, seguindo boas práticas de desenvolvimento.",
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
        </div>
      </div>
    </section>
  );
};
