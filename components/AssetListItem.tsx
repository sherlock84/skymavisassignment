import classNames from "classnames";
import Image from "next/image";
import React from "react";

export interface AssetListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: number;
  currency: string;
  locale: string;
  nativeAmount: number;
  nativeCurrency: string;
}

const AssetListItem: React.FC<AssetListItemProps> = ({
  amount,
  className,
  currency,
  locale,
  nativeAmount,
  nativeCurrency,
  ...props
}) => {
  const numberFormat = React.useMemo(() => new Intl.NumberFormat(locale), [locale]);
  const combinedClassNames = React.useMemo(
    () => classNames("bg-[#f7f9fc] rounded-lg flex flex-row items-center px-5 py-4 gap-4", className),
    [className]
  );
  return (
    <div className={combinedClassNames} {...props}>
      <Image src={`/${currency}.svg`} width="32px" height="32px" layout="fixed" alt={currency} />
      <div className="grow flex flex-col gap-1">
        <span className="text-sm">
          {numberFormat.format(amount)} {currency}
        </span>
        <span className="text-xs opacity-50">
          {numberFormat.format(nativeAmount)} {nativeCurrency}
        </span>
      </div>
    </div>
  );
};

export default React.memo(AssetListItem);
