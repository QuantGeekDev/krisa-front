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
  }, [getKrisas]);

  const handleRoll = (): void => {
    const rollingTimeMs = 5000;
    const randomIndex = Math.floor(Math.random() * krisas.length);
    setSelectedIndex(randomIndex);
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
    }, rollingTimeMs);
  };

  const shuffleAndMultiplyKrisas = (krisas: KrisaFromDb[]): KrisaFromDb[] => {
    const mutiplierAmount = 5;
    const shuffle = (array: KrisaFromDb[]) => {
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    };

    const shuffledKrisas = shuffle([...krisas]);

    let extendedKrisas: KrisaFromDb[] = [];
    for (
      let multiplicationCount = 1;
      multiplicationCount < mutiplierAmount;
      multiplicationCount++
    ) {
      extendedKrisas = extendedKrisas.concat(shuffledKrisas);
    }

    return extendedKrisas;
  };

  return (
    <LootboxStyled className="lootbox">
      {rolling ? (
        <div className="lootbox__viewport">
          <Carousel
            selectedIndex={selectedIndex}
            krisas={shuffleAndMultiplyKrisas(krisas)}
            rolling={rolling}
          />
        </div>
      ) : (
        <>
          <div className="krisas-container">
            {selectedIndex != null ? (
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
