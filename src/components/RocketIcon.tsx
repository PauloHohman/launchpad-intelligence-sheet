
import { motion } from 'framer-motion';

const RocketIcon = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Rocket body */}
        <motion.path
          d="M50 10L60 60H40L50 10Z"
          fill="#ef899b"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Rocket fins */}
        <path d="M40 60L35 75L40 70Z" fill="#9c142c" />
        <path d="M60 60L65 75L60 70Z" fill="#9c142c" />
        
        {/* Rocket nose */}
        <circle cx="50" cy="15" r="3" fill="#cccccc" />
        
        {/* Window */}
        <circle cx="50" cy="25" r="4" fill="#44141c" stroke="#ef899b" strokeWidth="1" />
        
        {/* Fire trail */}
        <motion.g
          animate={{ 
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path d="M45 60L50 85L55 60Z" fill="#ef899b" opacity="0.8" />
          <path d="M47 65L50 80L53 65Z" fill="#9c142c" opacity="0.6" />
        </motion.g>
        
        {/* Stars */}
        <motion.circle
          cx="20" cy="20" r="1" fill="#ef899b"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.circle
          cx="80" cy="30" r="1" fill="#ef899b"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
        />
        <motion.circle
          cx="15" cy="70" r="1" fill="#ef899b"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
        />
      </svg>
    </motion.div>
  );
};

export default RocketIcon;
