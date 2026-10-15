import React from 'react';
import { APP_CONFIG } from '../config';

const GameSandbox: React.FC<{
  gameId: string;
  onBack: () => void;
}> = ({ gameId, onBack }) => {
  // Canvas-based simple game fallback
  const GameCanvas: React.FC = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const resize = () => {
        setWidth(canvas.clientWidth);
        setHeight(canvas.clientHeight);
      };
      resize();
      window.addEventListener('resize', resize);
      return () => window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const gameMap = {
        snake: { color: '#4CAF50', draw: () => { /* Simple snake */ } },
        tetris: { color: '#2196F3', draw: () => { /* Simple tetris */ } },
        pong: { color: '#FFEB3B', draw: () => { /* Simple pong */ } },
        '2048': { color: '#FF9800', draw: () => { /* Simple 2048 */ } },
        pacman: { color: '#F44336', draw: () => { /* Simple pacman */ } },
        default: { color: '#FF6B00', draw: () => {} }
      };

      const style = gameMap[gameId] || gameMap.default;
      canvas.style.background = style.color;

      const drawGrid = () => {
        if (!ctx) return;
        ctx.fillStyle = style.color || '#FF6B00';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        for (let i = 0; i <= width; i += 40) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, height);
          ctx.stroke();
        }
        for (let j = 0; j <= height; j += 40) {
          ctx.beginPath();
          ctx.moveTo(0, j);
          ctx.lineTo(width, j);
          ctx.stroke();
        }
      };

      drawGrid();

      // Simple game loop
      const frames = 60;
      let currentFrame = 0;
      const animate = () => {
        ctx!.clearRect(0, 0, width, height);
        drawGrid();
        currentFrame = (currentFrame + 1) % frames;
        requestAnimationFrame(animate);
      };
      animate();

      return () => {
        ctx = null;
        cancelAnimationFrame(animate);
      };
    }, [gameId, width, height]);

    return (
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
    );
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-display font-bold">{gameId.replace(/[-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</h1>
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-gray-700 transition"
            aria-label="Close game"
          >
            ←
          </button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh-80px)]">
        <GameCanvas />
      </main>
      <footer className="p-4 border-t border-gray-700 text-center">
        <p className="text-sm">
          {gameId}: Press SPACE to start, Arrow keys to control
        </p>
        <button
          onClick={onBack}
          className="mt-3 btn-primary px-4 py-2 rounded"
        >
          Exit Game
        </button>
      </footer>
    </div>
  );
};

export default GameSandbox;