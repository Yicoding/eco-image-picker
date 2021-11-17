import React, { useEffect, useRef } from 'react';
import { FileInfo } from '../types';

import mammoth from 'mammoth';

type DocxViewerProps = {
  fileInfo: FileInfo;
};

export const DocxViewer = (props: DocxViewerProps) => {
  const ref = useRef<any>();

  const { fileInfo } = props;

  useEffect(() => {
    const jsonFile = new XMLHttpRequest();
    jsonFile.open('GET', fileInfo.filePath as string, true);
    jsonFile.send();
    jsonFile.responseType = 'arraybuffer';
    jsonFile.onreadystatechange = () => {
      if (jsonFile.readyState === 4 && jsonFile.status === 200) {
        mammoth
          .convertToHtml(
            { arrayBuffer: jsonFile.response },
            { includeDefaultStyleMap: true },
          )
          .then((result: any) => {
            const docEl = document.createElement('div');
            docEl.innerHTML = result.value;
            ref.current.innerHTML = docEl.outerHTML;
          })
          .catch((err: any) => {
            console.log('alexei: something went wrong', err);
          });
      }
    };
  }, []);

  return <div ref={ref} />;
};
