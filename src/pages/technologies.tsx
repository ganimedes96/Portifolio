import { Box, Flex, Grid, GridItem, Heading, Tooltip, Image } from "@chakra-ui/react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function technologies (){
    
    const technologies = [
        {
            name: 'JavaScript',
            image:'/image/js.png'
        },
        {
            name:'CSS 3',
            image:'/image/css-3.png'
        },
        {
            name:'HTML 5',
            image:'/image/html-5.png'
        },
        {
            name:'Git',
            image:'/image/git.svg'
        },
        {
            name:'Jest',
            image:'/image/jest.png'
        },
        {
            name:'mysql',
            image:'/image/mysql.png'
        },
        {
            name:'NextJs',
            image:'/image/next-js.svg'
        },
        {
            name:'Node.js',
            image:'/image/node.svg'
        },
        {
            name:'React',
            image:'/image/react.png'
        },
        {
            name:'SASS',
            image:'/image/sass.png'
        },
        {
            name:'TypeScript',
            image:'/image/typescript.svg'
        },
        {
            name:'Chakra-ui',
            image:'/image/chakra-ui.svg'
        },
        {
            name:'Graphql',
            image:'/image/graphql.png'
        },
        {
            name:'Mongodb',
            image:'/image/mongodb.png'
        }


    ]

    
    return(
        
        <>
        <Head>
            <title>Portfólio | Tecnologias</title>
        </Head>
        <Box 
            as='main'
            display='flex'
            flex='1'
            justifyContent='center'
            px='2rem'
            >
                <Flex maxW='1140px' w='100%' align='center' direction='column' >
                    <Heading
                        fontSize='30px'
                        fontWeight='500'
                        mt='4rem'
                        color='gray.300'
                    >
                        Tecnologias
                    </Heading>

                    <Grid
                        mt='5rem'
                        w='100%'
                        justifyContent='center'
                        templateColumns='repeat(auto-fit, minmax(150px, 1fr))'

                    >
                        {technologies.map((tech,i) =>(
                            <motion.div 
                            
                            initial={{
                                    opacity:0, 
                                    translateX:i % 2 === 0 ? 50 : -50, 
                                    translateY:50}}
                            animate={{opacity:1, translateX:0, translateY:0}}
                            transition={{duration:0.3, delay: i*0.1}}
                            key={tech.name}>
                                <Flex align='center' justify='center' boxSize='150px'>
                                    <Tooltip
                                        hasArrow
                                        label={tech.name}
                                        bg='blue.800'
                                        color='white'
                                    >
                                        <Image src={tech.image} alt={tech.name} height='80px' width='80px' />
                                        
                                    </Tooltip>
                                </Flex>

                            </motion.div>
                        ))}

                    </Grid>

                </Flex>
        
        </Box>
        </>
    )
}