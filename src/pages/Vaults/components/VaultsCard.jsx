import Loader from "../../../common/Loader";
import VaultCardDisplay from "./VaultCardDisplay";

import { useQuery } from "@tanstack/react-query";
import { getStrats } from "../../../services/apiFetches";

function StartsData() {}

export default function VaultsCard() {
  // Note #tanstack stale time explanation https://coursehunter.net/course/react-2023-react-redux-i-mnogoe-drugoe?lesson=343

  const {
    data: strategies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["strats"],
    queryFn: getStrats,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const strategiesArray = Object.values(strategies);

  const uniqueStrategies = strategiesArray.reduce((array, strategy) => {
    if (!array.map((el) => el.tokenId).includes(strategy.tokenId))
      return [
        ...array,
        {
          id: strategy.id,
          tokenId: strategy.tokenId,
          createdOn: strategy.createdOn,
          retiredOn: strategy.retiredOn,
          tokens: strategy.tokens,
          rewards: strategy.rewards,
          stratId: strategy.stratId,
          stablePer: strategy.stablePer,
          poolGroup: strategy.poolGroup,
          stratGroup: strategy.stratGroup,
        },
      ];
    else return array;
  }, []);

  return (
    <ul
      role="list"
      className="divide-y divider-main overflow-hidden bg-main shadow-sm ring-1 ring-main sm:rounded-xl"
    >
      {uniqueStrategies.map((strategy) => (
        <VaultCardDisplay strategy={strategy} key={strategy.id} />
      ))}
    </ul>
  );
}
