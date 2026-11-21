
import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { VenusPlanet } from "./VenusPlanet";

export const VenusScene: React.FC = () => {
  const frame = useCurrentFrame();

  const enter = interpolate(
    frame,
    [0, 25],
    [300, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const opacity = interpolate(
    frame,
    [0, 15],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #78D9FF, #C3F1FF, #FFF1CF)",
        overflow: "hidden",
      }}
    >
      {/* Sun */}
      <div
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "#FFD85B",
          top: 140,
          right: -50,
          boxShadow: "0 0 100px #FFE68B",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 150,
          width: "100%",
          textAlign: "center",
          fontSize: 48,
          fontWeight: 900,
          color: "#FFFFFF",
          opacity,
          textShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        HALO, AKU VENUS!
      </div>

      {/* Planet */}
      <div
        style={{
          position: "absolute",
          top: 500 + enter,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <VenusPlanet />
      </div>
    </AbsoluteFill>
  );
};
