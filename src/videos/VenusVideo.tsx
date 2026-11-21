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

  const scale = interpolate(frame, [0, 40, 100], [0.5, 1.15, 1], {
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
          fontSize: 62,
          fontWeight: 900,
          textAlign: "center",
          transform: `scale(${scale})`,
          lineHeight: 1.2,
        }}
      >
        SATU HARI...
        <br />
        <span style={{ color: "#FFD66B" }}>LEBIH LAMA</span>
        <br />
        DARI SATU TAHUN?!
      </div>

      <div style={{ position: "absolute", bottom: 180, fontSize: 34 }}>
        Kok bisa? 🤯
      </div>
    </AbsoluteFill>
  );
};

const VenusFacts: React.FC = () => {
  const frame = useCurrentFrame();

  const factIndex =
    frame < 360
      ? 0
      : frame < 720
      ? 1
      : frame < 960
      ? 2
      : 3;

  const facts = [
    {
      number: "225 HARI",
      text: "Venus mengelilingi Matahari dalam 225 hari Bumi.",
    },
    {
      number: "243 HARI",
      text: "Venus berputar pada porosnya dalam sekitar 243 hari.",
    },
    {
      number: "ARAHNYA TERBALIK!",
      text: "Venus berotasi berlawanan arah dengan kebanyakan planet.",
    },
    {
      number: "117 HARI",
      text: "Satu siang ke siang berikutnya di Venus sekitar 117 hari Bumi.",
    },
  ];

  const current = facts[factIndex];

  const opacity = interpolate(
    frame % 360,
    [0, 20, 340, 359],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp" }
  );

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
          top: 140,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 38,
          fontWeight: 800,
          color: "#FFD66B",
        }}
      >
        KENALAN DENGAN VENUS
      </div>

      <div
        style={{
          position: "absolute",
          top: 340,
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
          bottom: 230,
          left: 55,
          right: 55,
          textAlign: "center",
          opacity,
          background: "rgba(18, 10, 40, 0.88)",
          border: "2px solid rgba(255, 214, 107, 0.65)",
          borderRadius: 35,
          padding: "38px 28px",
        }}
      >
        <div
          style={{
            fontSize: 58,
            fontWeight: 900,
            color: "#FFD66B",
            marginBottom: 20,
          }}
        >
          {current.number}
        </div>

        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 1.4,
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

  const opacity = interpolate(frame, [0, 20, 100], [0, 1, 1], {
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
      <div style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.3 }}>
        ALAM SEMESTA
        <br />
        <span style={{ color: "#FFD66B" }}>PENUH KEJUTAN!</span>
      </div>

      <div style={{ fontSize: 36, marginTop: 50 }}>
        Follow untuk fakta unik lainnya 🚀
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
