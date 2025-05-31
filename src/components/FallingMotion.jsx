import React, { useEffect, useRef, useState } from 'react';
import '../styles/FallingMotion.css';

const FallingMotion = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const skillImages = [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      'https://raw.githubusercontent.com/mui/material-ui/master/docs/public/static/logo.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg',

      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    ];

    const GRAVITY = 0.01;
    const DAMPING = 0.2;
    const SPEED = 2;

    class Ball {
      constructor(x, y, radius, img) {
        this.x = x;
        this.y = y;
        this.px = x;
        this.py = y;
        this.fx = 0;
        this.fy = 0;
        this.radius = radius;
        this.width = this.height = radius * 2;
        this.img = img;
      }

      applyForce(delta) {
        delta *= delta;
        this.fy += GRAVITY;
        this.x += this.fx * delta;
        this.y += this.fy * delta;
        this.fx = this.fy = 0;
      }

      velocity() {
        const nx = (this.x * 2) - this.px;
        const ny = (this.y * 2) - this.py;
        this.px = this.x;
        this.py = this.y;
        this.x = nx;
        this.y = ny;
      }

      draw(ctx) {
        if (this.img && this.img.complete && this.img.naturalWidth !== 0) {
          ctx.drawImage(this.img, this.x - this.radius, this.y - this.radius, this.width, this.height);
        }
      }
    }

    const checkWalls = (ball) => {
      if (ball.x < ball.radius) {
        const velX = ball.px - ball.x;
        ball.x = ball.radius;
        ball.px = ball.x - velX * DAMPING;
      } else if (ball.x + ball.radius > canvas.width) {
        const velX = ball.px - ball.x;
        ball.x = canvas.width - ball.radius;
        ball.px = ball.x - velX * DAMPING;
      }

      if (ball.y + ball.radius > canvas.height) {
        const velY = ball.py - ball.y;
        ball.y = canvas.height - ball.radius;
        ball.py = ball.y - velY * DAMPING;
      }
    };

    let animationFrameId;
    let balls = [];

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    const startAnimation = () => {
      balls = [];
      const radius = 30;
      const spacingY = 120;
      const slotWidth = canvas.width / skillImages.length;

      for (let i = 0; i < skillImages.length; i++) {
        const x = slotWidth * i + slotWidth / 2;
        const y = -i * spacingY;
        const img = imageElements[i];
        balls.push(new Ball(x, y, radius, img));
      }

      const update = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let ball of balls) {
          ball.applyForce(SPEED);
          ball.velocity();
          checkWalls(ball);
          ball.draw(ctx);
        }

        animationFrameId = requestAnimationFrame(update);
      };

      update();
    };

    const imageElements = [];
    let loadedCount = 0;
    skillImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === skillImages.length) startAnimation();
      };
      img.onerror = () => {
        console.warn('Image failed to load:', src);
        loadedCount++;
        if (loadedCount === skillImages.length) startAnimation();
      };
      imageElements.push(img);
    });

    resizeCanvas();

    const handleResize = () => {
      resizeCanvas();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      startAnimation();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  return (
    <div ref={containerRef} className="canvas-holder">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default FallingMotion;
