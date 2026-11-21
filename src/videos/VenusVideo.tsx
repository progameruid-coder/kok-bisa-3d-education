
import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { VenusPlanet } from "../scenes/VenusPlanet";

const Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 35, 100], [0.7, 1.12, 1], {
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 50% 45%, #593080, #170d2d 70%, #080612)",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          fontSize: 68,
          fontWeight: 900,
          textAlign: "center",
          lineHeight: 1.25,
        }}
      >
        SATU HARI...
        <br />
        <span style={{ color: "#FFD66B" }}>LEBIH LAMA</span>
        <br />
        DARI SATU TAHUN?!
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 230,
          fontSize: 38,
          fontWeight: 700,
          color: "#FFFFFF",
          opacity,
        }}
      >
        KOK BISA? 🤯
      </div>
    </AbsoluteFill>
  );
};

const VenusFacts: React.FC = () => {
  const frame = useCurrentFrame();

  const facts = [
    {
      number: "225 HARI",
      label: "SATU TAHUN DI VENUS",
      text: "Venus mengelilingi Matahari dalam 225 hari Bumi.",
    },
    {
      number: "243 HARI",
      label: "ROTASI VENUS",
      text: "Venus membutuhkan sekitar 243 hari Bumi untuk berputar sekali pada porosnya.",
    },
    {
      number: "ARAH TERBALIK!",
      label: "VENUS BERBEDA",
      text: "Venus berputar berlawanan arah dengan kebanyakan planet di tata surya.",
    },
    {
      number: "117 HARI",
      label: "SATU HARI MATAHARI",
      text: "Dari satu tengah hari ke tengah hari berikutnya di Venus berlangsung sekitar 117 hari Bumi.",
    },
  ];

  const starts = [0, 360, 720, 960];

  const factIndex =
    frame < 360 ? 0 :
    frame < 720 ? 1 :
    frame < 960 ? 2 : 3;

  const current = facts[factIndex];
  const progress = frame - starts[factIndex];

  const opacity = interpolate(progress, [0, 12, 320, 350], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const slideY = interpolate(progress, [0, 18], [65, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pop = interpolate(progress, [0, 12, 24], [0.8, 1.12, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 50% 35%, #46256e, #160d2c 65%, #080612)",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 150,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 40,
          fontWeight: 900,
          color: "#FFD66B",
          letterSpacing: 3,
        }}
      >
        MISTERI PLANET VENUS
      </div>

      <div
        style={{
          position: "absolute",
          top: 330,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          transform: `scale(${1 + Math.sin(frame / 18) * 0.025})`,
        }}
      >
        <VenusPlanet />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 210,
          left: 55,
          right: 55,
          opacity,
          transform: `translateY(${slideY}px) scale(${pop})`,
          background: "rgba(18, 10, 40, 0.94)",
          border: "3px solid rgba(255, 214, 107, 0.8)",
          borderRadius: 40,
          padding: "42px 30px",
          textAlign: "center",
          boxShadow: "0 15px 50px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: 3,
            marginBottom: 18,
          }}
        >
          {current.label}
        </div>

        <div
          style={{
            fontSize: 66,
            fontWeight: 900,
            color: "#FFD66B",
            marginBottom: 25,
            lineHeight: 1.15,
          }}
        >
          {current.number}
        </div>

        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 1.4,
            color: "#FFFFFF",
          }}
        >
          {current.text}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 50% 45%, #593080, #170d2d 70%, #080612)",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        opacity,
        textAlign: "center",
        padding: 50,
      }}
    >
      <div style={{ transform: `scale(${scale})` }}>
        <div style={{ fontSize: 66, fontWeight: 900, lineHeight: 1.3 }}>
          ALAM SEMESTA
          <br />
          <span style={{ color: "#FFD66B" }}>PENUH KEJUTAN!</span>
        </div>

        <div style={{ fontSize: 38, marginTop: 60 }}>
          Masih banyak yang belum kita tahu...
        </div>

        <div
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: "#FFD66B",
            marginTop: 80,
          }}
        >
          FOLLOW KOK BISA? 🚀
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const VenusVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={240}>
        <Intro />
      </Sequence>

      <Sequence from={240} durationInFrames={1080}>
        <VenusFacts />
      </Sequence>

      <Sequence from={1320} durationInFrames={480}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
