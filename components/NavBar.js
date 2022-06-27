import Link from "next/link";
import { Box, Flex, MenuButton, Text } from "@theme-ui/components";
import navstyle from "../styles/Navbar.module.css";
import Image from "next/image";
import logo from "../public/service_assets/logo.png";
import { useRouter } from "next/router";

import { useState } from "react";

const NavBar = ({ title }) => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <Flex
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,

        height: 75,
        bg: "black",
        position: "fixed",
        zIndex: 1,
        width: "100%",

        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          mt: "-3%",
          ml: "-10%",
          pt: 2,
          cursor: "pointer",
          "@media screen and (max-width:1024px)": {
            mt: "-5%",
          },
          "@media screen and (max-width:720px)": {
            mt: "-8%",
          },
          "@media screen and (max-width:450px)": {
            mt: "-3%",
            width: "40%",
          },
          "@media screen and (max-width:420px)": {
            mt: "-3%",

            width: "30%",
          },
        }}
      >
        <Image src={logo} width={200} height={150} onClick={handleBack} />
      </Box>
      <Box
        sx={{
          color: "white",
          mt: "0.5%",
          //width: "100%",
          p: "1% 10% 0% 0%",
          fontSize: "1.3rem",
          "@media screen and (max-width:1024px)": {
            fontSize: "1.1rem",
          },

          "@media screen and (max-width:720px)": {
            fontSize: "1rem",
            p: "2% 1% 0% 0%",
            mr: "30%",
          },
          "@media screen and (max-width:450px)": {
            fontSize: "1rem",
            p: "5% 0% 0% 0%",
            width: "45%",
          },
        }}
      >
        {title}
      </Box>

      <Flex
        as="nav"
        sx={{
          mt: "15px",

          mr: 60,
        }}
      >
        <ul className={active ? navstyle.ul_active : navstyle.ul}>
          <li className={navstyle.li}>
            <Link href="/about" passHref>
              <a>About us</a>
            </Link>
          </li>
          <li className={navstyle.li}>
            <Link href="/services" passHref>
              <a>Services</a>
            </Link>
          </li>
          <li className={navstyle.li}>
            <Link href="/contact" passHref>
              <a>Contact</a>
            </Link>
          </li>
          <li className={navstyle.li}>
            <Link href="/blog" passHref>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </Flex>

      <Box
        onClick={() => setActive(!active)}
        sx={{
          m: "7% 3% 1% 1%",
        }}
      >
        <div
          className={active ? navstyle.active_menu_icon : navstyle.menu_icon}
        />
      </Box>
    </Flex>
  );
};

export default NavBar;
