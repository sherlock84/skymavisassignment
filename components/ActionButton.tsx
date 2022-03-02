import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import React from "react";

export interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc?: ImageProps["src"];
  label?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ className, iconSrc, label, type = "button", ...props }) => {
  const combinedClassNames = React.useMemo(
    () => classNames(className, "btn btn-icon btn-icon-md relative mb-7"),
    [className]
  );
  return (
    <button type={type} className={combinedClassNames} {...props}>
      {iconSrc && <Image src={iconSrc} width="32px" height="32px" layout="fixed" alt="Send icon" />}
      <span className="absolute bottom-0 translate-y-full pt-1">{label}</span>
    </button>
  );
};

export default React.memo(ActionButton);
