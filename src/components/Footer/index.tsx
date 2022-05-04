import { Box, Flex,Text,Icon } from "@chakra-ui/react"
import {
    RiGithubFill,
    RiWhatsappFill,
    RiLinkedinBoxFill,
    RiDiscordFill,
    RiGitBranchLine
  } from "react-icons/ri";


export const Footer = () =>{
    return(
        <Flex 
            as='footer'
            h='10rem'
            bg='blue.800'
            d='flex'
            w='100%'
            alignItems='center'
            justifyContent='space-between'
            px='3rem'
            
        >
            <Box>
                <Text 
                    as='h2'
                    fontSize='30px'
                    fontWeight='600'
                    color='gray.300'
                    
                >Hudson Felix</Text>
                <Text as='p' color='gray.400'>Developer Front-End</Text>
            </Box>
            <Flex
                    align='center'
                    gap='2rem'

            >
                <Icon
                    as={RiWhatsappFill}
                    fontSize='28px'
                />
                <Icon
                    as={RiDiscordFill}
                    fontSize='28px'
                />
                <Icon
                    as={RiGithubFill}
                    fontSize='28px'
                />
            </Flex>    
            

        </Flex>
    )
}