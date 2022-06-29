import { Flex, Box, Text } from "@theme-ui/components";
import Image from "next/image";
import logo from "../public/service_assets/logo.png";
import { server } from "./server";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const url = server;
  console.log(url);
  return (
    <Flex
      sx={{
        mt: "20%",
        justifyContent: "space-around",
        bg: "black",
        p: 3,
        gap: 80,

        "@media screen and (max-width:720px)": {
          flexWrap: "wrap",
        },
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          width: "20%",
          lineHeight: 3,
          "@media screen and (max-width:720px)": {
            width: "80%",
          },
          "@media screen and (max-width:1024px)": {
            width: "50%",
          },
        }}
      >
        <Text
          sx={{
            color: "#F4CA16",
            fontWeight: 700,
            "@media screen and (max-width:720px)": {
              textAlign: "center",
              textDecoration: "underline",
            },
            "@media screen and (max-width:1024px)": {
              lineHeight: 2,
            },
          }}
        >
          Holies of Holy Concept
        </Text>
        <Text
          sx={{
            color: "white",
            lineHeight: 2,
            "@media screen and (max-width:1024px)": {
              lineHeight: 1.5,
            },
          }}
        >
          A creative and technological hub focusing on providing quality and
          cost effective solutions. This is your number one creative hub.
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
          ></Flex>
        </Flex>
      </Flex>

      <Flex
        sx={{
          flexDirection: "column",

          lineHeight: 3,

          "@media screen and (max-width:720px)": {
            width: "80%",
            textAlign: "center",
          },
          "@media screen and (max-width:1024px)": {
            width: "50%",
          },
        }}
      >
        <Text
          sx={{
            color: "#F4CA16",
            fontWeight: 700,
            "@media screen and (max-width:720px)": {
              textDecoration: "underline",
              mt: "-20%",
            },
          }}
        >
          Services
        </Text>

        <Link
          href={`${url}/services/2D%20&%203D%20Animation`}
          as={`${url}/services/2D%20&%203D%20Animation`}
          passHref
        >
          <a>
            <Text
              sx={{
                color: "white",
              }}
            >
              2D & 3D Animation
            </Text>
          </a>
        </Link>

        <Link
          href={`${url}/services/%20Print%20Design`}
          as={`${url}/services/%20Print%20Design`}
          passHref
        >
          <a>
            <Text
              sx={{
                color: "white",
              }}
            >
              Print Design
            </Text>
          </a>
        </Link>
        <Link href={`${url}/services/Social%20Media%20Managemen`} passHref>
          <a>
            <Text
              sx={{
                color: "white",
              }}
            >
              Social Media Management
            </Text>
          </a>
        </Link>

        <Link href={`${url}/services/%20Print%20Design`} passHref>
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
      </Flex>

      <Flex
        sx={{
          flexDirection: "column",
          lineHeight: 3,
          "@media screen and (max-width:720px)": {
            width: "80%",
            textAlign: "center",
          },
        }}
      >
        <Text
          sx={{
            color: "#F4CA16",
            fontWeight: 700,
            "@media screen and (max-width:720px)": {
              textDecoration: "underline",
            },
          }}
        >
          Company
        </Text>

        <Link href="/about" passHref>
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

        <Link href="/mission" passHref>
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

        <Link href="/contact" passHref>
          <a>
            <Text
              sx={{
                color: "white",
              }}
            >
              Contact us
            </Text>
          </a>
        </Link>

        <Flex
          sx={{
            flexDirection: "column",
            mt: "30%",
          }}
        >
          <Flex
            sx={{
              flexDirection: "row",
              gap: 15,
              alignSelf: "center",
            }}
          >
            {/****<SocialIcon network="twitter" fgColor="white" url="" />*/}
            <SocialIcon
              target="_blank"
              network="instagram"
              fgColor="white"
              url="https://www.instagram.com/holyofholiesconcepts_/"
            />
            <SocialIcon
              target="_blank"
              network="mailto"
              fgColor="white"
              url="mailto:holyofholiesconcepts@gmail.com"
            />
            <SocialIcon
              target="_blank"
              network="youtube"
              fgColor="white"
              url="https://www.youtube.com/channel/UCZv3SEcKCenhzjM3utoU46g"
            />

            <SocialIcon
              network="whatsapp"
              target="_blank"
              fgColor="white"
              url="https://wa.me/0s551655728"
            />
            <SocialIcon network="facebook" fgColor="white" url="#" />
          </Flex>
          <Text
            sx={{
              color: "white",
              mt: "5%",
            }}
          >
            &copy; 2022 The Tech House
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
