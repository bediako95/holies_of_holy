import { Flex, Text } from "@theme-ui/components";
import Image from "next/image";
import { Service_data } from "../service_data";
import Service_Item from "./Service_Item";

const Services_List = ({}) => {
  return (
    <Flex
      sx={{
        width: "100%",
        gap: 100,
        mx: "5%",
        pb: "10%",
        px: "15%",

        "@media screen and (max-width:1024px)": {
          width: "90%",
          gap: 50,
          px: "5%",
          mx: "auto",
        },
        "@media screen and (max-width:720px)": {
          gap: 30,

          pb: "10%",
        },
        "@media screen and (max-width:450px)": {
          gap: 2,

          //mx: "7%",
        },
        "@media screen and (max-width:450px)": {
          gap: 2,

          //mx: "7%",
        },
        "@media screen and (max-width:420px)": {
          width: "100%",
          gap: 10,
        },
      }}
    >
      {Service_data.map((data, i) => (
        <div key={i}>
          <Service_Item item={data} />
        </div>
      ))}
    </Flex>
  );
};

export default Services_List;
