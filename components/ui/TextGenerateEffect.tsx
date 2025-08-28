"use client";
import { useState, useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();

  // Animate words
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  // Detect scroll direction for portfolio
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (current < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0); // show when scrolling up, hide when scrolling down
      }
    }
  });

  // Render animated words
  const renderWords = () => (
    <motion.div ref={scope}>
      {words.split(" ").map((word, idx) => (
        <motion.span
          key={word + idx}
          className={`${idx > 3 ? "text-purple" : "dark:text-white text-black"} opacity-0`}
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("relative font-bold", className)}>
      {/* Floating Portfolio */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
            className="fixed top-10 left-10 z-[5001]"
          >
            <Link
              href="/"
              className={cn(
                "dark:text-white flex items-center space-x-1 text-black dark:hover:text-neutral-300 hover:text-purple-500"
              )}
            >
              <span className="text-2xl font-bold !cursor-pointer text-purple">
                Deepika's Portfolio
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Words */}
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
