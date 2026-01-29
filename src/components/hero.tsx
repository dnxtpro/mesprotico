import { motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedPath = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={470.214}
      height={110.242}
      viewBox="0 0 124.411 29.168"
      className="mx-auto"
    >
      <motion.path
        d="M282.96 309.377v-9.68h16.433v4.77h5.703v-21.051h11.614v15.14h16.695v4.562h7.57V284.66h17.11v22.191h5.08v-10.68h16.696v11.406h7.258v-3.63h5.6v-7.258h12.65v13.895"
        fill="none"
        stroke="#d6b136"
        strokeWidth={2}
        strokeLinecap="square"
        strokeLinejoin="miter"
        transform="translate(-281.96 -282.416)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        onAnimationComplete={onComplete}
      />
    </svg>
  );
};

const RevealImage = ({ shouldAnimate }: { shouldAnimate: boolean }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative overflow-hidden mt-4">
        <motion.div
          className="absolute inset-0 bg-gray-100 z-10"
          initial={{ x: "0%" }}
          animate={shouldAnimate ? { x: "100%" } : { x: "0%" }}
          transition={{
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        />
        <img 
          src="/rect120.svg" 
          alt="MESPROTICO" 
          className="w-full max-w-md mx-auto"
        />
      </div>
      <motion.p
        className="mt-4 text-xl text-gray-700"
        initial={{ opacity: 0 }}
        animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        construcciones y restauraciones en Menorca
      </motion.p>
    </div>
  );
};

function Hero() {
  const [showReveal, setShowReveal] = useState(false);
  const [key] = useState(0);

 

  const handlePathComplete = () => {
    setShowReveal(true);
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center py-8">
        <div className="flex flex-col items-center justify-center">
          <AnimatedPath key={key} onComplete={handlePathComplete} />
          <RevealImage shouldAnimate={showReveal} />
        </div>
      </div>
    </section>
  );    
}
export default Hero;