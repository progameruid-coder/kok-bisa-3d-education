
import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { VenusPlanet } from "./VenusPlanet";

export const VenusScene: React.FC = () => {
  const frame = useCurrentFrame();

  const planetY = interpolate(
    frame,
    [0, 35],
    [700, 0],
    { extrapolateRight: "clamp" }
  );

  const titleOpacity = interpolate(
    frame,
    [20, 40],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  const factOpacity = interpolate(
    frame,
    [100, 120],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  const secondFactOpacity = interpolate(
    frame,
    [230, 250],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  const thirdFactOpacity = interpolate(
    frame,
    [350, 370],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #160B3B, #392078, #130A32)",
        fontFamily: "Arial",
        overflow: "hidden",
      }}
    >
      {/* Bintang */}
      {Array.from({ length: 35 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 6 + (i % 4) * 3,
            height: 6 + (i % 4) * 3,
            borderRadius: "50%",
            background: "#FFFFFF",
            left: `${(i * 37 + 11) % 100}%`,
            top: `${(i * 61 + 7) % 100}%`,
            opacity: 0.35 + ((i % 5) * 0.12),
          }}
        />
      ))}

      {/* Matahari */}
      <div
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          top: 220,
          right: -40,
          background:
            "radial-gradient(circle, #FFF5B0, #FFB52E, #FF6C26)",
          boxShadow: "0 0 100px rgba(255,180,50,0.35)",
        }}
      />

      {/* Judul */}
      <div
        style={{
          position: "absolute",
          top: 130,
          width: "100%",
          textAlign: "center",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontSize: 72,
            color: "#FFE36E",
            fontWeight: 900,
          }}
        >
          KENALAN DULU!
        </div>

        <div
          style={{
            fontSize: 42,
            color: "white",
            marginTop: 20,
          }}
        >
          Ini dia planet Venus 🪐
        </div>
      </div>

      {/* Planet */}
      <div
        style={{
          position: "absolute",
          top: 480,
          left: "50%",
          transform: `translate(-50%, ${planetY}px)`,
        }}
      >
        <VenusPlanet />
      </div>

      {/* Fakta pertama */}
      <div
        style={{
          position: "absolute",
          top: 1120,
          width: "100%",
          textAlign: "center",
          opacity: factOpacity,
          padding: "0 55px",
        }}
      >
        <div
          style={{
            color: "#FFD86B",
            fontSize: 56,
            fontWeight: 900,
          }}
        >
          1 TAHUN = 225 HARI
        </div>

        <div
          style={{
            color: "white",
            fontSize: 38,
            marginTop: 25,
            lineHeight: 1.4,
          }}
        >
          Venus mengelilingi Matahari
          <br />
          hanya dalam 225 hari Bumi!
        </div>
      </div>

      {/* Fakta kedua */}
      <div
        style={{
          position: "absolute",
          top: 1450,
          width: "100%",
          textAlign: "center",
          opacity: secondFactOpacity,
          padding: "0 50px",
        }}
      >
        <div
          style={{
            color: "#FFB17A",
            fontSize: 48,
            fontWeight: 900,
          }}
        >
          TAPI TUNGGU...
        </div>

        <div
          style={{
            color: "white",
            fontSize: 38,
            marginTop: 25,
            lineHeight: 1.4,
          }}
        >
          Venus berputar pada porosnya
          <br />
          selama sekitar 243 hari Bumi!
        </div>
      </div>

      {/* Fakta ketiga */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          width: "100%",
          textAlign: "center",
          opacity: thirdFactOpacity,
          padding: "0 50px",
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 42,
            fontWeight: 900,
          }}
        >
          ROTASINYA MALAH LEBIH LAMA
          <br />
          DARI TAHUNNYA! 🤯
        </div>
      </div>
    </AbsoluteFill>
  );
};
