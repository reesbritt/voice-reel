import React, { FC } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export const Play: FC<{ handleClick: () => void }> = ({ handleClick }) => {
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PlayCircleIcon />
    </button>
  );
};
