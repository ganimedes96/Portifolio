import {
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Stack,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  RiGithubFill,
  RiWhatsappFill,
  RiLinkedinBoxFill,
  RiDiscordFill,
  RiGitBranchLine
} from "react-icons/ri";
import astrolottie from '../animations/astrolottie.json'
import Lottie from 'react-lottie';
import Link from "next/link";



export const Connections = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

 const isWide = useBreakpointValue({
   base: false,
   md: true
 })

  const astrolottieAnimate= {
    loop: true,
    autoplay: true,
    animationData: astrolottie,
    rendererSettings:{
        preserveAspectRatio: 'xMidYMid slice'
    }
}

  return (
    <Flex
      mt="10rem"
      align="center"
      justify="space-between"
      
    >
      <Box>
        <Text as="h2" fontSize="22px" fontWeight="500" mb="1rem" color='gray.400'>
          Ola,  Me chamo 
        </Text>
        <Text as="h1" fontSize="35px" fontWeight='500' color='blue.200' mb="1rem">
           Hudson Felix :)
        </Text>
        <Text as="a" color="gray.500" fontSize="20px">
          Developer Front-End
        </Text>
        <Flex 
          gap={{base:"1rem", md:"2rem"}} 
          mt={{base:"2rem", md:"1rem"}}
          flexDirection={{base: 'column', md:'row'}}
          >
          <Text
            d="flex"
            as="a"
            bg="blue.400"
            justifyContent="center"
            alignItems="center"
            p=".5rem 1rem"
            borderRadius="5px"
          >
            Download CV
          </Text>
          <Button
            onClick={onOpen}
            bg="transparent"
            border=" 2px  solid"
            borderColor="blue.400"
            _hover={{ bg: "transparent" }}
            _active={{
              transform: "scale( 1.05)",
              borderColor: "blue.400",
            }}
            _focus={{
              boxShadow: "0 0 1px 2px blue.400, 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            leftIcon={
              <Icon
                as={RiGitBranchLine}
                boxSize="20px"
              
              />
            }
          >
            Conexões
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay 
           
            />
            <ModalContent
              alignSelf="center"
              bg="gray.900"
              w="90%"
              maxW="300px"
              p="30px"
            >
              <ModalHeader p="0">Conexões</ModalHeader>
              <ModalCloseButton top="30px" right="30px" />
              <ModalBody mt="10" p="0" w="100%">
                <Stack>
                 <Link href='https://www.linkedin.com/in/hudson-felix-577305215/' passHref>

                  <Button
                    as="a"
                    target="_blank"
                    bg="blue.400"
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={
                      <Icon
                        as={RiLinkedinBoxFill}
                        boxSize="20px"
                        marginRight="20px"
                      />
                    }
                    _hover={{
                      bg: "blue.900",
                    }}
                  >
                    LinkedIn
                  </Button>
                 </Link>
                  <Button
                    as="a"
                    target="_blank"
                    bg="blue.400"
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={
                      <Icon
                        as={RiGithubFill}
                        boxSize="20px"
                        marginRight="20px"
                      />
                    }
                    _hover={{
                      bg: "blue.900",
                    }}
                  >
                    Github
                  </Button>
                  <Button
                    as="a"
                    target="_blank"
                    bg="blue.400"
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={
                      <Icon
                        as={RiWhatsappFill}
                        boxSize="20px"
                        marginRight="20px"
                      />
                    }
                    _hover={{
                      bg: "blue.900",
                    }}
                  >
                    WhatsApp
                  </Button>
                  <Button
                    as="a"
                    target="_blank"
                    bg="blue.400"
                    justifyContent="flex-start"
                    leftIcon={
                      <Icon
                        as={RiDiscordFill}
                        boxSize="20px"
                        marginRight="20px"
                      />
                    }
                    _hover={{
                      bg: "blue.900",
                    }}
                  >
                    Discord
                  </Button>
                </Stack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
      <Box>
        {isWide &&(

        <Lottie
                  options={astrolottieAnimate}
                  height='250px'
                  width='250px'
              />
        )}
      </Box>
    </Flex>
  );
};
