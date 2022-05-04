import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Icon,
    IconButton,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { Menu } from './Menu'

export const NavigationMenu = () =>{
    const { isOpen, onOpen,onClose } = useDisclosure()

    const router = useRouter()

    useEffect(() =>{
        onClose()
    },[router.asPath])


    const isDrawer = useBreakpointValue({
        base: true, 
        md: false
    })

    if(isDrawer){
        return(
            <>

                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} h='100%'/>}
                    variant='unstyled'
                    fontSize='24'
                    onClick={onOpen}
                />
                <Drawer isOpen={isOpen} placement='right' onClose={onClose} >
                    <DrawerOverlay>
                        <DrawerContent bg='blue.900'>
                            <DrawerCloseButton mt={2} color='blue.500' />
                            <DrawerHeader
                                borderBottomWidth='2px'
                                borderColor='blue.500'
                            >
                                    Portfólio
                            </DrawerHeader>
                            <DrawerBody>
                                <Menu/>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>

                </Drawer>
            
            </>
        )
    }
return <Menu/>

}

