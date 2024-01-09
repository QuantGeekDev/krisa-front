import { useState, useEffect } from "react";
import { type TarotRat } from "../../../data/tarotRats.js";
import TarotStyled from "./TarotStyled.js";

interface TarotProps {
  tarotRats: TarotRat[];
}

const Tarot = ({ tarotRats }: TarotProps): React.ReactElement => {
  const [isActive, setIsActive] = useState(false);
  const [selectedRat, setSelectedRat] = useState<TarotRat | null>(null);

  useEffect(() => {
    setSelectedRat(getRandomCard(tarotRats));
  }, [tarotRats]);

  const getRandomCard = (tarotRats: TarotRat[]) => {
    const totalRats = tarotRats.length;
    const randomIndex = Math.floor(Math.random() * totalRats);
    return tarotRats[randomIndex];
  };

  const handlePullCardClick = () => {
    setIsActive(true);
  };

  const handleTryAgainClick = () => {
    setSelectedRat(getRandomCard(tarotRats));
  };

  return (
    <TarotStyled className="tarot">
      {!isActive && selectedRat ? (
        <h2 className="tarot__title"> Krisa Tarot</h2>
      ) : (
        <h2 className="tarot__title">{selectedRat?.name}</h2>
      )}
      <img
        className="tarot__card"
        height="70"
        width="120"
        src={
          isActive
            ? selectedRat?.imageUrl
            : "https://res.cloudinary.com/derffxqir/image/upload/v1704762620/s4eqxb2dqnvyghnzf3ji.png"
        }
        alt={selectedRat?.name}
      />
      {!isActive ? (
        <button className="tarot__pull-card" onClick={handlePullCardClick}>
          {" "}
          🔮🐀 Draw a card...
        </button>
      ) : (
        <button className="tarot__try-again" onClick={handleTryAgainClick}>
          {" "}
          Draw another card
        </button>
      )}
    </TarotStyled>
  );
};
export default Tarot;
