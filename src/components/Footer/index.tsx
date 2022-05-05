import { Box, Flex,Text,Icon } from "@chakra-ui/react"
import {
    RiGithubFill,
    RiWhatsappFill,
    RiLinkedinBoxFill,
    RiDiscordFill,
    RiGitBranchLine
  } from "react-icons/ri";
  import cat from '../animations/cat.json'
  import Lottie from 'react-lottie';

export const Footer = () =>{
    
    const catAnimation= {
        loop: true,
        autoplay: true,
        animationData: cat,
        rendererSettings:{
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <Flex 
            as='footer'
            h='3.5rem'
            bg='blue.800'
            d='flex'
            w='100%'
            align='center'
            justify='center'
            gap='1rem'
            
            
            
        >
            
              <Box>
              <Text 
                    as='h2'
                    fontSize='20px'
                    fontWeight='500'
                    color='gray.300'
                    
                >Hudson Felix</Text>
              </Box>
               
           <Box mb='.3rem'>
           <Lottie
                  options={catAnimation}
                  height='55px'
                  width='55px'
              />
            
           </Box>
            

        </Flex>
    )
}