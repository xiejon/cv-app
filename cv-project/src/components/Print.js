import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import ComponentToPrint from './Preview';

const PrintPreview = (props) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
    return (
      <div className="print-preview">
        <ComponentToPrint ref={componentRef} info={props.info}/>
        <button className="print-btn" onClick={handlePrint}>Print this out!</button>
      </div>
    );
  };

  export default PrintPreview