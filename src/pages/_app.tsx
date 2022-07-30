import { useState, useEffect } from "react";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Footer } from "../components/Footer";
import "swiper/css";
import "swiper/css/bundle";
import "../styles/swiper.scss";
import "../styles/cursor.scss";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });


  useEffect(() => {
    const mouseMove = (event: any) => {
      const { clientX, clientY } = event;
      setMousePosition({
        x: clientX,
        y: clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x -25,
      y: mousePosition.y -25,
    }
  }
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Flex minH="100vh" direction="column">
          <motion.div
            className="cursor"
            variants={variants}
            animate='default'
          ></motion.div>
          <Header />
          <Component {...pageProps} />

          <Footer />
        </Flex>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
