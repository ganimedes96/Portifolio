import { Box, Flex,Text,Icon } from "@chakra-ui/react"
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
            
              <Flex align='center' justify='center' gap='.4rem'>
              <Text 
                    as='h3'
                    fontSize='20px'
                    fontWeight='500'
                    color='gray.300'
                    
                >Made by </Text>
                <Text  as='h3'  fontSize='20px'fontWeight='500'  color='blue.300'>Hudson Felix</Text>
              </Flex>
               
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