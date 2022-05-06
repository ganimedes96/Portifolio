import { Box,Flex,Text,Button, Icon } from "@chakra-ui/react"
import Head from "next/head";
import {
    RiGithubFill,
    RiMailSendLine,
    RiLinkedinBoxFill,
    RiDiscordFill,
  } from "react-icons/ri";
import Link from 'next/link'

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
            p={{base:'5rem 2rem', md:'10rem 5rem'}}

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
                 
                      <Text as='a'
                          w ={{base:'80%',md:'20%'}}
                          backgroundColor='transparent'
                          textAlign='center'
                          color='gray.300'
                          href='https://www.linkedin.com/in/hudson-felix-577305215/'
                          target='_blank'
                          border='2px solid'
                          borderColor='blue.400'
                          p='.5rem 1.3rem'
                          display='flex'
                          alignItems='center'
                          justifyContent='center'
                          gap='.5rem'
                          borderRadius='5px'
                      >
                        <Icon
                              as={RiLinkedinBoxFill}
                              boxSize="25px"
                              color="blue.500"
                            
                            />
                          Linkedin    
                      </Text>
                 
                    <Text
                      as='a'
                       w ={{base:'80%',md:'20%'}}
                        backgroundColor='transparent'
                        color='gray.300'
                        border='2px solid'
                        borderColor='green.400'
                        href='https://github.com/ganimedes96'
                        target='_blank'
                        p='.5rem 1.3rem'
                          display='flex'
                          alignItems='center'
                          justifyContent='center'
                          gap='.5rem'
                          borderRadius='5px'
                       
                    >
                      <Icon
                            as={RiGithubFill}
                            boxSize="25px"
                            color="green.500"
                          
                          />
                        GitHub
                    </Text>
                    <Text
                        as='a'
                        w ={{base:'80%',md:'20%'}}
                        backgroundColor='transparent'
                        color='gray.300'
                        border='2px solid'
                        borderColor='red.400'
                        href='mailto:hudsonfelix69@gmail.com?subject=subject text'
                        target='_blank'
                        p='.5rem 1.3rem'
                          display='flex'
                          alignItems='center'
                          justifyContent='center'
                          gap='.5rem'
                          borderRadius='5px'
                       
                    >
                        <Icon
                          as={RiMailSendLine}
                          boxSize="25px"
                          color="red.500"
                        
                        />
                        Email
                    </Text>
                    <Text
                        as='a'
                        w ={{base:'80%',md:'20%'}}
                        backgroundColor='transparent'
                        color='gray.300'
                        border='2px solid'
                        borderColor='purple.400'
                        href=''
                          target='_blank'
                        p='.5rem 1.3rem'
                          display='flex'
                          alignItems='center'
                          justifyContent='center'
                          gap='.5rem'
                          borderRadius='5px'
                        
                        
                    >
                          <Icon
                            as={RiDiscordFill}
                            boxSize="25px"
                            color="purple.500"
                          
                          />
                        Discord
                    </Text>
                </Flex>

        </Box>
      </>
    )

}