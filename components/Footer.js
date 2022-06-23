import { Flex, Box, Text } from "@theme-ui/components";
import Image from "next/image";
import logo from "../public/service_assets/logo.png";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <Flex
      sx={{
        mt: "20%",
        justifyContent: "space-around",
        bg: "black",
        p: 5,
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
          }}
        >
          Tech Solutions
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
          cost effective solutions. This is your number one hub for all your
          creatives.
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
          lineHeight: 2,
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
              mt: "-20%",
            },
          }}
        >
          Services
        </Text>

        <Link href="http://localhost:3000/services/Web%20development" passHref>
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

        <Link
          href="http://localhost:3000/services/2D%20&%203D%20Animation"
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
          href="http://localhost:3000/services/Social%20Media%20Management"
          passHref
        >
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

        <Link href="http://localhost:3000/services/%20Print%20Design" passHref>
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

        <Link
          href="http://localhost:3000/services/Videography%20&%20Editing"
          passHref
        >
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
              network="instagram"
              fgColor="white"
              url="https://www.instagram.com/holyofholiesconcepts_/"
            />
            <SocialIcon
              network="mailto"
              fgColor="white"
              url="mailto:holyofholiesconcepts@gmail.com"
            />
            <SocialIcon
              network="youtube"
              fgColor="white"
              url="https://www.youtube.com/channel/UCZv3SEcKCenhzjM3utoU46g"
            />

            <SocialIcon
              network="whatsapp"
              fgColor="white"
              url="https://web.whatsapp.com/send?phone=551655728&text&app_absent=0"
            />
            <SocialIcon network="facebook" fgColor="white" url="#" />
          </Flex>
          <Text
            sx={{
              color: "white",
              mt: "5%",
              "@media screen and (max-width:720px)": {},
            }}
          >
            &copy; 2022 Holy of Holies Concept
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
