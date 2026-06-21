import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import ResumePDF from "@/components/ResumePDF";

export default function ResumeDownloadButton() {
  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName="Emmanuel_Johnson_Resume.pdf"
      className="group relative md:absolute md:top-0 md:right-0 z-20 print:hidden mb-6 md:mb-0 w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 md:py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 animate-pulse-glow"
    >
      {({ loading }) =>
        loading ? "Generating PDF..." : "Download Resume"
      }
    </PDFDownloadLink>
  );
}