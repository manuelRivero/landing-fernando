import React, { ReactNode, useRef } from "react";
import { useScroll, useTransform, motion, easeInOut } from "framer-motion";

interface Props {
    children: ReactNode;
    orientation?: "horizontal" | "vertical";
  }

export default function AnimateSection({ children, orientation = "horizontal" }: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center end"],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0.5, 1], ["20%", "0%"], {
    ease: easeInOut,
  });
  const y = useTransform(scrollYProgress, [0.5, 1], ["50%", "0%"], {
    ease: easeInOut,
  });
  return (
    <div ref={targetRef}>
      <motion.div style={orientation === "horizontal" ? { opacity, x } : { opacity, y }}>
        {children}
      </motion.div>
    </div>
  );
}
