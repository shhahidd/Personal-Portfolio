import {
  Card,
  HeroSection,
  HeroTitle,
  NavbarCollapse,
} from "@barrelrolla/react-components-library";
import { motion } from "motion/react";

export const MotionHeroTitle = motion.create(HeroTitle);
export const MotionHeroSection = motion.create(HeroSection);
export const MotionCollapse = motion.create(NavbarCollapse);
export const MotionCard = motion.create(Card);
