import { Flex, Text } from "@theme-ui/components";
import Image from "next/image";
import { Service_data } from "../service_data";
import Service_Item from "./Service_Item";

const Services_List = ({ data }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}
    >
      <Flex>
        {Service_data.map((data) => (
          <>
            <Service_Item item={data} />
          </>
        ))}
      </Flex>
    </Flex>
  );
};

export default Services_List;
