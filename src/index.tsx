import { requireNativeComponent, NativeModules } from 'react-native';
import React from 'react';

type ReactNativeBitmovinPlayerType = {
  autoPlay: boolean;
  style?: any;
  onLoad?: (event: any) => void;
  onPlaying?: (event: any) => void;
  onPause?: (event: any) => void;
  onEvent?: (event: any) => void;
  onSeek?: (event: any) => void;
  configuration: {
    url: string;
    poster: string;
    startOffset: number;
    subtitles?: string;
    thumbnails?: string;
    title?: string;
    subtitle?: string;
    nextPlayback?: number;
  };
};

type ReactNativeBitmovinPlayerMethodsType = {
  ReactNativeBitmovinPlayer: {
    multiply(a: number, b: number): Promise<number>;
    play(): void;
  };
};

const {
  ReactNativeBitmovinPlayer: ReactNativeBitmovinPlayerIntance,
}: ReactNativeBitmovinPlayerMethodsType = NativeModules as ReactNativeBitmovinPlayerMethodsType;

const ReactNativeBitmovinPlayer = requireNativeComponent<ReactNativeBitmovinPlayerType>(
  'ReactNativeBitmovinPlayer'
);

export { ReactNativeBitmovinPlayerIntance };

export default ({
  autoPlay,
  style,
  onLoad,
  onPlaying,
  onPause,
  onEvent,
  onSeek,
  configuration,
}: ReactNativeBitmovinPlayerType) => {
  const styles = { flex: 1, width: '100%', height: '100%' };
  return (
    <ReactNativeBitmovinPlayer
      {...{
        autoPlay,
        onLoad,
        onPlaying,
        onPause,
        onEvent,
        onSeek,
        configuration,
      }}
      style={[styles, style]}
    />
  );
};
