
import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
} from "remotion";

import { VenusScene } from "../scenes/VenusScene";

const Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 60], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #79D9FF, #B5EEFF, #FFF0C2)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sun */}
      <div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "#FFD95A",
          top: 150,
          right: -80,
          boxShadow: "0 0 100px #FFE98A",
        }}
      />

      {/* Intro text */}
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          textAlign: "center",
          padding: 40,
        }}
      >
        <div
          style={{
            fontSize: 42,
            color: "#FFFFFF",
            fontWeight: 900,
            marginBottom: 30,
          }}
        >
          KOK BISA?
        </div>

        <div
          style={{
            fontSize: 68,
            fontWeight: 900,
            color: "#FF7B36",
            lineHeight: 1.2,
          }}
        >
          1 HARI DI VENUS
          <br />
          LEBIH LAMA DARI
          <br />
          1 TAHUN?!
        </div>
      </div>

      {/* Stars */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "white",
            top: `${10 + (i * 7) % 80}%`,
            left: `${(i * 37) % 100}%`,
            opacity: 0.6,
          }}
        />
      )}
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #FFD66B, #FFAA62, #FF806B)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        opacity,
        padding: 60,
      }}
    >
      <div
        style={{
          fontSize: 62,
          fontWeight: 900,
          color: "white",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        JADI...
        <br />
        1 HARI VENUS
        <br />
        = 243 HARI BUMI!
      </div>

      <div
        style={{
          marginTop: 50,
          fontSize: 34,
          fontWeight: 700,
          color: "#8C482B",
          textAlign: "center",
        }}
      >
        Sementara 1 tahunnya
        <br />
        hanya 225 hari Bumi!
      </div>

      <div
        style={{
          marginTop: 80,
          fontSize: 42,
          fontWeight: 900,
          color: "white",
        }}
      >
        KOK BISA? 🌍
      </div>
    </AbsoluteFill>
  );
};

export const VenusVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Scene 1: Opening */}
      <Sequence from={0} durationInFrames={150}>
        <Intro />
      </Sequence>

      {/* Scene 2: Venus character */}
      <Sequence from={150} durationInFrames={300}>
        <VenusScene />
      </Sequence>

      {/* Scene 3: Educational closing */}
      <Sequence from={450} durationInFrames={450}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
