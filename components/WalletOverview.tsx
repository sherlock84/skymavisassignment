import classNames from "classnames";
import React from "react";

export interface WalletOverviewProps extends React.HTMLAttributes<HTMLDivElement> {
  currency: string;
  locale: string;
  totalAmount: number;
  walletNumber: string;
}

const WalletOverview: React.FC<WalletOverviewProps> = ({
  className,
  currency,
  locale,
  totalAmount,
  walletNumber,
  ...props
}) => {
  const numberFormat = React.useMemo(() => new Intl.NumberFormat(locale), [locale]);
  const combinedClassNames = React.useMemo(
    () => classNames("banner flex flex-col items-stretch gap-3 primary rounded-[16px] px-5 py-4", className),
    [className]
  );
  return (
    <div className={combinedClassNames} {...props}>
      <div>
        My Wallet
        <span className="ml-[1ch] opacity-50">({walletNumber})</span>
      </div>
      <hr className="border-t border-solid border-[#68b8f8]" />
      <span className="text-3xl text-right">
        {numberFormat.format(totalAmount)} {currency}
      </span>
    </div>
  );
};

export default React.memo(WalletOverview);
