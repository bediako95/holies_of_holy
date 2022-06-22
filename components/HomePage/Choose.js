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
        height: "90vh",

        mt: "20%",
        mb: "-25%",

        boxShadow: " 5px 0px 5px  #ccc",

        "@media screen and (max-width:1024px)": {
          mb: "5%",
        },
      }}
    >
      <Flex
        sx={{
          p: 10,
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
        <Text
          sx={{
            color: "#F4CA16",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          ____________
        </Text>
      </Flex>

      <Flex>
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
