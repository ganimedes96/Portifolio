import { Box,Flex,Text,Button, Icon } from "@chakra-ui/react"
import Head from "next/head";
import {
    RiGithubFill,
    RiMailSendLine,
    RiLinkedinBoxFill,
    RiDiscordFill,
  } from "react-icons/ri";


export default function About () {

    return(
      <>
      <Head>
            <title>Portfólio | Sobre mim</title>
        </Head>
        <Box 
            as='main'
            maxW='1300'
            mx='auto'
            p={{base:'5rem 2rem', md:'8rem 5rem'}}

            >
                <Text 
                    as='h1'
                    fontSize='27px'
                    color='gray.400'
                    textAlign='center' 
                    letterSpacing='2px'
                    fontWeight='500'    
                    mb='2rem'

                    >

                        Sobre mim
                </Text>
                <Text 
                    as='p'
                    fontSize='20px'
                    color='gray.400'
                    textAlign='center'
                    letterSpacing='1px'
                    mb='1rem'
                        
                    >
                Olá, me chamo Hudson Felix, sou estudante de desenvolvimento Web com foco em FrontEnd.
                Estou em busca da minha primeira oportunidade como desenvolvedor, atualmente faço faculdade de ciência da computação e curso de desenvolvimento web pela trybe.
                </Text>
                <Text 
                    as='p'
                    fontSize='20px'
                    color='gray.400'
                    textAlign='center'
                    letterSpacing='1px'
                    mb='1rem'
                    
                    >
                    Meus primeiros passos com programação foram na unity com C# em 2012, em 2020 por meio de alguns amigos da faculdade eu comecei a estudar javascript
                    e assim entrei no mundo da programação em busca de novos conhecimentos e de tentar tornar a vida das pessoas mais simples através da tecnologia. 

                </Text>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    mt='5rem'
                    gap='2rem'
                    flexDirection={{base:'column', md:'row'}}

                >
                    <Button
                        w ={{base:'80%',md:'20%'}}
                        backgroundColor='transparent'
                        color='gray.300'
                        border='1px solid'
                        borderColor='blue.400'
                        p='.7rem 1.3rem'
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
                            as={RiLinkedinBoxFill}
                            boxSize="25px"
                            color="blue.500"
                          
                          />
                        }
                    >
                        Linkedin    
                    </Button>
                    <Button
                       w ={{base:'80%',md:'20%'}}
                        backgroundColor='transparent'
                        color='gray.300'
                        border='1px solid'
                        borderColor='green.400'
                        p='.7rem 1.3rem'
                        _hover={{ bg: "transparent" }}
                        _active={{
                          transform: "scale( 1.05)",
                          borderColor: "green.400",
                        }}
                        _focus={{
                          boxShadow: "0 0 1px 2px blue.400, 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                        leftIcon={
                          <Icon
                            as={RiGithubFill}
                            boxSize="25px"
                            color="green.500"
                          
                          />
                        }
                    >
                        GitHub
                    </Button>
                    <Button
                    w ={{base:'80%',md:'20%'}}
                        backgroundColor='transparent'
                        color='gray.300'
                        border='1px solid'
                        borderColor='red.400'
                        p='.7rem 1.3rem'
                        _hover={{ bg: "transparent" }}
                        _active={{
                          transform: "scale( 1.05)",
                          borderColor: "green.400",
                        }}
                        _focus={{
                          boxShadow: "0 0 1px 2px blue.400, 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                        leftIcon={
                          <Icon
                            as={RiMailSendLine}
                            boxSize="25px"
                            color="red.500"
                          
                          />
                        }
                    >
                        E-mail
                    </Button>
                    <Button
                    w ={{base:'80%',md:'20%'}}
                        backgroundColor='transparent'
                        color='gray.300'
                        border='1px solid'
                        borderColor='purple.400'
                        p='.7rem 1.3rem'
                        _hover={{ bg: "transparent" }}
                        _active={{
                          transform: "scale( 1.05)",
                          borderColor: "purple.400",
                        }}
                        _focus={{
                          boxShadow: "0 0 1px 2px blue.400, 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                        leftIcon={
                          <Icon
                            as={RiDiscordFill}
                            boxSize="25px"
                            color="purple.500"
                          
                          />
                        }
                    >
                        Discord
                    </Button>
                </Flex>

        </Box>
      </>
    )

}