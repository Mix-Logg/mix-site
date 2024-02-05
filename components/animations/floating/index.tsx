import React from "react";
import { motion } from "framer-motion";

interface MotionFloatingProps {
  className: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Floating({
  className,
  onClick,
  children,
}: MotionFloatingProps) {
  return (
    <motion.div
      className={`${className}`}
      whileHover={{ scale: 1.1 }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
