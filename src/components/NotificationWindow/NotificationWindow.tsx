import { Window, WindowHeader, WindowContent, Button } from "react95";
import NotificationWindowStyled from "./NotificationWindowStyled";
import { useNavigate } from "react-router-dom";

const NotificationWindow = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <NotificationWindowStyled>
      <Window>
        <WindowHeader className="window__header">
          Welcome to the land of the krisa!
        </WindowHeader>
        <WindowContent>
          <p>
            BEWARE OF DANGERS when entering the rat lair.{" "}
            <span className="window__bold">ENTER AT YOUR OWN RISK</span>.
          </p>
          <Button
            onClick={() => {
              navigate("/lair");
            }}
          >
            <span>
              ENTER THE <span className="window__bold"> KRISA LAIR </span>
            </span>
          </Button>
        </WindowContent>
      </Window>
    </NotificationWindowStyled>
  );
};

export default NotificationWindow;
