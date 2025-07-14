import { Document, Page } from 'react-pdf';
import { useContainerWidth } from '../hooks/useContainerWidth';
export const DocumentPreviewWrapper = ({ pdfBlobUrl }) => {
  const [containerRef, containerWidth] = useContainerWidth();
  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        border: '1px solid #ccc',
        marginInline: 'auto',
      }}
    >
      {pdfBlobUrl && (
        <Document
          file={pdfBlobUrl}
          loading={<div>Loading preview…</div>}
          error={<div>Failed to load PDF</div>}
        >
          <Page
            pageNumber={1}
            width={containerWidth || 400}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      )}
    </div>
  );
};
