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
import { NavLink } from "react-router-dom";

const AppBarKrisa = (): React.ReactElement => {
  const [open, setOpen] = useState(false);

  return (
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
                <NavLink to={"/home"}>
                  <i role="img" aria-label="🐀">
                    🐀
                  </i>
                  Krisa
                </NavLink>
              </MenuListItem>
              <MenuListItem>
                <NavLink to={"/lair"}>
                  <i role="img" aria-label="🏯">
                    🏯
                  </i>
                  Lair
                </NavLink>
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
  );
};

export default AppBarKrisa;
