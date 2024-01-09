import { useState } from "react";
import { type TarotRat } from "../../../data/tarotRats.js";
import TarotStyled from "./TarotStyled.js";

interface TarotProps {
  tarotRats: TarotRat[];
}

const Tarot = ({ tarotRats }: TarotProps): React.ReactElement => {
  const getRandomCard = (tarotRats: TarotRat[]) => {
    const totalRats = tarotRats.length;
    const randomIndex = Math.floor(Math.random() * totalRats);
    const selectedRat = tarotRats[randomIndex];
    return selectedRat;
  };
  const [isActive, setIsActive] = useState(false);
  const selectedRat = getRandomCard(tarotRats);
  const { name, imageUrl } = selectedRat;

  const handlePullCardClick = () => {
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 5000);
  };

  return (
    <TarotStyled className="tarot">
      {!isActive && name ? (
        <h2 className="tarot__title"> Krisa Tarot</h2>
      ) : (
        <h2 className="tarot__title">{name}</h2>
      )}
      <img
        className="tarot__card"
        height="70"
        width="120"
        src={
          isActive
            ? imageUrl
            : "https://res.cloudinary.com/derffxqir/image/upload/v1704762620/s4eqxb2dqnvyghnzf3ji.png"
        }
        alt={name}
      />
      {!isActive ? (
        <button className="tarot__pull-card" onClick={handlePullCardClick}>
          {" "}
          🔮🐀 Pull a card...
        </button>
      ) : (
        <button className="tarot__pull-card" disabled>
          {" "}
          Try again...
        </button>
      )}
    </TarotStyled>
  );
};
export default Tarot;
