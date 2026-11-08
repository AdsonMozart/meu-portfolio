const experiencias = [
  {
    period: "02/2025 — Atualmente",
    role: "Analista de Monitoração RPA",
    company: "BiTi9",
    description:
      "Monitoramento de processos RPA em produção e gestão de filas em UiPath, Electroneek e IBM. Desenvolvimento de agente com Dify no hackathon interno, elevando a produtividade da rotina em 30%.",
    tools: ["UiPath", "Electroneek", "IBM RPA", "Python", "Dify", "Google AI Studio", "Antigravity"],
    current: true,
  },
  {
    period: "07/2022 — 02/2025",
    role: "Analista de Suporte Computacional I",
    company: "Polisystem",
    description:
      "Gestão de chamados via GLPI, testes de endpoints para o desenvolvimento e criação de plano de treinamento que reduziu o tempo de capacitação pela metade. Administração de bancos Microsoft SQL Server.",
    tools: ["GLPI", "Microsoft SQL Server", "SQL"],
    current: false,
  },
  {
    period: "10/2020 — 07/2022",
    role: "Estagiário de TI",
    company: "Polisystem",
    description:
      "Suporte técnico remoto a clientes e configuração de ativos de TI. Criação da documentação oficial de processos no Trello e Notion, reduzindo o tempo de onboarding em cerca de 45%.",
    tools: ["Excel", "AnyDesk", "TeamViewer", "Microsoft Teams", "Google Meet", "Trello", "Notion"],
    current: false,
  },
]

export const Experiencias = () => {
  return (
  <section id="experiencia" className="py-32 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
  
    <div className="container mx-auto px-6 relative z-10">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          Jornada de carreira
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
          Vivência em{" "}
          <span className="font-serif italic font-normal text-white">
            {" "}funções complementares.
          </span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
          Uma linha do tempo do meu crescimento profissional, de um estagiário curioso até Analista de Monitoração.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
        
        {/* Experience Items */}
        <div className="space-y-12">
          {experiencias.map((exp, index) => (
            <div 
              key={index} 
              className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                )}
              </div>

              {/* Content */}
              <div
                className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
              >
                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                  <span className="text-sm text-primary font-medium">{exp.period}</span>
                  <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                  <div>
                    {exp.tools.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};
