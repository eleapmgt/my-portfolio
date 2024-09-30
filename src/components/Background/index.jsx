import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const COLORS = {
  BLEU_PROFOND: '#121212',
  VERT_SARCELLE: '#50A3AB',
  JAUNE_SUBTIL: '#FADAC1',
};

const Background = ({ disableAnimation = false }) => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const initializeParticles = (width, height) => {
    const particleCount = Math.min(Math.floor((width * height) / 10000), 100);
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    setParticles(newParticles);
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        setDimensions({ width, height });
        initializeParticles(width, height);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (disableAnimation || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;

    const render = () => {
      ctx.fillStyle = COLORS.BLEU_PROFOND;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = COLORS.JAUNE_SUBTIL;
        ctx.fill();

        particle.x +=
          particle.speedX + (mousePosition.x - dimensions.width / 2) * 0.00001;
        particle.y +=
          particle.speedY + (mousePosition.y - dimensions.height / 2) * 0.00001;

        if (particle.x < 0 || particle.x > dimensions.width)
          particle.speedX *= -1;
        if (particle.y < 0 || particle.y > dimensions.height)
          particle.speedY *= -1;
      });

      drawConnections(ctx);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles, dimensions, mousePosition, disableAnimation]);

  const drawConnections = (ctx) => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(80, 163, 171, ${1 - distance / 100})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  };

  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className="fixed inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="h-full w-full"
        onMouseMove={handleMouseMove}
      />
    </motion.div>
  );
};

export default Background;
