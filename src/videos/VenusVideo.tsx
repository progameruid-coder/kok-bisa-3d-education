
import React from "react";
import { AbsoluteFill, Sequence } from "remotion";

import { Intro } from "../scenes/Intro";
import { VenusScene } from "../scenes/VenusScene";
import { Outro } from "../scenes/Outro";

export const VenusVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Opening */}
      <Sequence from={0} durationInFrames={150}>
        <Intro />
      </Sequence>

      {/* Fakta planet Venus */}
      <Sequence from={150} durationInFrames={450}>
        <VenusScene />
      </Sequence>

      {/* Penutup */}
      <Sequence from={600} durationInFrames={300}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
