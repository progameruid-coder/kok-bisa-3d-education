
import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";

export const VenusVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 15, 110, 125],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const zoom = interpolate(
    frame,
    [0, 900],
    [1, 1.15],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#80D8FF",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background sky */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, #80D8FF, #B5EDFF, #FFF0C2)",
        }}
      />

      {/* Cartoon Sun */}
      <div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "#FFD95A",
          top: 180,
          right: -80,
          boxShadow: "0 0 100px #FFE98A",
        }}
      />

      {/* Intro text */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity,
          transform: `scale(${zoom})`,
        }}
      >
        <div
          style={{
            fontSize: 44,
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            textShadow: "0 5px 15px rgba(0,0,0,0.15)",
          }}
        >
          KOK BISA?
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 65,
            fontWeight: 900,
            color: "#FF7B36",
            textAlign: "center",
            lineHeight: 1.2,
            padding: 40,
          }}
        >
          1 HARI DI VENUS
          <br />
          LEBIH LAMA DARI
          <br />
          1 TAHUN?!
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
