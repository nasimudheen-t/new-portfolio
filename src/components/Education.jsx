import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-32 border-t border-border-soft">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-deep tracking-tight mb-4">
              Education.
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              My academic background and qualifications.
            </p>
          </div>

          <div className="bg-cream-alt border border-border-soft rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between shadow-sm">
            <div className="flex items-start gap-6">
              <div className="mt-1 p-4 bg-cream-bg rounded-xl text-accent-gold hidden sm:block border border-border-soft">
                <GraduationCap size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-text-deep mb-2">Bachelor of Computer Applications</h3>
                <h4 className="text-text-muted text-lg font-medium">University of Calicut</h4>
              </div>
            </div>
            <div className="mt-6 md:mt-0 text-sm font-medium text-text-muted uppercase tracking-wider pl-0 sm:pl-20 md:pl-0">
              2021 — 2024
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
