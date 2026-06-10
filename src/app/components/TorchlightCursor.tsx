import { useEffect, useRef } from "react";

export function TorchlightCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animFrame: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      if (cursor) {
        cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }
      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(37,99,235,0.04) 40%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(2px)",
        mixBlendMode: "screen",
      }}
    />
  );
}
