"use client";

import { useState } from "react";

export default function StableBtnGroup() {
  const [isMintClicked, setIsMintClicked] = useState(false);
  const [isRedeemClicked, setIsRedeemClicked] = useState(false);

  const handleMintClick = () => {
    setIsMintClicked(true);
    setIsRedeemClicked(false);
  };

  const handleRedeemClick = () => {
    setIsRedeemClicked(true);
    setIsMintClicked(false);
  };
  return (
    <span className="w-full rounded-md bg-main-600 shadow-sm">
      <button
        type="button"
        className={`relative h-16 w-1/2 flex-1 rounded-l-md border-main-600 bg-main-800 px-3 py-2 text-xl font-semibold text-white shadow-sm ring-2 ring-inset ring-main-600 hover:bg-main-600 focus:z-10 ${
          isMintClicked ? "bg-red-500" : ""
        }`}
        onClick={handleMintClick}
      >
        Mint
      </button>

      <button
        type="button"
        className={`relative h-16 w-1/2 rounded-r-md bg-main-800 px-3 py-2 text-xl font-semibold text-white ring-2 ring-inset ring-main-600 hover:bg-main-600 focus:z-10 ${
          isRedeemClicked ? "bg-red-500" : ""
        }`}
        onClick={handleRedeemClick}
      >
        Redeem
      </button>
    </span>
  );
}
