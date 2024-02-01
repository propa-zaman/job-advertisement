import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = ({ field, form }) => {
  const handleChange = (html) => {
    form.setFieldValue(field.name, html);
  };

  const handleBlur = () => {
    form.setFieldTouched(field.name, true);
  };

  return (
    <div onBlur={handleBlur}>
      <ReactQuill
        value={field.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default QuillEditor;
