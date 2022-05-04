import {extendTheme} from '@chakra-ui/react'

const  colors ={

    blue:{
        900:'#03041a',
        800:'#141E61',
        400:'#2FA4FF'
        

    },
    gray:{
        700:'#787A91',
        100:'#eeeeee'
    }

}

const fonts ={
    body: 'Poppins'
}
const styles = {
    global: {
        body: {
            bg:'blue.900',
            color:'gray.100'
        }
    }
}


export const theme = extendTheme({colors, fonts,styles})