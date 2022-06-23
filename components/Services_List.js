import { Flex, Text } from "@theme-ui/components";
import Image from "next/image";
import { Service_data } from "../service_data";
import Service_Item from "./Service_Item";

const Services_List = ({}) => {
  return (
    <Flex
      sx={{
        width: "100%",
        gap: 70,
        mx: "10%",
        pb: "10%",
        px: "5%",

        "@media screen and (max-width:1024px)": {
          width: "90%",
          gap: 50,
          px: "5%",
          mx: "auto",
        },
        "@media screen and (max-width:720px)": {
          gap: 3,
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
