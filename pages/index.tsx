import { NextPage } from 'next';
import { HomeLayout } from '../components/layout';
import { Navbar } from '../components/navbar';

const Home: NextPage = () => {
  return (
    <HomeLayout title="Jira">
      <Navbar />
    </HomeLayout>
  )
};

export default Home;