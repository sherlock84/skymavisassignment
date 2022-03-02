import React from "react";

export interface WalletOverviewProps {
  currency: string;
  locale: string;
  totalAmount: number;
  walletNumber: string;
}

const WalletOverview: React.FC<WalletOverviewProps> = ({ currency, locale, totalAmount, walletNumber }) => {
  const numberFormat = React.useMemo(() => new Intl.NumberFormat(locale), [locale]);
  return (
    <div className="banner flex flex-col items-stretch gap-3 primary rounded-[16px] px-5 py-4">
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
