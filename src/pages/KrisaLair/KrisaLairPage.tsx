import KrisaCard from "../../components/KrisaCard/KrisaCard";
import { krisa1Mock } from "../../mocks/KrisaMocks/KrisaMocks";
import KrisaLairPageStyled from "./KrisaLairPageStyled";

const KrisaLairPage = (): React.ReactElement => {
  return (
    <KrisaLairPageStyled className="krisa-lair">
      <h1 className="krisa-lair__title"> Krisa Lair</h1>
      <KrisaCard krisa={krisa1Mock} />
    </KrisaLairPageStyled>
  );
};

export default KrisaLairPage;
