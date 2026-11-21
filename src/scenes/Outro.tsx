
import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 20], [0.7, 1], {
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #FF8C42, #FF4F81)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: 900,
            color: "#FFFFFF",
            textShadow: "0px 8px 0px #C73564",
          }}
        >
          KOK BISA? 🤯
        </div>

        <div
          style={{
            fontSize: 45,
            fontWeight: "bold",
            color: "#FFF7C2",
            marginTop: 40,
          }}
        >
          Ternyata alam semesta
          <br />
          punya banyak rahasia!
        </div>

        <div
          style={{
            fontSize: 38,
            color: "white",
            marginTop: 80,
          }}
        >
          Follow untuk fakta unik lainnya 🚀
        </div>
      </div>
    </AbsoluteFill>
  );
};
