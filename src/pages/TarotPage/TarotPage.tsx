import { tarotRats } from "../../../data/tarotRats";
import Tarot from "../../components/Tarot/Tarot";

const TarotPage = (): React.ReactElement => {
  return (
    <section className="tarot-page">
      <Tarot tarotRats={tarotRats} />
    </section>
  );
};

export default TarotPage;
