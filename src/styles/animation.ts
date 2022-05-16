import { motion} from 'framer-motion'

import {Flex,FlexProps,Box,BoxProps, TextProps, Text}from'@chakra-ui/react'

export const flexContainer = {
    hidden:{ opacity:0, scale:1},
    visible:{ 
        opacity:1,
             scale:1, 
             transition:{
                 delayChildren: 0.5,
                 staggerChildren: 0.5
             }
            
            }
}


export const itemAnimation = {
    hidden:{y:-120, opacity:0},
    visible:{
        y:0,
        opacity:1, 
        transition:{
            delayChildren:0.6,
            staggerChildren: 0.5
        }
    }
}

export const animationReverseX = {
        hidden:{x:-200, opacity:0},
        visible:{
            x:0,
            opacity:1,
            transition:{
                delayChildren:2,
                staggerChildren: 1
            }
        }
}


export const animationX = {
    hidden:{x:200, opacity:0},
        visible:{
            x:0,
            opacity:1,
            transition:{
                delayChildren:2,
                staggerChildren: 1
            }
        }
}

export const AnimateCard = {
    initial:{opacity:0, translateX:-50, translateY:-50 },
    animate:{opacity:1, translateX:0, translateY:0},
    transition:{duration:0.3, delay: 0.3, delayChildren:2,
        staggerChildren: 1}
    
}

export const AnimationFlex = motion<FlexProps>(Flex)
export const AnimationBox = motion<BoxProps>(Box)
export const AnimationText = motion<TextProps>(Text)
