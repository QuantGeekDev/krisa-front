import React, { useState, useEffect } from "react";
import { KrisaFromDb } from "../../types";
import useKrisaApi from "../../hooks/useKrisaApi";
import LootboxStyled from "./LootboxStyled";
import Carousel from "../Carousel/Carousel";
import KrisaCard from "../KrisaCard/KrisaCard";

const Lootbox = (): React.ReactElement => {
  const [krisas, setKrisas] = useState<KrisaFromDb[]>([]);
  const [rolling, setRolling] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { getKrisas } = useKrisaApi();

  useEffect(() => {
    (async () => {
      const krisasFromApi = await getKrisas();
      setKrisas(krisasFromApi);
    })();
  }, []);

  const handleRoll = (): void => {
    const randomIndex = Math.floor(Math.random() * krisas.length);
    setSelectedIndex(randomIndex);
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
    }, 6000); // Animation time (5s) + 1s pause on the last card
  };

  return (
    <LootboxStyled className="lootbox">
      {rolling ? (
        <Carousel
          krisas={krisas}
          rolling={rolling}
          selectedIndex={selectedIndex}
        />
      ) : (
        <>
          <div className="krisas-container">
            {selectedIndex != null && !rolling ? (
              <div className="lootbox__victory">
                <span className="lootbox__victory-message">{`Selected Krisa: #${krisas[selectedIndex].krisaNumber}`}</span>
                <KrisaCard krisa={krisas[selectedIndex]} />
              </div>
            ) : (
              <button className="lootbox__roll-button" onClick={handleRoll}>
                Roll
              </button>
            )}
          </div>
        </>
      )}
    </LootboxStyled>
  );
};

export default Lootbox;
