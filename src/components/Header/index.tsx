import { Box, Flex, ListItem, UnorderedList,Divider, Menu} from '@chakra-ui/react';
import Link  from 'next/link';
import Lottie from 'react-lottie';
import snake from '../animations/snake.json'
import { NavigationMenu } from './NavMenu';



export const Header = ()=> {
    
    const snakeAnimation= {
        loop: true,
        autoplay: true,
        animationData: snake,
        rendererSettings:{
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    
    return(
        <>
        <Flex 
            as='header'
            mx='auto'
            maxWidth='1200px'
            w='100%'
            justifyContent='space-between'
            alignItems='center'
            p={{base:'2rem', md:'1rem'}}
            
        >
        <Link href='/' passHref>
         <Box>
            <Lottie
                options={snakeAnimation}
                height='90px'
                width='90px'
            />
        </Box>   
        </Link>    
        
        <NavigationMenu/>

           
        </Flex>
        <Divider />
        </>
           
        
        )
}