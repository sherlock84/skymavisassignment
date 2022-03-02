import classnames from "classnames";
import React from "react";

export interface FormGroupProps extends React.PropsWithChildren<React.HTMLProps<HTMLDivElement>> {
  inline?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({ className, inline = false, children, ...props }) => {
  const combinedClassNames = React.useMemo(
    () =>
      classnames(
        { "flex flex-col items-stretch": !inline, "inline-flex flex-row items-center": inline },
        "gap-1",
        className
      ),
    [className, inline]
  );
  return (
    <div className={combinedClassNames} {...props}>
      {children}
    </div>
  );
};

export default React.memo(FormGroup);
