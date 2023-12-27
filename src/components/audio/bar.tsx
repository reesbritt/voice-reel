import React, { FC, useRef } from "react";
// import moment from "moment";
// import momentDurationFormatSetup from "moment-duration-format";

export const Bar: FC<{
  duration: number;
  curTime: number;
  onTimeUpdate: (newTime: number) => void;
}> = ({ duration, curTime, onTimeUpdate }) => {
  const progressRef = useRef<HTMLDivElement>(null);

  const curPercentage = (curTime / duration) * 100;

  //   function formatDuration(duration) {
  //     return moment
  //       .duration(duration, "seconds")
  //       .format("mm:ss", { trim: false });
  //   }

  const calcClickedTime = (clickPositionInPage: number) => {
    const bar = progressRef.current;
    if (bar) {
      const barStart = bar.getBoundingClientRect().left + window.scrollX;
      const barWidth = bar.offsetWidth;
      const clickPositionInBar = clickPositionInPage - barStart;
      const timePerPixel = duration / barWidth;
      return timePerPixel * clickPositionInBar;
    }
  };

  const handleTimeDrag = (e: React.MouseEvent) => {
    onTimeUpdate(calcClickedTime(e.pageX) ?? 0);

    const updateTimeOnMove = (eMove: MouseEvent) => {
      onTimeUpdate(calcClickedTime(eMove.pageX) ?? 0);
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  };

  return (
    <div className="flex w-full justify-center">
      <span className="text-white">{curTime}</span>
      <div
        style={{
          background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`,
        }}
        onMouseDown={handleTimeDrag}
        ref={progressRef}
      >
        <span
          className="h-4 w-4 rounded-full border border-white bg-blue-400"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className="text-white">{duration}</span>
    </div>
  );
};
