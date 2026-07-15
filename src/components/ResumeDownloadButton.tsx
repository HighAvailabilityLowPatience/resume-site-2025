import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import ResumePDF from "@/components/ResumePDF";

export default function ResumeDownloadButton() {
  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName="Emmanuel_Johnson_Resume.pdf"
      className="btn btn-primary print:hidden"
    >
      {({ loading }) =>
        loading ? "Generating PDF..." : <><Download className="h-4 w-4" />Download Resume</>
      }
    </PDFDownloadLink>
  );
}
