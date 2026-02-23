import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
];

export default function BirthdaySurprise() {
  const [stage, setStage] = useState(0);
  const [musicOn, setMusicOn] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (stage === 2) {
      const id = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, 2500);
      return () => clearInterval(id);
    }
  }, [stage]);

  const nextStage = () => setStage((s) => s + 1);

  return (
    <div style={styles.page}>
      <style jsx global>{`
        @keyframes waveMove { 0% {background-position: 0% 50%;} 100% {background-position: 100% 50%;} }
        @keyframes floatUp { 0% { transform: translateY(20px); opacity: .2;} 100% { transform: translateY(-120vh); opacity: .7;} }
      `}</style>

      {/* Ocean Background */}
      <div style={styles.ocean} />
      {[...Array(20)].map((_, i) => (
        <div key={i} style={{ ...styles.bubble, left: `${Math.random()*100}%`, animationDelay: `${Math.random()*10}s` }} />
      ))}

      {/* Music Button */}
      <div style={styles.musicWrap}>
        <button onClick={() => setMusicOn(!musicOn)} style={styles.btnPrimary}>
          <Music size={16} /> {musicOn ? "Pause Music" : "Play Music"}
        </button>
        {musicOn && (
          <iframe width="0" height="0" src="https://www.youtube.com/embed/OMOGaugKpzs?autoplay=1&loop=1&playlist=OMOGaugKpzs" allow="autoplay" />
        )}
      </div>

      {/* Card */}
      <div style={styles.card}>
        {stage === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={styles.h1}>A Special Ocean Surprise 🌊</h1>
            <p style={styles.p}>Tap to unlock Bhumi's 18th Birthday Experience</p>
            <button onClick={nextStage} style={styles.btnPrimary}>Open</button>
          </motion.div>
        )}

        {stage === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={styles.h1}>Happy 18th Birthday Bhumi 🎂</h1>
            <p style={styles.p}>Welcome to your special day. I made something just for you 💙</p>
            <button onClick={nextStage} style={styles.btnPrimary}>See Memories</button>
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 style={styles.h2}>Our Memories ✨</h2>
            <div style={styles.slideWrap}>
              <img src={images[index]} alt="memory" style={styles.slideImg} />
            </div>
            <button onClick={nextStage} style={{...styles.btnPrimary, marginTop: 16}}>Read Message</button>
          </motion.div>
        )}

        {stage === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 style={styles.h2}>A Message From Me 💌</h2>
            <p style={styles.pBig}>
              Bhumi, you are one of the most special people in my life. Watching you grow into who you are today has been something I will always be grateful for. You bring calm, light, and a kind of happiness that feels like the ocean — deep, peaceful, and endless.
              <br/><br/>
              I want you to know that I love you so much. You mean everything to me — your smile, your presence, your friendship — all of it is precious to me. No matter where life takes us, you will always have a place in my heart.
            </p>
            <blockquote style={styles.quote}>
              “In a world full of waves and noise, you are my calm sea — the place I always feel at home.”
            </blockquote>
            <div style={styles.signature}>With love, Shreyaa 💙</div>
            <button onClick={nextStage} style={{...styles.btnPrimary, marginTop: 16}}>Final Surprise</button>
          </motion.div>
        )}

        {stage === 4 && (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <h1 style={styles.h1}>🎉 You're Officially 18 🎉</h1>
            <p style={styles.p}>May your life be full of love, adventures and beautiful moments. I’ll always be right here with you.</p>
            <div style={styles.footer}>— Shreyaa 💙</div>
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
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu",
  },
  ocean: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(120deg, #021b2b, #063a5a, #0a5c7a, #021b2b)",
    backgroundSize: "200% 200%",
    animation: "waveMove 18s linear infinite",
    opacity: 0.9,
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
  musicWrap: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  card: {
    position: "relative",
    zIndex: 2,
    width: "min(92vw, 640px)",
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(14px)",
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.12)",
    padding: 24,
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
  },
  h1: { fontSize: 32, fontWeight: 700, marginBottom: 10 },
  h2: { fontSize: 24, fontWeight: 600, marginBottom: 12 },
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
    borderRadius: 14,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.15)",
  },
  slideImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
