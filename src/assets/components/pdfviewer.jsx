import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function PDFViewer({fileN}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function nextPage() {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  }

  function prevPage() {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  }

  return (
    <div style={{ display:"flex", flexDirection:"column" , justifyContent:"center", alignItems:"center" }}>
      <Document file= {fileN} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div style={{ marginTop: "1rem" , marginBottom:"1rem"}}>
        <button onClick={prevPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <span style={{ margin: "0 1rem" }}>
          Page {pageNumber} of {numPages || "?"}
        </span>
        <button onClick={nextPage} disabled={pageNumber >= numPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PDFViewer;
