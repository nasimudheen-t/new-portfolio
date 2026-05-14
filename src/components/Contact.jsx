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
    <section id="contact" className="py-32 border-t border-border-soft bg-cream-alt">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-deep tracking-tight mb-6">
            Get In Touch.
          </h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold text-text-deep mb-8">Contact Information</h3>
            <div className="space-y-6">
              <a
                href="mailto:nasimudheent22@gmail.com"
                className="flex items-center gap-4 text-text-muted hover:text-accent-gold transition-colors text-lg"
              >
                <div className="p-4 bg-cream-bg rounded-full text-accent-gold border border-border-soft">
                  <Mail size={24} />
                </div>
                nasimudheent22@gmail.com
              </a>
              <a
                href="tel:+918547636667"
                className="flex items-center gap-4 text-text-muted hover:text-accent-gold transition-colors text-lg"
              >
                <div className="p-4 bg-cream-bg rounded-full text-accent-gold border border-border-soft">
                  <Phone size={24} />
                </div>
                +91 85476 36667
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-deep mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-cream-bg border border-border-soft focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all text-text-deep"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-deep mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-cream-bg border border-border-soft focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all text-text-deep"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-deep mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-cream-bg border border-border-soft focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all resize-none text-text-deep"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl bg-accent-gold text-white font-medium hover:bg-[#b8955c] transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-70"
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
                <p className="text-green-600 text-center text-sm font-medium">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center text-sm font-medium">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-32 pt-8 pb-8 text-center text-text-muted text-sm border-t border-border-soft max-w-6xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Nasimudheen T. All rights reserved.</p>
      </footer>
    </section>
  );
}
