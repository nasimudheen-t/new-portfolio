import { motion } from "framer-motion";
import { Mail, ArrowRight, ChevronDown } from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#dfe1e5] overflow-hidden flex items-center"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Desktop Background */}
      <div
        className="absolute top-0 right-0 w-[52%] h-full bg-black hidden lg:block"
        style={{
          clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Mobile Background */}
      <div
        className="absolute bottom-0 left-0 w-full h-[50%] bg-black lg:hidden"
        style={{
          clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full" />
        </div>
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 max-w-[1550px] mx-auto px-6 md:px-10 lg:px-16 w-full min-h-screen flex flex-col lg:flex-row">
        {/* ================= LEFT SIDE ================= */}

        <div className="w-full lg:w-1/2 flex flex-col justify-center pt-32 lg:pt-0 pb-16 relative">
          {/* Logo */}
          <div className="absolute top-10 left-0 hidden lg:block">
            <h2 className="text-3xl font-black tracking-tight text-black">
              NT<span className="text-red-500">.</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Intro */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#444]" />
              <p className="uppercase tracking-[4px] text-sm text-[#444] font-semibold">
                Hi, I am
              </p>
            </div>

            {/* Name */}
            <h1
              className="
                text-[3.5rem]
                sm:text-[5rem]
                lg:text-[6rem]
                xl:text-[7rem]
                font-black
                tracking-[-4px]
                text-[#111]
                leading-[0.9]
              "
            >
              Nasimudheen
            </h1>

            {/* Role */}
            <h2 className="mt-5 text-xl sm:text-2xl text-[#222] font-medium">
              Full Stack Developer /{" "}
              <span className="text-red-500">MERN Developer</span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-[#555] text-base sm:text-lg leading-relaxed max-w-xl font-light">
              I build modern, scalable, responsive, and SEO-optimized web
              applications with clean UI, powerful backend systems, and premium
              user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                href="/cv/Nasimudheen_T.pdf"
                download="Nasimudheen_T.pdf"
                className="
                  px-8 py-4
                  bg-black
                  text-white
                  text-sm
                  font-semibold
                  rounded-full
                  shadow-xl
                  transition-all
                  duration-300
                  flex items-center gap-2
                                           "
              >
                View CV
                <ArrowRight size={17} />
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="
                  px-8 py-4
                  bg-white
                  text-black
                  text-sm
                  font-semibold
                  rounded-full
                  border border-gray-200
                  shadow-md
                  transition-all
                  duration-300
                "
              >
                Contact Me
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-14">
              {[
                {
                  icon: Github,
                  href: "https://github.com/nasimudheen-t",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/nasimudheen-t/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/nasym_._/",
                },
                {
                  icon: Mail,
  href: "https://mail.google.com/mail/?view=cm&to=nasimudheent22@gmail.com",
                },
              ].map((social, idx) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      w-14 h-14
                      bg-white
                      rounded-2xl
                      border border-gray-200
                      shadow-md
                      flex items-center justify-center
                      text-[#333]
                      hover:text-black
                      transition-all duration-300
                    "
                  >
                    <Icon size={22} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="w-full lg:w-1/2 relative flex flex-col justify-between">
          {/* Navbar */}
          <nav className="absolute top-10 right-10 hidden lg:flex items-center gap-10 z-20">
            {["About", "Skills", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-white/80
                  hover:text-white
                  text-sm
                  font-medium
                  relative
                  transition-all
                  duration-300
                  group
                "
              >
                {item}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-0
                    h-[2px]
                    bg-white
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="
                px-7 py-3
                bg-white
                text-black
                rounded-full
                text-sm
                font-bold
                shadow-xl
              "
            >
              Contact
            </motion.a>
          </nav>

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="flex-1 flex items-end justify-center relative"
          >
            <div className="relative flex items-end justify-center">
              {/* Glow */}
              <div className="absolute w-[350px] h-[350px] bg-white/10 blur-[120px] rounded-full bottom-20" />

              {/* Border Frame */}
              <div
                className="
        absolute
        inset-0
        rounded-[30px]
        border
        border-white/20
        shadow-[0_0_40px_rgba(255,255,255,0.06)]
        backdrop-blur-[2px]
        scale-[1.02]
      "
              />

              {/* Image */}
              <motion.img
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="/images/Nasim.jpg"
                alt="Nasimudheen"
                className="
        relative z-10
        h-[65vh]
        sm:h-[75vh]
        lg:h-[88vh]
        w-auto
        object-contain
        rounded-[30px]
        border border-white/10
        drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)]
      "
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 88%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 88%, transparent 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
            className="
              absolute
              bottom-10
              right-10
              hidden
              lg:flex
              flex-col
              items-center
              gap-2
              text-white/50
            "
          >
            <span className="text-[10px] uppercase tracking-[4px] rotate-90 mb-7">
              Scroll
            </span>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
