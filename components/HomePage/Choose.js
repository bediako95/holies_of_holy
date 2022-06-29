import { Flex, Box, Text, Grid } from "@theme-ui/components";
import Image from "next/image";
import { ChooseData, Clients } from "../../service_data";
import style from "../../styles/Home.module.css";
import GridView from "./Grid";

const Choose = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",

        py: "120px",
        pb: "240px",
        // mb: "-25%",
      }}
    >
      <Flex
        sx={{
          // p: 10,
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            fontSize: "32px",
            fontWeight: 500,
            "@media screen and (max-width:720px)": {
              fontSize: "25px",
            },
          }}
        >
          Why Choose us
        </Text>
      </Flex>

      <Flex
        sx={{
          flexDirection: "column",
          "@media screen and (min-width:720px)": {
            flexDirection: "row",
          },
        }}
      >
        {ChooseData.map((data, i) => (
          <>
            <GridView
              bgImage={data.bgImage}
              title={data.title}
              desc={data.desc}
              key={i}
            />
          </>
        ))}
      </Flex>
    </Flex>
  );
};

export default Choose;
