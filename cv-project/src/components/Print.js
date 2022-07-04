import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import ComponentToPrint from './Preview';

const pageStyle = `
    @page {
      size: 800mm 500mm;
    }
  
    @media all {
      .pagebreak {
        display: none;
      }
    }
  
    @media print {
      .pagebreak {
        page-break-before: always;
      }
    }
  `;

const PrintPreview = (props) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
    return (
      <div className="print-preview">
        <ComponentToPrint ref={componentRef} info={props.info} pageStyle={pageStyle}/>
        <button onClick={handlePrint}>Print this out!</button>
      </div>
    );
  };

  export default PrintPreview