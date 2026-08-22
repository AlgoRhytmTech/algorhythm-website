import HomeHero from '@/sections/HomeHero';
import HomeProjects from '@/sections/HomeProjects';
import HomeAbout from '@/sections/HomeAbout';
import HomeContact from '@/sections/HomeContact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProjects />
      <HomeAbout />
      <HomeContact />
      <Footer variant="company" />
    </>
  );
}
