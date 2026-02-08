import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heart from "./heart.gif";
import teddy from "./teddy.gif";

const App = () => {
  const [screen, setScreen] = useState("404");
  const [noClickCount, setNoClickCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ left: 0, top: 0 });
  const noButtonRef = useRef(null);
  const [showButtons, setShowButtons] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [bgColor, setBgColor] = useState("#0f0f1e");

  // Keep the NO button inside the viewport on resize
  useEffect(() => {
    const handleResize = () => {
      if (!noButtonRef.current) return;
      const rect = noButtonRef.current.getBoundingClientRect();
      const btnW = rect.width || 120;
      const btnH = rect.height || 48;
      const margin = 8;
      const maxLeft = Math.max(window.innerWidth - btnW - margin, 0);
      const maxTop = Math.max(window.innerHeight - btnH - margin, 0);
      setNoButtonPosition((pos) => ({
        left: Math.min(pos.left, maxLeft),
        top: Math.min(pos.top, maxTop),
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = ["#1e1b4b", "#831843", "#164e63", "#064e3b", "#713f12"];

  const handleRefresh = () => {
    setScreen("question");
  };

  const handleYes = () => {
    setScreen("accepted");
    setShowConfetti(true);

    setTimeout(() => {
      setShowButtons(false);
    }, 1000);

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const handleNo = () => {
    setNoClickCount((prev) => prev + 1);

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);

    const rect = noButtonRef.current?.getBoundingClientRect();
    const btnWidth = rect?.width ?? 120;
    const btnHeight = rect?.height ?? 48;
    const margin = 8;
    const maxLeft = Math.max(window.innerWidth - btnWidth - margin, 0);
    const maxTop = Math.max(window.innerHeight - btnHeight - margin, 0);

    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    setNoButtonPosition({ left: randomLeft, top: randomTop });
  };

  // Confetti Component
  const Confetti = () => {
    const confettiColors = [
      "bg-orange-500",
      "bg-blue-500",
      "bg-yellow-400",
      "bg-red-500",
      "bg-green-400",
    ];
    const confettiPieces = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 3,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    }));

    return (
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
        {confettiPieces.map((piece) => (
          <div
            key={piece.id}
            className={`absolute w-4 h-4 ${piece.color} animate-fall`}
            style={{
              left: `${piece.left}%`,
              top: "-20px",
              animationDelay: `${piece.animationDelay}s`,
            }}
          />
        ))}
      </div>
    );
  };

  // Pixel Heart Component
  const PixelHeart = ({ broken }) => {
    if (broken) {
      return (
        <div className="relative w-[120px] h-[120px] mx-auto animate-shake">
          <div>
            <img src={heart} alt="" />
          </div>
          {noClickCount >= 2 && (
            <>
              <div
                className="absolute left-[30px] top-[60px] w-2 h-3 bg-blue-500 rounded-b-full animate-tear-fall"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute right-[30px] top-[60px] w-2 h-3 bg-blue-500 rounded-b-full animate-tear-fall"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </>
          )}
        </div>
      );
    }

    return (
      <div className="relative w-[120px] h-[120px] mx-auto animate-heartbeat"></div>
    );
  };

  return (
    <div
      className="pixel-grid retro-gradient-bg animate-gradient-shift animate-bg-scroll min-h-screen flex justify-center items-center p-5 transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      {/* Scanlines overlay */}
      <div className="scanlines fixed top-0 left-0 w-full h-full pointer-events-none z-[1000]"></div>

      {showConfetti && <Confetti />}

      <AnimatePresence mode="wait">
        {screen === "404" && (
          <motion.div
            key="404"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 md:p-16 text-white text-center max-w-2xl w-full border-8 border-pink-500 shadow-pixel"
            style={{ color: "#ec4899" }}
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl mb-8 leading-relaxed glow-blue animate-blink"
            >
              404
            </motion.div>
            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-2xl mb-5 leading-loose"
            >
              ERROR
            </motion.h2>
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base mb-10 leading-loose text-slate-400"
            >
              PAGE NOT FOUND...
              <br />
              OR IS IT YOU, BIANI?
              <br />
              <span className="text-xs text-slate-500">
                oya click the button😉
              </span>
            </motion.p>
            <motion.button
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRefresh}
              className="pixel-button bg-gradient-to-r from-pink-600 to-pink-500 border-4 border-black px-8 py-4 text-sm md:text-base cursor-pointer text-white shadow-pixel-sm"
            >
              REFRESH
            </motion.button>
          </motion.div>
        )}

        {screen === "question" && (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 md:p-16 text-white text-center max-w-2xl w-full border-8 border-pink-500 shadow-pixel relative"
            style={{ color: "#ec4899" }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mb-8"
            >
              <PixelHeart broken={true} />
            </motion.div>
            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl mb-10 leading-loose glow-orange"
              style={{ color: "#ec4899" }}
            >
              WILL YOU BE
              <br />
              <span className="md:text-2xl"> MY VALENTINE</span>, BIANI?
            </motion.h2>

            <AnimatePresence>
              {showButtons && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="flex gap-5 justify-center flex-wrap"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleYes}
                    className="pixel-button bg-gradient-to-r from-pink-600 to-pink-800 border-4 border-black px-8 py-4 text-base md:text-lg cursor-pointer text-white shadow-pixel-sm min-w-[120px]"
                  >
                    YES
                  </motion.button>

                  <motion.button
                    ref={noButtonRef}
                    animate={
                      noClickCount > 0
                        ? {
                            left: noButtonPosition.left,
                            top: noButtonPosition.top,
                          }
                        : {}
                    }
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNo}
                    className={`pixel-button bg-gradient-to-r from-blue-600 to-blue-800 border-4 border-black px-8 py-4 text-base md:text-lg cursor-pointer text-white shadow-pixel-sm min-w-[120px] ${noClickCount > 0 ? "fixed" : "relative"}`}
                    style={
                      noClickCount > 0
                        ? {
                            left: noButtonPosition.left,
                            top: noButtonPosition.top,
                          }
                        : {}
                    }
                  >
                    NO
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {screen === "accepted" && (
          <motion.div
            key="accepted"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 md:p-16 text-white text-center max-w-3xl w-full border-8 border-pink-500 shadow-pixel"
          >
            <div className="w-full flex items-center justify-center mb-4">
              <img src={teddy} alt="" />
            </div>

            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-5xl mb-8 leading-relaxed glow-blue text-pink-500"
            >
              I LOVE YOU!
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
