import CompanyHero from '../components/home/CompanyHero';
import WhoAreWe from '../components/home/WhoAreWe';
import DynamicCarousel from '../components/home/DynamicCarousel';
import HomeCTA from '../components/home/HomeCTA';

export default function HomePage() {
  return (
    <>
      <CompanyHero />
      <WhoAreWe />
      <DynamicCarousel />
      <HomeCTA />
    </>
  );
}
