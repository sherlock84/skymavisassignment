import classnames from "classnames";
import React from "react";

export interface FormGroupProps extends React.PropsWithChildren<React.HTMLProps<HTMLDivElement>> {
  inline?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({ className, inline = false, children, ...props }) => (
  <div
    className={classnames(
      { "flex flex-col items-stretch px-5": !inline, "inline-flex flex-row items-center py-5": inline },
      "gap-1",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default React.memo(FormGroup);
