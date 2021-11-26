import React, { useEffect, useState } from 'react';

import { FileView } from 'eco-image-picker';
import type { FileItem } from 'eco-image-picker';

import iconEmpty from '../../assets/icon/iconEmpty.png';
import filePdf from '../../assets/file/1.pdf';
import fileWord from '../../assets/file/1.docx';
import fileAudio from '../../assets/file/1.mp3';
import fileVideo from '../../assets/file/1.mp4';
import fileExcel from '../../assets/file/1.xlsx';

export default () => {
  const [value, setValue] = useState<FileItem[]>([]);

  useEffect(() => {
    setValue([
      {
        url: '',
        loading: true,
        fileName: 'a.png',
      },
      {
        url: '',
        loading: true,
        fileName: 'b.png',
      },
      {
        url: '',
        loading: true,
        fileName: 'c.png',
      },
      {
        url: '',
        loading: true,
        fileName: 'c.png',
      },
      {
        url: '',
        loading: true,
        fileName: 'c.png',
      },
      {
        url: '',
        loading: true,
        fileName: 'c.png',
      },
    ]);
    setTimeout(async () => {
      const blobPdf = await fetch(filePdf).then((r) => r.blob());
      const blobDocx = await fetch(fileWord).then((r) => r.blob());
      const blobAudio = await fetch(fileAudio).then((r) => r.blob());
      const blobVideo = await fetch(fileVideo).then((r) => r.blob());
      const blobExcel = await fetch(fileExcel).then((r) => r.blob());
      const endPdf = new File([blobPdf], '1.pdf', { type: blobPdf.type });
      const endDocx = new File([blobDocx], '1.docx', { type: blobPdf.type });
      const endAudio = new File([blobAudio], '1.mp3', { type: blobPdf.type });
      const endVideo = new File([blobVideo], '1.mp4', { type: blobPdf.type });
      const endExcel = new File([blobExcel], '1.xlsx', { type: blobPdf.type });
      setValue([
        {
          url: iconEmpty,
          loading: false,
          fileName: 'a.png',
        },
        {
          url: iconEmpty,
          loading: false,
          fileName: '1.pdf',
          file: endPdf,
        },
        {
          url: iconEmpty,
          loading: false,
          fileName: '1.docx',
          file: endDocx,
        },
        {
          url: iconEmpty,
          loading: false,
          fileName: '1.mp3',
          file: endAudio,
        },
        {
          url: iconEmpty,
          loading: false,
          fileName: '1.mp4',
          file: endVideo,
        },
        {
          url: iconEmpty,
          loading: false,
          fileName: '1.xlsx',
          file: endExcel,
        },
      ]);
    }, 2500);
  }, []);

  return <FileView value={value} />;
};
