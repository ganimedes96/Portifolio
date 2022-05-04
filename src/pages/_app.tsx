import { ChakraProvider, Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { theme } from '../styles/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'swiper/css'
import 'swiper/css/bundle'
import '../styles/swiper.scss'
import { Footer } from '../components/Footer'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  
  return(
    
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <Flex minH='100vh' direction='column'>

        <Header/>
        <Component {...pageProps} />
        
       <Footer/>
      </Flex>
      </QueryClientProvider>
    </ChakraProvider>
      
   
  )


}

export default MyApp
