import Link from "next/link";
import { Text, Flex } from "@theme-ui/components";
import Image from "next/image";

const Service_Item = ({ item }) => {
  return (
    <Link href="/services/[item]" as={`/services/${item.desc}`}>
      <a>
        <Image src={item.image} width={50} height={50} />
        <Text>{item.desc}</Text>
      </a>
    </Link>
  );
};

export default Service_Item;
