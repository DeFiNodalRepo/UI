import DefaultLayout from "../../layout/DefaultLayout";

import TierCards from "./TierCards";
import BoardroomStats from "./BoardroomStats";
import BoardroomHistory from "./BoardroomHistory";

function Boardroom() {
  return (
    <DefaultLayout>
      <div>Boardroom</div>
      <BoardroomStats />
      <TierCards />
      <BoardroomHistory />
    </DefaultLayout>
  );
}

export default Boardroom;
