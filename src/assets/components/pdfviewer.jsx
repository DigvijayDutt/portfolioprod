import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function PDFViewer({ fileN, maxWidth = 800, maxHeight = 600 }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(maxWidth);
  const containerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  useEffect(() => {
    function updateWidth() {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      setPageWidth(Math.min(w, maxWidth));
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [maxWidth]);

  function nextPage() {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  }

  function prevPage() {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  }

  return (
    <div
      ref={containerRef}
      style={{
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center"
      }}
    >
      <Document file={fileN} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          width={pageWidth} // controls width; height scales proportionally
          canvasProps={{ style: { width: "100%", height: "auto", maxHeight } }}
        />
      </Document>

      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
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
