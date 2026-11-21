
import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const VenusPlanet: React.FC = () => {
  const frame = useCurrentFrame();

  const floatY = Math.sin(frame / 18) * 18;
  const rotate = Math.sin(frame / 40) * 4;

  return (
    <div
      style={{
        width: 520,
        height: 520,
        borderRadius: "50%",
        position: "relative",
        overflow: "hidden",
        transform: `translateY(${floatY}px) rotate(${rotate}deg)`,
        background:
          "radial-gradient(circle at 32% 28%, #FFE8A3 0%, #F7BE67 28%, #E58A43 58%, #A94D29 100%)",
        boxShadow:
          "inset -45px -35px 90px rgba(100,35,10,0.45), 0 0 80px rgba(255,190,90,0.3)",
      }}
    >
      {/* Lapisan awan Venus */}
      <div
        style={{
          position: "absolute",
          width: 650,
          height: 110,
          borderRadius: "50%",
          top: 85,
          left: -70,
          background:
            "linear-gradient(180deg, rgba(255,244,200,0.8), rgba(255,215,140,0.15))",
          transform: `rotate(${frame * 0.25}deg)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 620,
          height: 90,
          borderRadius: "50%",
          top: 230,
          left: -45,
          background:
            "linear-gradient(180deg, rgba(255,220,145,0.7), rgba(210,120,65,0.15))",
          transform: `rotate(${-frame * 0.18}deg)`,
        }}
      />

      {/* Mata kiri */}
      <div
        style={{
          position: "absolute",
          width: 78,
          height: 105,
          background: "#FFFFFF",
          borderRadius: "50%",
          top: 175,
          left: 145,
          transform: "rotate(-8deg)",
          boxShadow: "0 5px 10px rgba(100,50,10,0.15)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 40,
            height: 55,
            background: "#55311C",
            borderRadius: "50%",
            top: 32,
            left: 24,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 15,
            height: 15,
            background: "#FFFFFF",
            borderRadius: "50%",
            top: 40,
            left: 34,
          }}
        />
      </div>

      {/* Mata kanan */}
      <div
        style={{
          position: "absolute",
          width: 78,
          height: 105,
          background: "#FFFFFF",
          borderRadius: "50%",
          top: 175,
          right: 145,
          transform: "rotate(8deg)",
          boxShadow: "0 5px 10px rgba(100,50,10,0.15)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 40,
            height: 55,
            background: "#55301B",
            borderRadius: "50%",
            top: 32,
            left: 18,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 15,
            height: 15,
            background: "#FFFFFF",
            borderRadius: "50%",
            top: 40,
            left: 28,
          }}
        />
      </div>

      {/* Pipi */}
      <div
        style={{
          position: "absolute",
          width: 65,
          height: 38,
          borderRadius: "50%",
          background: "rgba(255,115,95,0.4)",
          top: 300,
          left: 100,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 65,
          height: 38,
          borderRadius: "50%",
          background: "rgba(255,115,95,0.4)",
          top: 300,
          right: 100,
        }}
      />

      {/* Mulut tersenyum */}
      <div
        style={{
          position: "absolute",
          width: 95,
          height: 48,
          borderBottom: "12px solid #74351D",
          borderRadius: "0 0 70px 70px",
          top: 315,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      {/* Kilau planet */}
      <div
        style={{
          position: "absolute",
          width: 90,
          height: 180,
          borderRadius: "50%",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.25), transparent)",
          top: 70,
          left: 45,
          transform: "rotate(25deg)",
        }}
      />
    </div>
  );
};
