import { Flex, Box, Text } from "@theme-ui/components";
import Image from "next/image";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGoogle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex
      sx={{
        mt: "20%",
        justifyContent: "space-around",
        bg: "black",
        p: 5,
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          width: "20%",
          lineHeight: 3,
        }}
      >
        <Text
          sx={{
            color: "#F4CA16",
            fontWeight: 700,
          }}
        >
          Tech Solutions
        </Text>
        <Text
          sx={{
            color: "white",
            lineHeight: 2,
          }}
        >
          A creative and technological hub focusing on providing quality and
          cost effective solutions
        </Text>

        <Flex
          sx={{
            flexDirection: "row",
            gap: "70%",
            justifyContent: "space-between",
            mt: "20%",
          }}
        >
          <Flex
            sx={{
              gap: 3,
            }}
          >
            <FontAwesomeIcon
              icon={faGoogle}
              style={{ fontSize: 30, color: "blue" }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: 30, color: "blue" }}
            />
            <FontAwesomeIcon
              icon="fa-brands fa-twitter"
              style={{ fontSize: 30, color: "blue" }}
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex
        sx={{
          flexDirection: "column",
          lineHeight: 2,
        }}
      >
        <Text
          sx={{
            color: "#F4CA16",
            fontWeight: 700,
          }}
        >
          Services
        </Text>
        <Text
          sx={{
            color: "white",
          }}
        >
          Social Media Management
        </Text>

        <Link href="/" passHref>
          <a>
            <Text
              sx={{
                color: "white",
              }}
            >
              Web development
            </Text>
          </a>
        </Link>

        <Link href="/" passHref>
          <a>
            <Text
              sx={{
                color: "white",
              }}
            >
              Videography & Editing
            </Text>
          </a>
        </Link>

        <Text
          sx={{
            color: "white",
          }}
        >
          2D & 3D Animation
        </Text>

        <Link href="/" passHref>
          <a>
            <Text
              sx={{
                color: "white",
              }}
            >
              Printing
            </Text>
          </a>
        </Link>

        <Link href="/" passHref>
          <a>
            <Text
              sx={{
                color: "white",
              }}
            >
              Magazines, Brochures, Calenders
            </Text>
          </a>
        </Link>

        <Flex
          sx={{
            mt: "30%",
          }}
        >
          <Text
            sx={{
              color: "white",
            }}
          >
            jd
          </Text>
          <Text></Text>
        </Flex>
      </Flex>

      <Flex
        sx={{
          flexDirection: "column",
          lineHeight: 3,
        }}
      >
        <Text
          sx={{
            color: "#F4CA16",
            fontWeight: 700,
          }}
        >
          Company
        </Text>

        <Link href="/" passHref>
          <a>
            <Text
              sx={{
                color: "white",
              }}
            >
              About us
            </Text>
          </a>
        </Link>

        <Link href="/" passHref>
          <a>
            <Text
              sx={{
                color: "white",
              }}
            >
              Mission
            </Text>
          </a>
        </Link>

        <Link href="/" passHref>
          <a>
            <Text
              sx={{
                color: "white",
              }}
            >
              Contact
            </Text>
          </a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
