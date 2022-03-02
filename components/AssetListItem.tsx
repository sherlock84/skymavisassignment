import Image from "next/image";
import React from "react";

interface AssetListItemProps {
  amount: number;
  currency: string;
  locale: string;
  nativeAmount: number;
  nativeCurrency: string;
}

const AssetListItem: React.FC<AssetListItemProps> = ({ amount, currency, locale, nativeAmount, nativeCurrency }) => {
  const numberFormat = React.useMemo(() => new Intl.NumberFormat(locale), [locale]);
  return (
    <div className="bg-[#f7f9fc] rounded-lg flex flex-row items-center px-5 py-4 gap-4">
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
