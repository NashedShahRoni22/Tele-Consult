"use client";
import Testimonials from "@/components/home/Testimonials";
import Hero from "@/components/home/Hero";
import Departments from "@/components/home/Departments";
import Features from "@/components/home/Features";
import Works from "@/components/home/Works";
import CTA from "@/components/home/CTA";
import Anatomy from "@/components/home/Anatomy";

const LandingPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      {/* <Anatomy /> */}
      <Departments fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <Features fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <Works fadeInUp={fadeInUp} staggerContainer={staggerContainer}/>
      <CTA fadeInUp={fadeInUp} staggerContainer={staggerContainer}/>
      <Testimonials />
    </div>
  );
};

export default LandingPage;
