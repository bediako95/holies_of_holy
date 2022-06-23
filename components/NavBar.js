import Link from "next/link";
import { Box, Flex, MenuButton, Text } from "@theme-ui/components";
import navstyle from "../styles/Navbar.module.css";
import Image from "next/image";
import logo from "../public/service_assets/logo.png";
import { useRouter } from "next/router";
import MenuIcon from "./HomePage/MenuIcon";
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

        height: 70,
        bg: "black",
        position: "fixed",
        zIndex: 1,
        width: "100%",
        "@media screen and (max-width:720px)": {},
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          mt: "-2.5%",
          ml: "-10%",
          pt: 2,
          cursor: "pointer",
          "@media screen and (max-width:720px)": {
            mt: "-8%",
          },
        }}
      >
        <Image src={logo} width={200} height={150} onClick={handleBack} />
      </Box>
      <Box
        sx={{
          color: "white",
          mt: "0.5%",

          p: "1% 10% 0% 0%",
          fontSize: "1.3rem",
          "@media screen and (max-width:1024px)": {
            fontSize: "1.1rem",
          },

          "@media screen and (max-width:720px)": {
            fontSize: "1rem",
            p: "2% 1% 0% 0%",
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
        <ul className={navstyle.ul}>
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
        </ul>
      </Flex>
      <MenuIcon />
    </Flex>
  );
};

export default NavBar;
