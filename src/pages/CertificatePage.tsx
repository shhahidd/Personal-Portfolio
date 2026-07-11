import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "@barrelrolla/react-components-library";
import BasePage from "../components/Page/BasePage";
import { getBioData } from "../util/dataHelper";
import { BioDataType, personalInfo } from "../data/content";
import NotFoundContent from "../components/Page/NotFoundContent";

export default function CertificatePage() {
  const { id } = useParams();
  const [data, setData] = useState<BioDataType | undefined>(undefined);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const found =
      getBioData(id || "", "experience") ||
      getBioData(id || "", "education") ||
      getBioData(id || "", "projects");

    if (found && found.certificate) {
      document.title = `${personalInfo.fullName} | ${found.title} Certificate`;
      setData(found);
    } else {
      document.title = `${personalInfo.fullName} | Certificate Not Found`;
      setNotFound(true);
    }
  }, [id]);

  if (notFound) {
    return (
      <BasePage>
        <NotFoundContent title="Certificate" />
      </BasePage>
    );
  }

  if (!data) return null;

  return (
    <BasePage>
      <motion.section
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-10"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">
              Thiranex - Internship Certificate
            </h1>
            <p className="text-sm opacity-60 mt-1">
              {data.specialty ?? "Internship Certificate"}
            </p>
          </div>
          <Button
            as={Link}
            to={`/experience/${data.id}`}
          >
            ← Back
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mx-auto w-full max-w-4xl"
        >
          <img
            src={data.certificate}
            alt={`${data.title} Certificate`}
            className="w-full rounded-2xl border border-white/10 shadow-2xl"
            draggable={false}
          />
        </motion.div>
      </motion.section>
    </BasePage>
  );
}
