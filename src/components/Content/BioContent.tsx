import { motion, Variants } from "motion/react";
import BioCard from "../BioCard/BioCard";
import PageContent from "../Page/PageContent";
import { useHomePageContext } from "../../contexts.ts/HomaPageContext";
import { BioDataType } from "../../data/bio";

type BioContentProps = {
  bioData: BioDataType[];
  title?: string;
};

export default function BioContent({ bioData, title }: BioContentProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  const context = useHomePageContext();

  return (
    <PageContent title={title}>
      <motion.div
        variants={variants}
        initial={"hidden"}
        animate={"visible"}
        className="bio-container"
      >
        {bioData.map((data, index) => {
          if (context) {
            return (
              <BioCard
                key={data.id}
                bio={data}
                initial={"hidden"}
                whileInView={"visible"}
                category={data.category}
                index={index}
              />
            );
          }
          return (
            <BioCard
              key={data.id}
              bio={data}
              category={data.category}
              index={index}
            />
          );
        })}
      </motion.div>
    </PageContent>
  );
}
