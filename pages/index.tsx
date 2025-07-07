import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Box} from '../components/styles/box';
import {Features1} from '../components/features1';
import {Features2} from '../components/features2';
import {Testimonials} from '../components/tesminonials';
import {Plans} from '../components/plans';
import {Trial} from '../components/trial';
import {Footer} from '../components/footer';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
           <Hero />
           <Box id="solutions">
              <Features1 />
           </Box>
           <Box id="process">
              <Features2 />
           </Box>
           <Box id="cases">
              <Testimonials />
           </Box>
           <Box id="services">
              <Plans />
           </Box>
           <Box id="audit">
              <Trial />
           </Box>
           <Box id="contacts">
              <Footer />
           </Box>
         </Box>
      </Layout>
   );
};

export default Home;
