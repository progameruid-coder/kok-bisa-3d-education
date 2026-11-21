
import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const VenusPlanet: React.FC = () => {
  const frame = useCurrentFrame();

  const floatY = Math.sin(frame / 18) * 18;
  const rotation = frame * 0.35;

  return (
    <div
      style={{
        width: 600,
        height: 600,
        position: "relative",
        transform: `translateY(${floatY}px)`,
      }}
    >
      {/* Planet shadow */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 70,
          background: "rgba(120,70,30,0.18)",
          borderRadius: "50%",
          filter: "blur(25px)",
          bottom: 15,
          left: 100,
        }}
      />

      {/* Main planet */}
      <div
        style={{
          width: 440,
          height: 440,
          borderRadius: "50%",
          position: "absolute",
          left: 80,
          top: 60,
          overflow: "hidden",
          background:
            "radial-gradient(circle at 30% 25%, #FFF1B8 0%, #FFD36A 22%, #FF9B42 55%, #D85A29 82%, #A93E21 100%)",
          boxShadow:
            "inset -35px -30px 70px rgba(120,45,15,0.35), 0 20px 60px rgba(255,145,50,0.25)",
        }}
      >
        {/* Venus cloud bands */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 150,
            top: 80,
            left: -80,
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, transparent, rgba(255,245,190,0.45), rgba(255,180,90,0.2), transparent)",
            transform: `rotate(${rotation}deg)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 550,
            height: 120,
            top: 230,
            left: -50,
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, transparent, rgba(255,225,150,0.5), transparent)",
            transform: `rotate(${-rotation * 0.6}deg)`,
          }}
        />

        {/* Left eye */}
        <div
          style={{
            position: "absolute",
            width: 48,
            height: 65,
            borderRadius: "50%",
            background: "#5A351D",
            top: 165,
            left: 135,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 17,
              height: 20,
              borderRadius: "50%",
              background: "white",
              top: 10,
              left: 9,
            }}
          />
        </div>

        {/* Right eye */}
        <div
          style={{
            position: "absolute",
            width: 48,
            height: 65,
            borderRadius: "50%",
            background: "#5A351D",
            top: 165,
            right: 135,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 17,
              height: 20,
              borderRadius: "50%",
              background: "white",
              top: 10,
              left: 9,
            }}
          />
        </div>

        {/* Cheeks */}
        <div
          style={{
            position: "absolute",
            width: 55,
            height: 30,
            borderRadius: "50%",
            background: "rgba(255,110,95,0.35)",
            top: 245,
            left: 90,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 55,
            height: 30,
            borderRadius: "50%",
            background: "rgba(255,110,95,0.35)",
            top: 245,
            right: 90,
          }}
        />

        {/* Smile */}
        <svg
          width="100"
          height="60"
          viewBox="0 0 100 60"
          style={{
            position: "absolute",
            left: 170,
            top: 245,
          }}
        >
          <path
            d="M 10 10 Q 50 55 90 10"
            fill="none"
            stroke="#7A351E"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>

        {/* Highlight */}
        <div
          style={{
            position: "absolute",
            width: 100,
            height: 40,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.25)",
            top: 60,
            left: 80,
            transform: "rotate(-35deg)",
            filter: "blur(10px)",
          }}
        />
      </div>
    </div>
  );
};
