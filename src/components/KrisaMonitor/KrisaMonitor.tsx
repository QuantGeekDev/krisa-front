import { Monitor } from "react95";
import KrisaMonitorStyled from "./KrisaMonitorStyled";

const KrisaMonitor = (): React.ReactElement => (
  <KrisaMonitorStyled>
    <Monitor>
      <img
        className="monitor__screen"
        src="./krisa.jpg"
        alt="art of a krisa"
        height="120"
        width="170"
      />
    </Monitor>
  </KrisaMonitorStyled>
);

export default KrisaMonitor;
