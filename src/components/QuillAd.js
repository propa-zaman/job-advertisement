import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextError from './TextError';

const QuillAd = (props) => {
    const { label, name, ...rest } = props;
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {({ field, form }) => {
                    const { setFieldValue } = form;
                    const { value } = field;
                    return (
                        <ReactQuill
                            {...field}
                            {...rest}
                            onChange={(val) => setFieldValue(name, val)}
                            value={value}
                        />
                    );
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default QuillAd;