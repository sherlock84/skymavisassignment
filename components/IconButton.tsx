import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: ImageProps["src"];
  iconWidth?: ImageProps["width"];
  iconHeight?: ImageProps["height"];
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  iconHeight = 24,
  iconSrc,
  iconWidth = 24,
  type = "button",
  ...props
}) => {
  const combinedClassNames = React.useMemo(() => classNames("btn btn-icon btn-icon-sm", className), [className]);
  return (
    <button type={type} className={combinedClassNames} {...props}>
      <Image src={iconSrc} width={iconWidth} height={iconHeight} alt="Button icon" layout="fixed" />
    </button>
  );
};

export default React.memo(IconButton);
