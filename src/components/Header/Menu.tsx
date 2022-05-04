import { Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react"
import { ActiveLink } from '../ActiveLink'

export const Menu = () =>{
    return(
        <Flex 
            as='nav'
            >
               <UnorderedList
                styleType='none'
                d='flex'
                flexDirection={{base: 'column', md:'row'}}
                gap={{base: '2rem', md:'3.5rem'}}
                fontSize='19px'
                cursor='pointer'
                mt={{base:'3rem', md:'0'}}
               >
                   <ListItem>
                       <ActiveLink href='/about' passHref>
                              <Link>Sobre mim</Link>  
                       </ActiveLink>
                       </ListItem>
                       <ListItem>
                       <ActiveLink href='/projects' passHref>
                              <Link>Projetos</Link>  
                       </ActiveLink>
                       </ListItem>
                       <ListItem>
                       <ActiveLink href='/technologies' passHref>
                              <Link>Tecnologias</Link>  
                       </ActiveLink>
                       </ListItem>
                   
               </UnorderedList>
            </Flex> 
            
    )
}