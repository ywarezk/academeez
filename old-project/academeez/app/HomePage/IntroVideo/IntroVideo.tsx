/**
 * Plays the intro movie
 *
 * Created April 23rd, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { AzPlayer } from './IntroVideo.markup';
import { HLSSource } from '@nz/video/react';

export const IntroVideo = (props) => {
  return (
    <AzPlayer autoPlay {...props}>
      <HLSSource
        isVideoChild
        src="https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8"
      />
    </AzPlayer>
  );
};
