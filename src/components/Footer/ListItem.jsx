import { Flex, Text } from "@chakra-ui/react";

function ListItem({ children,alignItems}) {
   return (
      <Text
         display="flex"
         alignItems={alignItems} 
         gap={2} 
         fontSize={"sm"}
         letterSpacing={0.4}
         _hover={{
            textDecoration: "none",
            color: "gray",
            cursor: "pointer",
         }}
      >
         {children}
      </Text>
   );
}

export default ListItem;
