import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Project = {
  images: string[]
  name: string
  short_description: string
}

interface Props {
  project: Project
  handleOpenModal: (project: Project) => void
}

export const CardsProjects = ({project, handleOpenModal}:Props) => {
  
  
  return (
  
   
        <Box
          h='23rem'
          p="1rem"
          border="1px solid "
          borderColor="gray.500"
          borderRadius="5px"
          bg="gray.800"
          onClick={() => handleOpenModal(project)}
        >
          <Image 
            src={project?.images[0]}
            alt={project?.name}

            w="100%" 
            h="200px" 
            objectFit="cover" />
          <Text
            as="h3"
            my="1rem"
            fontSize="23px"
            fontWeight="500"
            color="gray.300"
          >
           {project?.name}
          </Text>
          <Text as="p" color="gray.300" fontSize="16px">
            {project?.short_description}
          </Text>
        </Box>
    
   
  );
};
