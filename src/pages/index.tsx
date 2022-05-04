import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Connections } from "../components/Connections";


export default function Home(){
  return(
    <>
      <Head>
            <title>Portfólio | Home</title>
        </Head>
      <Flex as='main' flex='1' justify='center'>
        <Flex maxW='1200px' w='100%' direction='column' px='10'>

          <Connections/>
        </Flex>
        </Flex>    
    </>
  )
}