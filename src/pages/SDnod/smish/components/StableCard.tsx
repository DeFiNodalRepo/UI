import CollateralSelection from "@/app/(root)/smish/components/CollateralSelection";
import StableSwapInput from "./StableSwapInput";
import StableBtnGroup from "./StableBtnGroup";

export default function RadioButtonCard() {
  const radioAndAmount = (
    <div>
      <CollateralSelection />
      <StableSwapInput />
    </div>
  );

  return (
    <div className="bg-main-800 py-6 sm:py-6">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="mx-auto  lg:mx-0">
          {/* Action Buttons */}
          <div className="grid grid-cols-1 ">
            <StableBtnGroup />
          </div>
          {radioAndAmount}
        </div>
      </div>
    </div>
  );
}
