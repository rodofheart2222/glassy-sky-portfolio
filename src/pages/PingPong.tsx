import { useEffect, useRef } from "react";

const PingPong = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const paddleWidth = 10;
    const paddleHeight = 75;
    const ballRadius = 8;

    let leftY = height / 2 - paddleHeight / 2;
    let rightY = leftY;
    let ballX = width / 2;
    let ballY = height / 2;
    let ballVX = 4;
    let ballVY = 4;
    const keys: Record<string, boolean> = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    const resetBall = () => {
      ballX = width / 2;
      ballY = height / 2;
      ballVX = -ballVX;
      ballVY = 4 * (Math.random() > 0.5 ? 1 : -1);
    };

    let animationId: number;
    const loop = () => {
      if (keys.w) {
        leftY = Math.max(leftY - 5, 0);
      }
      if (keys.s) {
        leftY = Math.min(leftY + 5, height - paddleHeight);
      }
      if (keys.ArrowUp) {
        rightY = Math.max(rightY - 5, 0);
      }
      if (keys.ArrowDown) {
        rightY = Math.min(rightY + 5, height - paddleHeight);
      }

      ballX += ballVX;
      ballY += ballVY;

      if (ballY - ballRadius <= 0 || ballY + ballRadius >= height) {
        ballVY *= -1;
      }

      if (ballX - ballRadius <= paddleWidth) {
        if (ballY >= leftY && ballY <= leftY + paddleHeight) {
          ballVX *= -1;
        } else {
          resetBall();
        }
      }

      if (ballX + ballRadius >= width - paddleWidth) {
        if (ballY >= rightY && ballY <= rightY + paddleHeight) {
          ballVX *= -1;
        } else {
          resetBall();
        }
      }

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "white";
      ctx.fillRect(0, leftY, paddleWidth, paddleHeight);
      ctx.fillRect(width - paddleWidth, rightY, paddleWidth, paddleHeight);

      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="border border-white"
      />
    </div>
  );
};

export default PingPong;
