import CompanyHero from '../components/home/CompanyHero';
import WhoAreWe from '../components/home/WhoAreWe';
import CompanyCarousel from '../components/home/CompanyCarousel';
import HomeCTA from '../components/home/HomeCTA';

export default function HomePage() {
  return (
    <>
      <CompanyHero />
      <WhoAreWe />
      <CompanyCarousel />
      <HomeCTA />
    </>
  );
}
