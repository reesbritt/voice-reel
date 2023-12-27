import React, { FC } from "react";
import { PauseCircleIcon } from "@heroicons/react/24/solid";

export const Pause: FC<{ handleClick: () => void }> = ({ handleClick }) => {
  return (
    <button className="mb-4" onClick={() => handleClick()}>
      <PauseCircleIcon />
    </button>
  );
};
