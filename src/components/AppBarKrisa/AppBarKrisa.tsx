import React, { useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
} from "react95";
import AppBarKrisaStyled from "./AppBarKrisaStyled";

const AppBarKrisa = (): React.ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <AppBarKrisaStyled>
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: "bold" }}
            >
              <img
                src="./krisaLogo.png"
                alt="Krisa logo"
                style={{ height: "20px", marginRight: 4 }}
              />
              Start
            </Button>
            {open && (
              <MenuList
                style={{
                  position: "absolute",
                  left: "0",
                  top: "100%",
                }}
                onClick={() => setOpen(false)}
              >
                <MenuListItem>
                  <i role="img" aria-label="🐀">
                    🐀
                  </i>
                  Krisa
                </MenuListItem>
                <MenuListItem>
                  <i role="img" aria-label="🏯">
                    🏯
                  </i>
                  Lair
                </MenuListItem>
                <Separator />
                <MenuListItem disabled>
                  <span role="img" aria-label="🔙">
                    🔙
                  </span>
                  Logout
                </MenuListItem>
              </MenuList>
            )}
          </div>

          <TextInput placeholder="Search..." width={150} />
        </Toolbar>
      </AppBar>
    </AppBarKrisaStyled>
  );
};

export default AppBarKrisa;