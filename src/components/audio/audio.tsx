"use client";
import React from "react";

import { Song } from "./song";
import { Play } from "./play";
import { Pause } from "./pause";
import { Bar } from "./bar";

import useAudioPlayer from "../../hooks/useAudioPlayer";

export const AudioPlayer = () => {
  const { curTime, duration, playing, setPlaying, setClickedTime } =
    useAudioPlayer();

  return (
    <div className="flex items-center justify-between px-5 bg-gray-400">
      <audio id="audio">
        <source src="./song.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Song songName="Song Name" songArtist="Artist" />
      <div className="flex-1 my-5 flex flex-col justify-center items-center">
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <Bar
          curTime={curTime}
          duration={duration ?? 0}
          onTimeUpdate={(time: number) => {
            setClickedTime(time);
            console.log(time);
          }}
        />
      </div>
    </div>
  );
};
