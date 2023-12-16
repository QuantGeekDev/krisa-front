import { Window, WindowHeader, WindowContent, Button } from "react95";
import NotificationWindowStyled from "./NotificationWindowStyled";

const NotificationWindows = (): React.ReactElement => (
  <NotificationWindowStyled>
    <Window>
      <WindowHeader className="window__header">
        New Krisa just dropped
      </WindowHeader>
      <WindowContent>
        <p>
          Please welcome the latest krisa in the rat pack{" "}
          <span className="window__sexo-ahora">CRAZY KRISA</span>.
        </p>
        <Button
          onClick={() => {
            alert("Krisa");
          }}
        >
          {" "}
          <span>
            Get the <span className="window__sexo-ahora"> miska </span> now xD
          </span>
        </Button>
      </WindowContent>
    </Window>
  </NotificationWindowStyled>
);

export default NotificationWindows;
