import Lootbox from "../../components/Lootbox/Lootbox";
import LootboxPageStyled from "./LootboxPageStyled";

const LootBoxPage = (): React.ReactElement => {
  return (
    <LootboxPageStyled className="lootbox-page">
      <h1 className="lootbox-page__title">Lootbox</h1>
      <div>
        <Lootbox />
      </div>
    </LootboxPageStyled>
  );
};

export default LootBoxPage;
