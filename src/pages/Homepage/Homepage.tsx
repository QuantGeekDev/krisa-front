import KrisaMonitor from "../../components/KrisaMonitor/KrisaMonitor";
import NotificationWindow from "../../components/NotificationWindow/NotificationWindow";
import HomepageStyled from "./HomepageStyled";

const Homepage = (): React.ReactElement => {
  return (
    <HomepageStyled>
      <h1 className="homepage__title"> KRISA</h1>
      <KrisaMonitor />
      <NotificationWindow />
    </HomepageStyled>
  );
};

export default Homepage;
