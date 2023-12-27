import { useState, useEffect } from "react";

function useAudioPlayer() {
  const [duration, setDuration] = useState<number | undefined>();
  const [curTime, setCurTime] = useState<number>(0);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState<number | null>();

  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement;

    const setAudioData = () => {
      if (audio) {
        setDuration(audio.duration);
        setCurTime(audio.currentTime);
      }
    };

    const setAudioTime = () => {
      setCurTime(audio.currentTime);
      console.log("audio.currentTime", audio.currentTime);
    };

    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, [clickedTime, playing, curTime]);

  return {
    clickedTime,
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  };
}

export default useAudioPlayer;
