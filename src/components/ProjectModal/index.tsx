import {
    Badge,
    Flex,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
  } from '@chakra-ui/react'

  import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/react'
 


  type Tech = {
    name: string
    url: string
  }
  
  type Project = {
    id: string
    name: string
    short_description: string
    description: string
    images: string[]
    videos: string[]
    techs: Tech[]
    link_preview?: string
    link_repo: string
  }
  
  interface Props {
    project: Project
    isOpen: boolean
    onClose: () => void
  }

  export const ModalProject = ({project, isOpen, onClose}:Props) =>{


    const images = project?.images || []
    const videos = project?.videos || []
   

    const closeModal = () =>{
        
        onClose()
    }

    return(
        <Modal isOpen={isOpen} onClose={closeModal}>

            <ModalOverlay>
                <ModalContent bg='blue.900' w='90%' maxW='900px' p='30px'>
                    <ModalHeader>{project?.name}</ModalHeader>
                    <ModalCloseButton top='30px' right='30px'/>
                    <ModalBody>
                        <Flex
                           id="modal-content"
                        >
                            {images.length > 0 || videos.length > 0 ?(
                                <Swiper
                        
                                    modules={[Navigation, Pagination, Autoplay, A11y]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    slidesPerView={1}
                                >
                                  {images?.map(image =>(
                                      <SwiperSlide key={image}>
                                            <Image
                                                height='550px'
                                                width='100%'
                                                objectFit='contain'
                                                src={image}
                                                alt={project.name}
                                            />
                                      </SwiperSlide>

                                  ))}      
                                  {videos?.map(video =>(
                                      <SwiperSlide key={video}>
                                          <video
                                            autoPlay
                                            controls={false}
                                            loop
                                            style={{
                                                objectFit:'contain',
                                                width:'100%',
                                                height:'100%'
                                            }}
                                          >
                                              <source src={video} type='video/mp4' />
                                              <source src='movie.ogg' type='video/ogg'/>

                                          </video>
                                      </SwiperSlide>
                                  ))}
                                   
                                  
                                </Swiper>
                            ):(
                                <Image
                                w="100%"
                                h="100%"
                                maxH="350px"
                                src=""
                                alt={project?.name}
                              />
                            )}
                          </Flex>
                          {project?.techs.length > 0 && (
                            <Stack
                              mt="5"
                              flexWrap="wrap"
                              rowGap="2"
                              justify="center"
                              direction="row"
                            >
                              {project?.techs.map(tech => (
                                <Badge
                                  as="a"
                                  target="_blank"
                                  variant="solid"
                                  colorScheme="purple"
                                  fontSize="md"
                                  href={tech.url}
                                  key={tech.name}
                                  fontWeight='500'
                                >
                                  {tech.name}
                                </Badge>
                              ))}
                            </Stack>
                          )}
                          <Flex mt="10" w="100%" align="center" justify="space-between">
                            
                            <Stack direction="row">
                              <Badge
                                as="a"
                                color="blue.400"
                                target="_blank"
                                variant="outline"
                                fontSize="16px"
                                borderRadius="5px"
                                border="2px solid"
                                href={project?.link_repo}
                              >
                                Repositório
                              </Badge>
                
                              {project?.link_preview && (
                                <Badge
                                  as="a"
                                  target="_blank"
                                  variant="outline"
                                  color="purple.400"
                                  border='2px solid'
                                  borderRadius='5px'
                                  fontSize='16px'
                                  href={project.link_preview}
                                >
                                  Preview
                                </Badge>
                              )}
                            </Stack>
                          </Flex>
                          <Text mt="5">{project?.description}</Text>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>

        </Modal>
    )

  }
