import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub, 
  IoLogoLinkedin, IoLogoWhatsapp, IoLogoGoogle } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>  
      <Box display={{ md: 'flex' }}>
        <Box textAlign="center" flexGrow={1}>
          <Heading as="h2" variant="page-title">
          Jorge Del Castillo
          </Heading>
          <p>( Engineer / Entrepeneur &amp; Business driven/ Product &amp; Project manager / Developer )</p>
        </Box>
        
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          ><div id="aboutme">
            <ProfileImage
              background={useColorModeValue('whiteAlpha.200', 'whiteAlpha.500')}
              src="/images/Jorge_cv_modified.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            /></div>
          </Box>
        </Box>
      </Box>
      <Box align="center">
      <Link href="mailto:jorgedcastillogarcia@gmail.com" target="_blank">
      <Button rightIcon={<EmailIcon />} colorScheme="teal"> Contact me </Button>
      </Link>
      </Box>
      <Section  delay={0.1}>
        <Heading  as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>Nonconformist and energetic. I am passionate about the STARTUP
        ecosystem and businesses with a high technological base. Very interested in Growth and scaling businesses ??????
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Working Experience
        </Heading>
        <BioSection>
        <BioYear>September - 2022 - Currently (Spain)</BioYear>
        <br/><b>[Partner and business developer leader (Solarchain)]</b>
        <br/>Scaling and growing strategies for the solar panels industry, optimizing strategies and opportunities.
        </BioSection>
        <BioSection>
        <BioYear>Feb2021 - July 2022 (Spain)</BioYear>
        <br/><b>[CTO, COO and Cofounder(Medifresco)]</b>
        <br/>Startup e-commerce of Meal Kits based in Mallorca. Meal kit service supported with a physical store. +70k??? revenue in 1 Year. In charge of building the platform and digital structure detecting dropoffs and all posible CRO improvement strategies (Digital and Operational)
        </BioSection>
        <BioSection>
        <BioYear>Sept 2019 - March 2021 (Germany)</BioYear>
        <br/><b>[Project Management (Umlaut Strategy Consulting for AIRBUS)]</b>
        <br/>Leading and optimizing change processes of airplanes (4M??? Budget) applying project management methodologies. Alignment between different parties (customer and supplier) and product iterations. Detecting automation and digitalization opportunities.Supported and documented a new manufacturing line and aligned requirements between AIRBUS and Supplier
        </BioSection>
        <BioSection>
        <BioYear>Sept 2017 - Sept 2019 (Germany)</BioYear>
        <br/><b>Project Management (VIE program for AIRBUS)</b>
        <br/>Supported directly the Head of the department and subteams and led the digitalization of the department, ensuring traversal participation between all involved parties. Automated and digitalized opportunities applying project management skills (+500k??? managed), iterating MVP until final version. In parallel, I managed risks and possible opportunities (low risk-high opportunity)
        </BioSection>
        <BioSection>
          <BioYear>Jul 2016 - Jul 2017 (Spain)</BioYear>
          <br/><b>AIRBUS trainee (Global supply chain Factory)</b>
          <br/>Official point of contact between supplier and production
          Advanced control of raw material needs
          Exhaustive control of supply needs within the production site
          Stock controlling
          Improvement and development of new tools linked to SAP
        </BioSection>
        <Box align="center" my={4}>
          <Link target="_blank" href="https://firebasestorage.googleapis.com/v0/b/jdel54-portfolio.appspot.com/o/CV%20Jorge%20English%20.pdf?alt=media&token=5309f45d-6a4d-455f-be4e-237223e8b90e" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Resum??
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
        <BioYear>August 2018 - February 2021</BioYear>
        <br/><b>MIT University (online)</b>
        <br/>MicroMasters in supply chain Management with focusing on the whole process
        </BioSection>
        <BioSection>
        <BioYear>August 2016 - August 2017</BioYear>
        <br/><b>Universidad de Alcal?? de Henares (Spain)</b>
        <br/>Master with focus in: Development in companies, strategy, efficiency,communication, economics international business law, and finance
        </BioSection>
        <BioSection>
        <BioYear>Feb 2015 - August 2015</BioYear>
        <br/><b>University of M??nster (Germany)</b>
        <br/>Granted scholarship in an exchange program to complete my final bachelor thesis
        </BioSection>
        <BioSection>
        <BioYear>Sept 2010 - Sept 2015</BioYear>
        <br/><b>Universidad de C??rdoba (Spain)</b>
        <br/>Degree in Mechanical Engineering offering mixed and comprehensive training in the engineering field
        </BioSection>
        <BioSection>
          <BioYear>Sept 2007 - Sept 2009</BioYear>
          <br/><b>British School of Cordoba (Spain)</b> 
          <br/>British (A-level, IGCSE) and Spanish education - Double high school diploma.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me here:
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jdel54" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @jdel54
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/jdelcastillox" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @jdelcastillox
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/jdelcastillog/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @jdelcastillog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:jorgedcastillogarcia@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle/>}
              >
                Email me
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://wa.me/+34666276376" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWhatsapp />}
              >
                Write me
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
