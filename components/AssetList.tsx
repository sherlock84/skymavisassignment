import classNames from "classnames";
import React from "react";
import AssetListItem from "./AssetListItem";

export interface AssetListProps extends React.HTMLAttributes<HTMLDivElement> {
  assets: WalletAsset[];
  locale: string;
}

const AssetList: React.FC<AssetListProps> = ({ assets, className, locale, ...props }) => {
  const combinedClassNames = React.useMemo(
    () => classNames("flex flex-col items-stretch gap-2 overflow-y-auto overflow-x-hidden bg-white", className),
    [className]
  );

  return (
    <div className={combinedClassNames} {...props}>
      <h1 className="mb-1">Assets</h1>
      {assets.map(({ amount, currency, nativeAmount, nativeCurrency }) => (
        <AssetListItem
          key={currency}
          locale={locale}
          amount={amount}
          currency={currency}
          nativeAmount={nativeAmount}
          nativeCurrency={nativeCurrency}
        />
      ))}
    </div>
  );
};

export default React.memo(AssetList);
