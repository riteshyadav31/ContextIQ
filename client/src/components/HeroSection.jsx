// HeroSection.jsx
import { motion } from "framer-motion";
import { FiCheckCircle, FiFileText, FiLock } from "react-icons/fi";

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="app-hero text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative inline-flex p-[1.5px] rounded-full mb-6 overflow-hidden"
      >
        {/* Permanent faint ring — keeps the pill's edge visible
            even in the moment the animated sweep is on the far side */}
        <span className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />

        {/* Slow single-arc sweep — reads as a subtle "live" highlight,
            not a loading spinner */}
        <span
          className="absolute inset-[-150%] animate-[spin_5s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, transparent 78%, rgba(103,232,249,0.9) 88%, rgba(59,130,246,0.6) 94%, transparent 100%)",
          }}
        />

        <span className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#080d17]">
          <FiFileText className="text-cyan-400 text-base shrink-0" />
          <span className="text-sm sm:text-base font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
            ContextIQ
          </span>
        </span>
      </motion.div>

      <h1 className="font-bold">
        Make sense of
        <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          every document.
        </span>
      </h1>

      <p className="app-hero-copy mt-5 mx-auto leading-relaxed">
        Turn your files into clear summaries, useful notes, and grounded answers
        you can trust.
      </p>

      <div className="hero-benefits" aria-label="ContextIQ benefits">
        <span><FiCheckCircle aria-hidden="true" /> Answers with source context</span>
        <span><FiFileText aria-hidden="true" /> PDFs, documents & images</span>
        <span><FiLock aria-hidden="true" /> Your API key stays private</span>
      </div>
    </motion.div>
  );
}

export default HeroSection;