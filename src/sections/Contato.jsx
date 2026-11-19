import { Button } from "@/components/Botao";
import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mozar7.dev@gmail.com",
    href: "mailto:mozar7.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
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
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  useEffect(() => {
    if (submitStatus.type !== "success") return;

    const timer = setTimeout(() => {
      setSubmitStatus({ type: null, message: "" });
    }, 5000);

    return () => clearTimeout(timer);
  }, [submitStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: ""})
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS não configurado. Por favor, verifique suas variáveis de ambiente.");
      }

      await emailjs.send(serviceId, templateId, {name: formData.name, email: formData.email, message:formData.message}, publicKey);

      setSubmitStatus({type: "success", message: "Mensagem enviada com sucesso! Retornarei o mais breve possível.",});
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Erro do EmailJS:", error);
      setSubmitStatus({type: "error", message: error.text || "Falha ao enviar mensagem. Por favor, tente novamente mais tarde."});

    } finally {
      setIsLoading(false);
    }
  };
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input id="name" type="text" required placeholder="Seu nome..." value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
              </div>

              <div>
                <label htmlFor="email" type="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input id="email" type="email" required placeholder="seu@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea id="message" rows={5} required placeholder="Sua mensagem..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"/>
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Enviando...</>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Informações de contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Disponível</span>
              </div>
              <p className="text-muted-foreground text-sm">
                No momento, sigo disponível a novas ideias e projetos.
                Vamos conversar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
