import { AboutUs } from "@/components/about-us";
import { ContactSection } from "@/components/contact";
import { HomepageNavigation } from "@/components/homepage-nav";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      {" "}
      {/* <NewSplashScreen /> */}
      <HomepageNavigation />
      <AboutUs />
      <Testimonials />
      <ContactSection />
    </>
  );
}
