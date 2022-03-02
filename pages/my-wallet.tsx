import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import ActionButton from "../components/ActionButton";
import AssetList from "../components/AssetList";
import IconButton from "../components/IconButton";
import WalletOverview from "../components/WalletOverview";

const assets: WalletAsset[] = [
  { amount: 1000, currency: "USD", nativeAmount: 23046000, nativeCurrency: "VND" },
  { amount: 50, currency: "EUR", nativeAmount: 1531972, nativeCurrency: "VND" },
  { amount: 10000, currency: "YEN", nativeAmount: 2103317, nativeCurrency: "VND" },
];

const MyWalletPage: NextPage = () => (
  <div className="flex flex-col items-stretch h-full my-5 gap-5">
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center gap-3 rounded-lg bg-[#f7f9fc] py-1.5 px-4">
        <Image src="/RoninWalletIcon.svg" width="16px" height="16px" alt="Ronin Wallet icon" />
        <h1 className="text-xs">Ronin Wallet</h1>
      </div>
      <IconButton iconSrc="/Person.svg" />
    </div>
    <WalletOverview currency="VND" locale="en-US" totalAmount={26681289} walletNumber="7300 3777 3888 3334" />
    <div className="flex flex-row justify-center items-center gap-6">
      <ActionButton iconSrc="/Deposit.svg" label="Deposit" disabled />
      <ActionButton iconSrc="/Send.svg" label="Send" />
      <ActionButton iconSrc="/Swap.svg" label="Swap" disabled />
    </div>
    <AssetList className="grow" assets={assets} locale="en-US" />
  </div>
);

export default MyWalletPage;
