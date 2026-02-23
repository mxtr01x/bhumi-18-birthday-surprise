"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

/* --------- IMAGE DATA WITH CUSTOM CROP --------- */
const images = [
  { src: "/images/1.jpg", pos: "center 20%" },
  { src: "/images/2.jpg", pos: "center 10%" },
  { src: "/images/3.jpg", pos: "center 25%" },
  { src: "/images/4.jpg", pos: "center 30%" },
  { src: "/images/5.jpg", pos: "center 15%" },
  { src: "/images/6.jpg", pos: "center 10%" },
  { src: "/images/7.jpg", pos: "center 25%" },
];

export default function BirthdaySurprise() {
  const [stage, setStage] = useState(0);
  const [musicOn, setMusicOn] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (stage === 2) {
      const id = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, 3500);
      return () => clearInterval(id);
    }
  }, [stage]);

  const nextStage = () => setStage((s) => s + 1);

  return (
    <div style={styles.page}>
      <style jsx global>{`
        @keyframes waveMove { 0% {background-position: 0% 50%;} 100% {background-position: 100% 50%;} }
        @keyframes floatUp { 0% { transform: translateY(20px); opacity: .2;} 100% { transform: translateY(-120vh); opacity: .7;} }

        /* cinematic zoom */
        @keyframes zoomPan {
          0% { transform: scale(1.1) translateY(0px); }
          100% { transform: scale(1.25) translateY(-20px); }
        }

        /* ripple */
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.6; }
          100% { transform: scale(15); opacity: 0; }
        }

        /* confetti */
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity:1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity:0; }
        }
      `}</style>

      {/* Ocean BG */}
      <div style={styles.ocean} />

      {/* floating bubbles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            ...styles.bubble,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      {/* MUSIC BUTTON */}
      <div style={styles.musicWrap}>
        <button onClick={() => setMusicOn(!musicOn)} style={styles.btnPrimary}>
          <Music size={16} /> {musicOn ? "Pause Music" : "Play Music"}
        </button>
        {musicOn && (
          <iframe
            width="0"
            height="0"
            src="https://www.youtube.com/embed/OMOGaugKpzs?autoplay=1&loop=1&playlist=OMOGaugKpzs"
            allow="autoplay"
          />
        )}
      </div>

      {/* MAIN CARD */}
      <div style={styles.card}>
        {/* STAGE 0 */}
        {stage === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={styles.h1}>A Special Ocean Surprise 🌊</h1>
            <p style={styles.p}>
              Tap to unlock Bhumi's 18th Birthday Experience
            </p>

            <button onClick={nextStage} style={styles.btnPrimary}>
              Open
            </button>

            {/* ripple */}
            <motion.div
              key={stage}
              style={styles.ripple}
              initial={{ scale: 0 }}
              animate={{ scale: 15, opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        )}

        {/* STAGE 1 */}
        {stage === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={styles.h1}>Happy 18th Birthday Bhumi 🎂</h1>
            <p style={styles.p}>
              Welcome to your special day. I made something just for you 💙
            </p>
            <button onClick={nextStage} style={styles.btnPrimary}>
              Enter Your World ✨
            </button>
          </motion.div>
        )}

        {/* STAGE 2 SLIDESHOW */}
        {stage === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 style={styles.h2}>My Dumboo 💙</h2>

            <div style={styles.slideWrap}>
              <motion.img
                key={images[index].src}
                src={images[index].src}
                alt="memory"
                style={{
                  ...styles.slideImg,
                  objectPosition: images[index].pos,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>

            <button
              onClick={nextStage}
              style={{ ...styles.btnPrimary, marginTop: 16 }}
            >
              Read My Heart 💌
            </button>
          </motion.div>
        )}

        {/* MESSAGE */}
        {stage === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 style={styles.h2}>A Message From Me 💌</h2>

            <p style={styles.pBig}>
              Bhumi, you are one of the most special people in my life. Watching
              you grow into who you are today has been something I will always be
              grateful for. You bring calm, light, and a kind of happiness that
              feels like the ocean — deep, peaceful, and endless.
              <br />
              <br />
              I want you to know that I love you so much. You mean everything to
              me — your smile, your presence, your friendship — all of it is
              precious to me. No matter where life takes us, you will always have
              a place in my heart.
            </p>

            <blockquote style={styles.quote}>
              “In a world full of waves and noise, you are my calm sea — the
              place I always feel at home.”
            </blockquote>

            <div style={styles.signature}>With love, Shreyaa 💙</div>

            <button
              onClick={nextStage}
              style={{ ...styles.btnPrimary, marginTop: 16 }}
            >
              Final Surprise 🎉
            </button>
          </motion.div>
        )}

        {/* FINAL */}
        {stage === 4 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h1
              style={{
                ...styles.h1,
                textShadow: "0 0 25px #4fc3f7",
              }}
            >
              🎉 You're Officially 18 🎉
            </h1>

            <p style={styles.p}>
              May your life be full of love, adventures and beautiful moments.
              I’ll always be right here with you.
            </p>

            <div style={styles.footer}>— Shreyaa 💙</div>

            {/* CONFETTI */}
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${Math.random() * 100}%`,
                  width: 6,
                  height: 10,
                  background: ["#4fc3f7", "#81d4fa", "#0288d1"][i % 3],
                  animation: `confetti ${3 + Math.random() * 2}s linear infinite`,
                }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    background: "#000",
    fontFamily: "system-ui",
  },

  ocean: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(120deg, #021b2b, #063a5a, #0a5c7a, #021b2b)",
    backgroundSize: "200% 200%",
    animation: "waveMove 18s linear infinite",
  },

  bubble: {
    position: "absolute",
    bottom: "-20px",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "rgba(173,216,230,0.7)",
    animation: "floatUp 12s linear infinite",
  },

  ripple: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: "50%",
    background: "rgba(79,195,247,0.4)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },

  musicWrap: { position: "absolute", top: 16, right: 16 },

  card: {
    position: "relative",
    zIndex: 2,
    width: "min(92vw, 640px)",
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(14px)",
    borderRadius: 20,
    padding: 24,
    textAlign: "center",
  },

  h1: { fontSize: 32, fontWeight: 700 },
  h2: { fontSize: 24, fontWeight: 600 },
  p: { color: "#cfe8ff", marginBottom: 16 },
  pBig: { color: "#d8f0ff", lineHeight: 1.7, textAlign: "left" },

  quote: {
    marginTop: 12,
    fontStyle: "italic",
    color: "#9ed2ff",
    borderLeft: "3px solid #5fb3ff",
    paddingLeft: 10,
  },

  signature: { marginTop: 10, fontWeight: 600, color: "#bfe3ff" },
  footer: { marginTop: 8, color: "#bfe3ff" },

  btnPrimary: {
    background: "#0a6ea8",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "10px 16px",
    cursor: "pointer",
  },

  slideWrap: {
    width: "100%",
    height: 360,
    overflow: "hidden",
    borderRadius: 14,
  },

  slideImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    animation: "zoomPan 4s ease-in-out forwards",
  },
};
