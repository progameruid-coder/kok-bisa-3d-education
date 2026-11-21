
import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 20], [0.5, 1], {
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #5B21B6, #17104D)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            color: "#FFD93D",
            textShadow: "0px 10px 0px #B76B00",
          }}
        >
          KOK BISA?
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 42,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Fakta unik yang bikin penasaran!
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 250,
          fontSize: 40,
          color: "#FFFFFF",
          opacity: 0.8,
        }}
      >
        ✨ 🌎 🚀 ✨
      </div>
    </AbsoluteFill>
  );
};
