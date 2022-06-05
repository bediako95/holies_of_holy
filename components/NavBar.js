import Link from "next/link";
import { Box, Flex } from "@theme-ui/components";
import navstyle from "../styles/Navbar.module.css";
import Image from "next/image";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <Flex
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        height: 70,
        bg: "black",
      }}
    >
      <Box
        sx={{
          color: "white",
          mt: "-55px",
          pt: 2,
        }}
      >
        <Image src={logo} width={250} height={170} />
      </Box>

      <Flex
        as="nav"
        sx={{
          mt: "15px",
          pr: 60,
        }}
      >
        <ul className={navstyle.ul}>
          <li className={navstyle.li}>
            <Link href="/about" passHref>
              <a>About us</a>
            </Link>
          </li>
          <li className={navstyle.li}>
            <Link href="/service" passHref>
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
    </Flex>
  );
};

export default NavBar;
