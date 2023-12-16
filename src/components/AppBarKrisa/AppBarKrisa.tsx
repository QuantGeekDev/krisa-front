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
import { ToastContainer } from "react-toastify";

const AppBarKrisa = (): React.ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ToastContainer style={{ position: "fixed" }} />
      <AppBar>
        <Toolbar
          style={{
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: "bold", width: "150px", fontSize: "1.5rem" }}
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
                  width: "150px",
                }}
                onClick={() => setOpen(false)}
              >
                <MenuListItem style={{ fontSize: "1.5rem" }}>
                  <NavLink to={"/home"}>
                    <i role="img" aria-label="🐀">
                      🐀
                    </i>
                    Krisa
                  </NavLink>
                </MenuListItem>
                <MenuListItem style={{ fontSize: "1.5rem" }}>
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

          <TextInput
            placeholder="Search..."
            width={150}
            required
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarKrisa;
