import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import musicSearch_r from '../public/images/works/musicSearch_r.png'
import Medifresco_r from '../public/images/works/Medifresco_r.png'
import auth_r from '../public/images/works/auth_r.png'
import tweetbeer_r from '../public/images/works/tweetbeer_r.png'
import codex_r from '../public/images/works/codex_r.png'
import web3rsvp_r from '../public/images/works/web3rsvp_r.png'
import vacat_r from '../public/images/works/vacat_r.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
          href="https://music-searcher.vercel.app/"
          id="Music Searcher" title="Music Searcher Itunes" thumbnail={musicSearch_r}>
            A Music searcher connected to Itunes API to retrieve music and listen a short piece.
            Tech: Nextjs, node
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem 
          href=""
          id="Medifresco" title="Medifresco" thumbnail={Medifresco_r}>
            First founded Startup - foodtech (Meal kit company). +70k€ in revenue during one year.
            Tech: Shopify, analytics and plugins
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            href="https://authentication-sigma.vercel.app/"
            id="Authentication"
            title="Authentication "
            thumbnail={auth_r}
          >
            Authentication using Nextjs and mongodb as a database with encrypted passwords
            Tech: Nextjs, node, mongodb, nextAuth
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            href= "https://tweetbeer.vercel.app/"
            id="Tweetbeer"
            title="Tweetbeer"
            thumbnail={tweetbeer_r}
          >
            Social platform where people can share their thougths while drinking a beer.
            <br/>Tech: Nextjs, node, firebase auth, firebase db
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
          href="https://codex.signalcorps.io/"
          id="NFT drop" thumbnail={codex_r} title="NFT drop Signalcorps">
            
            NFT drop for Signalcorps for a brand where they wanted to launch their token.
            Tech: Nextjs, thirdweb, web3 hooks
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
          href="https://rsvp.vercel.app/"
          id="web3 rsvp" thumbnail={web3rsvp_r} title="Web3 rsvp events">
            Web3rsvp where users can vip to an event in web3 to events.
            <br/>Tech: Nextjs, GraphQl, Rainbowkit, solidity, tailwindcss
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
          href="https://vacational-homes.vercel.app/"
          id="Vacational homes" thumbnail={vacat_r} title="Clone vacational homes">
            Clone of a famous vacational home
            <br/>Tech: Nextjs, tailwindcss
          </WorkGridItem>
        </Section>
      </SimpleGrid>

       
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
