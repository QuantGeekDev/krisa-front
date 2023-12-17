/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { toast } from "react-toastify";
import { KrisaStructure } from "../../types";
import KrisaCardStyled from "./KrisaCardStyled";

interface KrisaCardProps {
  krisa: KrisaStructure;
}

const KrisaCard = ({
  krisa: { imageUrl, krisaNumber },
}: KrisaCardProps): React.ReactElement => {
  return (
    <KrisaCardStyled className="krisa">
      <img
        className="krisa__image"
        height="330"
        width="330"
        src={imageUrl}
        alt="1"
        onKeyDown={() => toast.success("That's a lovely krisa! Yes!")}
        onClick={() => toast.success("That's a lovely krisa! Yes!")}
      />
      <h2 className="krisa__id"> {krisaNumber}</h2>
    </KrisaCardStyled>
  );
};

export default KrisaCard;
