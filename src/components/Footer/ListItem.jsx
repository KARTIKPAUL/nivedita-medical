import { Flex, Text } from "@chakra-ui/react";

function ListItem({ children}) {
   return (
      <Text
         display="flex"
         alignItems="center"
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
