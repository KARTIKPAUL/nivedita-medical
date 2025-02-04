import {
   Box,
   Container,
   SimpleGrid,
   Stack,
   Text,
   Flex,
   Image,
   InputGroup,
   Input,
   InputRightAddon,
   HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Medimed from "../../assets/logos/Medimed.com-navbar.png";
import Medimed_logo from "../../assets/logos/Medimed.com-logo-removebg.png";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

let companyArr = [
   "About us",
   "Services",
   "Testimonials",
   "Contact"
];

let shoppingArr = [
   "Dental implants",
   "Dentures",
   "Cosmetic Dentistry",
    "Oral Hygiene",
    "Dental Surgery"
];

let socialArr = [
   {  type:"location",
      icon:<FaMapMarkerAlt size={25}/>,
     value:" G6C3+3G4, Kunjanagar Rd, Subhashpally, Falakata, West Bengal 735211"
   },
   {
      icon:<FaPhoneAlt/>,
    value:"080167 17777"
   }
    ,
   {
      icon:<FaEnvelope/>, 
      value:"niveditamedical@official.com"
   }
];

function Footer() {
   const navigate = useNavigate();

   return (
      <Box align={"left"}>
         <Flex
            p={{ base: 10, lg: 7 }}
            borderBottom={"1px solid"}
            borderColor={"blackAlpha.200"}
            gap={7}
            direction={{ base: "column", lg: "row" }}
            align={"center"}
         >
            <Image
               src={Medimed}
               h={{ base: 14, lg: 20 }}
               onClick={() => navigate("/")}
               cursor={"pointer"}
            />
            <Text
               w={{ base: "100%", lg: "60%" }}
               fontWeight={500}
               color={"blackAlpha.500"}
               fontSize={{ base: "sm", lg: "md" }}
            >
               Medimed.com is one of India’s most trusted pharmacies, dispensing
               quality medicines at reasonable prices to over 7 million happy
               customers – PAN India.
            </Text>
         </Flex>
         <Container
            as={Stack}
            maxW={"auto"}
            py={10}
            px={{ base: 8, md: 10, lg: 20 }}
         >
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={7}>
               <Stack align={"flex-start"}>
                  <ListHeader>Company</ListHeader>
                  {companyArr.map((item) => (
                     <ListItem key={item}>{item}</ListItem>
                  ))}
               </Stack>
               <Stack align={"flex-start"}>
                  <ListHeader>Our Services</ListHeader>
                  {shoppingArr.map((item) => (
                     <ListItem key={item}>{item}</ListItem>
                  ))}
               </Stack>
               <Stack align={"flex-start"}>
                  <ListHeader>Contact Us</ListHeader>
                  {socialArr.map((item) => (
                     <ListItem key={item}>
                 
              {item.icon}

               {item.value}</ListItem>
                  ))}
               </Stack>
               <Stack align={"flex-start"}>
                  <ListHeader>Find US</ListHeader>
                  <ListItem>
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.0040884163004!2d89.20129347542598!3d26.519992976883465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3a42c2be5b2eb%3A0x7cd882618c26c02b!2sNIVEDITA%20MEDICAL!5e0!3m2!1sen!2sin!4v1738570667058!5m2!1sen!2sin"
                  width="300"
                  height="150"
                  style={{ border: 0 }} // ✅ Correct way to write styles in React
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               />
                  </ListItem>
                  
               </Stack>
            </SimpleGrid>
         </Container>
         <Box py={10}>
            <Flex
               align={"center"}
               _before={{
                  content: '""',
                  borderBottom: "1px solid",
                  borderColor: "blackAlpha.200",
                  flexGrow: 1,
                  mr: 8,
               }}
               _after={{
                  content: '""',
                  borderBottom: "1px solid",
                  borderColor: "blackAlpha.200",
                  flexGrow: 1,
                  ml: 8,
               }}
            >
               <Image
                  src={Medimed_logo}
                  alt="brand-logo"
                  boxSize={"50px"}
                  borderRadius={50}
                  onClick={() => navigate("/")}
                  cursor={"pointer"}
               />
            </Flex>
            <Flex
               direction={{ base: "column", md: "row" }}
               pt={6}
               px={{ base: 4, md: 10, lg: 20 }}
               align={"center"}
               justify={"space-between"}
            >
               <Text fontSize={"sm"} textAlign={"center"}>
                  Copyright© 2022. All Rights Reserved
               </Text>
               <Flex>
                  <FaFacebook
                     fontSize={33}
                     cursor={"pointer"}
                     style={{
                        margin: "0.5rem",
                        color: "#4267B2",
                        background: "whitesmoke",
                        padding: "0.3rem",
                        borderRadius: "50%",
                     }}
                  />
                  <FaTwitter
                     fontSize={33}
                     cursor={"pointer"}
                     style={{
                        margin: "0.5rem",
                        color: "#1DA1F2",
                        background: "whitesmoke",
                        padding: "0.3rem",
                        borderRadius: "50%",
                     }}
                  />
                  <FaLinkedinIn
                     fontSize={33}
                     cursor={"pointer"}
                     style={{
                        margin: "0.5rem",
                        color: "#0e76a8",
                        background: "whitesmoke",
                        padding: "0.3rem",
                        borderRadius: "50%",
                     }}
                  />
                  <FaYoutube
                     fontSize={33}
                     cursor={"pointer"}
                     style={{
                        margin: "0.5rem",
                        color: "#FF0000",
                        background: "whitesmoke",
                        padding: "0.3rem",
                        borderRadius: "50%",
                     }}
                  />
               </Flex>
            </Flex>
         </Box>
      </Box>
   );
}

export default Footer;
