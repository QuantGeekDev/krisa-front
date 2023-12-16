import KrisaList from "../../components/KrisaList/KrisaList";
import KrisaLairPageStyled from "./KrisaLairPageStyled";

const KrisaLairPage = (): React.ReactElement => {
  return (
    <KrisaLairPageStyled className="krisa-lair">
      <h1 className="krisa-lair__title"> Krisa Lair</h1>
      <KrisaList />
    </KrisaLairPageStyled>
  );
};

export default KrisaLairPage;
