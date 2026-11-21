
import React from "react";
import { Composition } from "remotion";
import { VenusVideo } from "./videos/VenusVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="VenusEducation"
        component={VenusVideo}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
