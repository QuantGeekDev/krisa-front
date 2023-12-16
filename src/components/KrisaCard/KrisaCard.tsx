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
        alt=""
      />
      <h2 className="krisa__id"> {krisaNumber}</h2>
    </KrisaCardStyled>
  );
};

export default KrisaCard;
