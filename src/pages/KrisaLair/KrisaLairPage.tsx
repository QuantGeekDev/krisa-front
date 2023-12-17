import { useEffect, useState } from "react";
import KrisaList from "../../components/KrisaList/KrisaList";
import KrisaLairPageStyled from "./KrisaLairPageStyled";
import { KrisaFromDb } from "../../types";
import useKrisaApi from "../../hooks/useKrisaApi";

const KrisaLairPage = (): React.ReactElement => {
  const [krisas, setKrisas] = useState([] as KrisaFromDb[]);
  const { getKrisas } = useKrisaApi();
  useEffect(() => {
    (async () => {
      const krisas = await getKrisas();
      setKrisas(krisas);
    })();
  }, [getKrisas]);

  return (
    <KrisaLairPageStyled className="krisa-lair">
      <h1 className="krisa-lair__title"> Krisa Lair</h1>
      <KrisaList krisas={krisas} />
    </KrisaLairPageStyled>
  );
};

export default KrisaLairPage;
