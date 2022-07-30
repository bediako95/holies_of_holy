import { Grid, Box, Text, Flex } from "@theme-ui/components";
import Image from "next/image";
import style from "../../styles/Home.module.css";
const GridView = ({ bgImage, title, desc }) => {
  return (
    <Flex
      sx={{
        height: "50%",
        width: "80%",
        "@media screen and (max-width:720px)": {
          mx: "auto",
          px: 10,
        },
      }}
    >
      <Flex
        sx={{
          m: 30,
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 0 20px #ccc",
          borderRadius: "20px",
          lineHeight: 2,
          textAlign: "center",
          px: 30,
          py: 30,
          "@media screen and (max-width:720px)": {
            lineHeight: 3,
            height: "70%",
            width: "100%",
            mx: "auto",
            px: 30,
            py: 30,

            "@media screen and (max-width:450px)": {},
          },
        }}
      >
        <Box
          sx={{
            alignContent: "center",
            alignSelf: "center",
            width: "50%",
          }}
        >
          <Image
            src={bgImage}
            width={80}
            height={80}
            alt=""
            style={{
              borderRadius: "50%",
            }}
          />
        </Box>

        <Text
          sx={{
            fontWeight: 700,
            fontSize: "1.2rem",
            textDecoration: "underline",
            "@media screen and (max-width:1024px)": {
              fontSize: "1.1rem",
              pb: 3,
            },
            "@media screen and (max-width:720px)": {
              fontSize: "1.1rem",
              pb: 3,
            },
          }}
        >
          {title}
        </Text>
        <Text
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.5,
            pb: 60,

            "@media screen and (max-width:720px)": {
              lineHeight: 1.2,
              fontSize: "1.1rem",
              pb: "100%",
              p: "15% 15% 130% 15%",
              m: "-19%",
            },
          }}
        >
          {desc}
        </Text>
      </Flex>
    </Flex>
  );
};

export default GridView;
