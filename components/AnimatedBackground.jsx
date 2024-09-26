"use client"

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Make the canvas cover the entire window
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial size adjustment

    // Set of randomized characters: numbers and letters
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => 1);

    // Accent color: #33d4ff
    const accentColor = '#33d4ff';

    function drawMatrix() {
      // Clear the background with a slight transparency for gradual fading
      ctx.fillStyle = 'rgba(28, 28, 34, 0.05)';  // Slight opacity for fade effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, index) => {
        // Randomized character from the set
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = index * fontSize;

        // Accent color for the text
        ctx.fillStyle = `rgba(${hexToRGB(accentColor)}, 0.7)`;  // 70% opacity for the falling characters
        ctx.fillText(text, x, y * fontSize);

        // Randomize when the column should restart from the top
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }

        drops[index]++;
      });
    }

    const interval = setInterval(drawMatrix, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, backgroundColor: '#1c1c22' }} />;
}

// Helper function to convert HEX to RGB
function hexToRGB(hex) {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `${r}, ${g}, ${b}`;
}
