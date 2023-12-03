// CircularImage.tsx

import React, { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

interface CircularImageProps {
  imageSrc: string;
  sizeVariant: "small" | "medium" | "large";
  classNames?: string;
}

const sizeVariantMap: Record<"small" | "medium" | "large" | "xLarge", number> =
  {
    small: 62,
    medium: 124,
    large: 140,
    xLarge: 400,
  };

export const Headshot: FC<CircularImageProps> = ({
  imageSrc,
  sizeVariant,
  classNames: overrideClasses,
}) => {
  const classes = classNames(`rounded-full overflow-hidden`, overrideClasses);
  const width = sizeVariantMap[sizeVariant] || sizeVariantMap.medium;
  const height = width;
  return (
    <div
      className={classes}
      style={{
        width,
        height,
      }}
    >
      <Image
        src={imageSrc}
        alt="Circular"
        width={width}
        height={height}
        className="object-center object-cover"
      />
    </div>
  );
};
