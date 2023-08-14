
import React, { useEffect } from 'react';

function UseDocumentTitle() {
  useEffect(() => {
    document.title = 'PNW Runs';
  }, []);
}


export default UseDocumentTitle;