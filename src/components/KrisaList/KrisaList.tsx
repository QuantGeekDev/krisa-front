import { krisaMockList } from "../../mocks/KrisaMocks/KrisaMocks";
import KrisaCard from "../KrisaCard/KrisaCard";

const KrisaList = (): React.ReactElement => {
  return (
    <ul className="krisa-list">
      {krisaMockList.map((krisa) => (
        <li key={krisa.krisaNumber} className="krisa">
          <KrisaCard krisa={krisa} />
        </li>
      ))}
    </ul>
  );
};
export default KrisaList;
