import { KrisaFromDb } from "../../types";
import KrisaCard from "../KrisaCard/KrisaCard";

interface KrisaListProps {
  krisas: KrisaFromDb[];
}

const KrisaList = ({ krisas }: KrisaListProps): React.ReactElement => {
  return (
    <ul className="krisa-list">
      {krisas.map((krisa) => (
        <li key={krisa.krisaNumber} className="krisa">
          <KrisaCard krisa={krisa} />
        </li>
      ))}
    </ul>
  );
};
export default KrisaList;
