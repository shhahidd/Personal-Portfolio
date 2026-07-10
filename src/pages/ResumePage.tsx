import BasePage from "../components/Page/BasePage";
import { motion } from "motion/react";
import { Button } from "@barrelrolla/react-components-library";
import { resumeContent, personalInfo } from "../data/content";

export default function ResumePage() {
  document.title = `${personalInfo.fullName} | Resume`;

  return (
    <BasePage>
      <motion.section
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-10"
      >
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">{resumeContent.title}</h1>
            <p className="text-sm opacity-60 mt-1">
              {resumeContent.subtitle}
            </p>
          </div>
          <Button
            as={"a"}
            href={resumeContent.downloadUrl}
            download={`${personalInfo.fullName.replace(/\s+/g, "")}_Resume.pdf`}
          >
            {resumeContent.downloadCta}
          </Button>
        </div>

        {/* Embedded PDF via Google Drive preview — no download dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          style={{ height: "85vh" }}
        >
          <iframe
            src={resumeContent.embedUrl}
            title={`${personalInfo.fullName} Resume`}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allow="autoplay"
          />
        </motion.div>
      </motion.section>
    </BasePage>
  );
}
