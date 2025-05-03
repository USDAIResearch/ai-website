'use client'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichTextEditorComponent() {
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
export default RichTextEditorComponent