import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-brand-bg border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-[20%] w-[600px] h-[500px] bg-brand-accent/5 blur-[150px] rounded-[100%] opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-brand-accent" />
            <p className="font-grotesk uppercase tracking-[0.2em] text-xs text-brand-accent font-semibold text-glow">
              LET'S CONNECT
            </p>
            <span className="w-10 h-[1px] bg-brand-accent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-white tracking-tight mb-6">
            Get In Touch.
          </h2>
          <p className="font-inter text-brand-text-secondary text-base md:text-lg max-w-2xl font-light">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-sora font-semibold text-white mb-8 tracking-wide">Contact Information</h3>
            <div className="space-y-8">
              <a
                href="mailto:nasimudheent22@gmail.com"
                className="group flex items-center gap-6 text-brand-text-secondary hover:text-white transition-colors"
              >
                <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center border border-white/5 group-hover:border-brand-accent/50 group-hover:bg-brand-accent/10 transition-all duration-300">
                  <Mail size={24} className="text-brand-text-secondary group-hover:text-brand-accent transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-brand-text-secondary/60 mb-1">Email</span>
                  <span className="font-inter font-light text-base md:text-lg">nasimudheent22@gmail.com</span>
                </div>
              </a>
              <a
                href="tel:+918547636667"
                className="group flex items-center gap-6 text-brand-text-secondary hover:text-white transition-colors"
              >
                <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center border border-white/5 group-hover:border-brand-accent/50 group-hover:bg-brand-accent/10 transition-all duration-300">
                  <Phone size={24} className="text-brand-text-secondary group-hover:text-brand-accent transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-brand-text-secondary/60 mb-1">Phone</span>
                  <span className="font-inter font-light text-base md:text-lg">+91 85476 36667</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Glassmorphic Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-inter text-xs font-medium text-brand-text-secondary uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-brand-bg/50 border border-white/10 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-white font-light placeholder-brand-text-secondary/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-inter text-xs font-medium text-brand-text-secondary uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-brand-bg/50 border border-white/10 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-white font-light placeholder-brand-text-secondary/30"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block font-inter text-xs font-medium text-brand-text-secondary uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-brand-bg/50 border border-white/10 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none text-white font-light placeholder-brand-text-secondary/30"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-brand-accent text-white font-sora font-semibold tracking-wide hover:bg-brand-accent/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
                {status === "success" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center text-sm font-inter">Message sent successfully!</motion.p>
                )}
                {status === "error" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-center text-sm font-inter">Failed to send message. Please try again.</motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      <footer className="relative z-10 mt-32 pt-8 pb-8 text-center text-brand-text-secondary/60 text-sm border-t border-white/5 max-w-7xl mx-auto px-6 font-inter">
        <p>&copy; {new Date().getFullYear()} Nasimudheen T. All rights reserved.</p>
      </footer>
    </section>
  );
}
