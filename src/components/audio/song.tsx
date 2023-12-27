import { FC } from "react";

export const Song: FC<{ songName: string; songArtist: string }> = (props) => {
  const { songName, songArtist } = props;

  return (
    <div className="song">
      <h1 className="song__title">{songName}</h1>
      <h2 className="song__artist">{songArtist}</h2>
    </div>
  );
};

export default Song;
