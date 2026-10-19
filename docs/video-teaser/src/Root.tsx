import React from 'react';
import { Composition } from 'remotion';
import { TeaserVideo } from './TeaserVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MarketplaceSuspensionTeaser"
        component={TeaserVideo}
        durationInFrames={360} // 12 seconds @ 30 FPS
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          brandName: 'Marketplace Suspension Recovery',
          registryName: 'Smithery.ai',
        }}
      />
    </>
  );
};
