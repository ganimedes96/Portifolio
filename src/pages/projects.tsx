import {Box,Flex,useDisclosure, Grid,Text } from "@chakra-ui/react";
import {v4} from 'uuid'
import {GetStaticProps } from 'next'
import {CardsProjects} from '../components/CardsProjects'
import {api} from "../service/api";
import {useState } from "react";
import {ModalProject} from '../components/ProjectModal'
import Head from "next/head";

import { motion } from "framer-motion";

const repositories= {
    myProjects: [
        'dtmoney',
        'Ecoleta',
        'Web-App-Happy',
        'Doom-Fire-Effect',
        'RocketQ',
        'TYPING',
        'Great-Code',
        'Dashgo',
        'Ig_news',
        'PH-Store',
        'PizzaFast',
        'nlw-impulse-web'

    ]
}


type Tech = {
    name: string, 
    url: string
}

interface Project {
    id: string
    name: string 
    short_description: string
    description: string
    images: string[]
    videos:string[]
    techs: Tech[]
    link_preview?: string
    link_repo: string
}

interface projectsProps{
    projects: {
        myProjects:Project[]
    }
}


export default function Projects ({projects}: projectsProps){
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [projectSelected, setProjectSelected] = useState<Project>()
  
   

    function handleOpenModal(projects: Project) {
      setProjectSelected(projects)
      onOpen()
    }


   
   
    return(
        <>
        <Head>
            <title>Portfólio | Projetos</title>
        </Head>
        <Flex 
        as='main'
        flex='1'
        mb='10rem'
        justify='center' 

        >
            <Flex 
             maxW='1200px'
             w='100%'
             px='10'
             direction='column'
             align='center'
            >
             <Box
                 mt='10'
 
                >
                    <Text 
                     as='h2'
                     textAlign='center'
                     fontSize='32px'
                     my='5rem'
                     color='gray.300'
                     >Projetos</Text>
                    <Grid
                     mt='30px'
                     templateColumns={{ 
                         md: 'repeat(auto-fit, minmax(300px, 1fr))',
                         lg: 'repeat(3,1fr)'
                     }}
                     gap='5'
                    >
                      {projects.myProjects?.map((project,i) =>(
                          <motion.div 
                            key={project.id}
                            initial={{
                                    opacity:0, 
                                    translateX:i % 2 === 0 ? 50 : -50, 
                                    translateY:50}}
                            animate={{opacity:1, translateX:0, translateY:0}}
                            transition={{duration:0.3, delay: i*0.2}}
                          >
                              <CardsProjects 
                              
                              handleOpenModal={() => handleOpenModal(project)} 
                              project={project}
                              />
                          </motion.div>
                      ))}  
 
                    </Grid>
 
                </Box>
                <ModalProject 
                     isOpen={isOpen}
                     onClose={onClose}
                     project={projectSelected!}
                />
            </Flex>
 
        </Flex>
        
        </>
       
    )
}

export const getStaticProps: GetStaticProps<projectsProps> = async () =>{

    const repo_projects: Project[] = [] 

    for await(const repository of repositories.myProjects ){
        let projectInfo

        try {
            const response = await api.get(
                `https://raw.githubusercontent.com/ganimedes96/${repository}/main/project-description.json`
            )
          
            projectInfo = response.data
            console.log(projectInfo)
            repo_projects.push({
                id: v4(),
                name: projectInfo.name,
                short_description: projectInfo.short_description,
                description: projectInfo.description,
                images: projectInfo.images || [],
                videos: projectInfo.videos || [],
                techs: projectInfo.techs || [],
                link_preview: projectInfo.link_preview || null,
                link_repo:`https://github.com/ganimedes96/${repository}`,
                
                
            })
             
        }catch{}
    }
    return{
        props:{
            projects:{
                myProjects: repo_projects
            },
        },
        revalidate: false,
    }
}