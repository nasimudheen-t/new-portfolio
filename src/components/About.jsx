import React, { memo } from "react";
import { motion } from "framer-motion";

const About = memo(() => {
  const stats = [
    {
      value: "10+",
      label: "Projects Completed",
    },
    {
      value: "1+",
      label: "Years Experience",
    },
    {
      value: "BCA",
      label: "Graduate",
    },
    {
      value: "Open",
      label: "Available For Work",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden bg-black"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-red-500/10 blur-[150px] rounded-full" />

        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-red-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
          className="
            grid
            lg:grid-cols-[1fr_520px_1fr]
            gap-16
            items-center
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div className="max-w-xl">
            {/* Small Heading */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-red-500" />

              <p
                className="
                  uppercase
                  tracking-[5px]
                  text-sm
                  text-red-400
                  font-semibold
                "
              >
                ABOUT ME
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="
                text-5xl
                md:text-6xl
                xl:text-7xl
                font-black
                leading-[0.95]
                tracking-[-4px]
                text-white
                mb-10
              "
            >
              Passionate
              <br />
              About Building
              <br />
              Modern
              <span className="text-red-500">
                {" "}
                Web Apps.
              </span>
            </h2>

            {/* Description */}
            <div
              className="space-y-6 text-lg leading-relaxed  text-white/70"
            >
              <p>
                I am a Full Stack Developer focused on
                creating scalable, high-performance web
                applications using modern technologies like
                React, Node.js, Express, MongoDB, and Next.js.
              </p>

              <p>
                My passion lies in building clean user
                interfaces, optimized backend systems,
                and seamless digital experiences that
                solve real-world business problems.
              </p>

              <p>
                I continuously improve my skills in
                system architecture, API development,
                cloud deployment, and frontend engineering
                to build production-ready applications.
              </p>
            </div>
          </div>

          {/* ================= CENTER IMAGE ================= */}

          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute w-[420px] h-[420px] bg-red-500/20 blur-[120px] rounded-full" />

            {/* Image */}
            <motion.img
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="/images/about-1.png"
              alt="Nasimudheen"
              className="
                relative
                z-10
                h-[720px]
                w-full
                object-cover
                object-center
                rounded-[40px]
                shadow-[0_30px_80px_rgba(0,0,0,0.65)]
              "
            />

            {/* Bottom Text */}
            <div
              className="absolute z-20  bottom-8 left-8 right-8"
            >
              <div
                className="p-6 border  bg-black/40 backdrop-blur-md border-white/10 rounded-3xl"
              >
                <p
                  className="text-xl font-semibold leading-relaxed text-white "
                >
                  Creating modern digital experiences
                  with scalable architecture and
                  premium UI design.
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CARDS ================= */}

          <div className="space-y-5">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{
                  x: 10,
                }}
                className="p-8 transition-all duration-300 border  bg-white/5 border-white/10 backdrop-blur-md rounded-3xl hover:border-red-500/40"
              >
                <h3
                  className="mb-3 text-5xl font-black text-red-500 "
                >
                  {stat.value}
                </h3>

                <p
                  className="text-lg font-medium  text-white/70"
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;