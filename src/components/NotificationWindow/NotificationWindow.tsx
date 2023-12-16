import { Window, WindowHeader, WindowContent, Button } from "react95";
import NotificationWindowStyled from "./NotificationWindowStyled";
import { useNavigate } from "react-router-dom";

const NotificationWindow = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <NotificationWindowStyled>
      <Window>
        <WindowHeader className="window__header">
          New Krisa just dropped
        </WindowHeader>
        <WindowContent>
          <p>
            Please welcome the latest krisa in the rat pack{" "}
            <span className="window__bold">CRAZY KRISA</span>.
          </p>
          <Button
            onClick={() => {
              navigate("/lair");
            }}
          >
            <span>
              Get the <span className="window__bold"> miska </span> now xD
            </span>
          </Button>
        </WindowContent>
      </Window>
    </NotificationWindowStyled>
  );
};

export default NotificationWindow;
