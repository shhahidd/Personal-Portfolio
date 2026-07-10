import {
  Hero as BarrelrollaHero,
  Button,
  HeroActions,
  HeroSection,
} from "@barrelrolla/react-components-library";
import { Link } from "react-router";
import { MotionHeroSection, MotionHeroTitle } from "../motion/motion";
import { motion } from "motion/react";
import { heroContent } from "../../data/content";

export default function Hero() {
  return (
    <BarrelrollaHero
      wrapperClasses="overflow-visible"
      className="height-hero -mt-14 gap-6 font-serif"
      textAlign="responsive"
    >
      <HeroSection className="relative flex-1/2 items-center overflow-x-visible md:order-last">
        <MotionHeroTitle
          initial={{ opacity: 0, translateY: -200 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-1 text-center text-5xl font-medium sm:text-6xl xl:text-8xl"
        >
          {heroContent.titlePart1}
          <br />
          {heroContent.titlePart2}
        </MotionHeroTitle>
        <motion.h2
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-1 font-semibold sm:text-2xl xl:text-4xl"
        >
          {heroContent.subtitle}
        </motion.h2>
      </HeroSection>
      <MotionHeroSection
        className="flex-1/2 font-sans max-md:justify-start"
        initial={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-pretty">
          {heroContent.description}
        </p>
        <HeroActions className="justify-around gap-2">
          <Button as={Link} to="/projects" className="w-[145px]">
            {heroContent.projectsBtn}
          </Button>
          <Button as={Link} to="/contacts" className="w-[145px]">
            {heroContent.contactsBtn}
          </Button>
        </HeroActions>
      </MotionHeroSection>
    </BarrelrollaHero>
  );
}
