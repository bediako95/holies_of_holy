import style from "../../styles/Navbar.module.css";
import { useState } from "react";
import { Box, Flex } from "@theme-ui/components";

const MenuIcon = () => {
  const [active, setActive] = useState(false);
  return (
    <Box
      onClick={() => setActive(!active)}
      sx={{
        mt: 20,
      }}
    >
      <div className={active ? style.active_menu_icon : style.menu_icon} />
    </Box>
  );
};

export default MenuIcon;
