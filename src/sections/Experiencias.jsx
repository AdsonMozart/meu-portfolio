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
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
          >Jornada de carreira
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
          Vivência em{" "}
          <span className="font-serif italic font-normal text-white">
            {" "}funções complementares.
          </span>
        </h2>
      </div>
    </div>
  </section>
  );
};
