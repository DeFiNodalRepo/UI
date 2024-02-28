// "use client";
import ExplainerBody from "@/components/shared/explainer/ExplainerBody";
import ExplainerTitle from "@/components/shared/explainer/ExplainerTitle";
import StableCard from "@/app/(root)/smish/components/StableCard";

const StableT = () => {
  return (
    <>
      <div>
        <ExplainerTitle />
        <div className="flex-center">
          <StableCard />
        </div>
        <ExplainerBody />
      </div>
    </>
  );
};

export default StableT;
