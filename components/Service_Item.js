import Link from "next/link";
import { Text, Flex, Box } from "@theme-ui/components";
import Image from "next/image";
import style from "../styles/Home.module.css";

const Service_Item = ({ item }) => {
  const url = item.image;
  console.log(url);

  return (
    <Flex
      sx={{
        flexDirection: "column",
        width: "100%",
        textAlign: "center",
        "@media screen and (max-width:720px)": {
          width: "100%",
        },
      }}
    >
      <Link href="/services/[desc]" as={`/services/${item.desc}`}>
        <a className={style.image} style={{}}>
          <Image
            src={url}
            alt=""
            width={150}
            height={150}
            style={{
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              mb: "5%",
            }}
          ></Box>
          <Text
            sx={{
              fontWeight: 700,
              mt: 10,
              width: "100%",
              fontSize: "1.1rem",

              "@media screen and (max-width:1024px)": {
                width: "60%",
                fontSize: "1rem",
              },

              "@media screen and (max-width:720px)": {
                fontSize: "0.7rem",
                fontWeight: 600,
                width: "70%",
              },
            }}
          >
            {item.desc}
          </Text>
        </a>
      </Link>
    </Flex>
  );
};

export default Service_Item;
