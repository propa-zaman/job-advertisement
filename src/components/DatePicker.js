import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css'; // Import Flatpickr styles
import 'flatpickr/dist/l10n/default.js'; // Import default localization for Flatpickr
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const DatePicker = (props) => {
    const { label, name, options, ...rest } = props;
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name='publishDateTime'>
                {({ field, form }) => (
                    <Flatpickr
                        id='publishDateTime'
                        name='publishDateTime'
                        options={{
                            enableTime: true,
                            dateFormat: 'd-m-Y H:i',
                        }}
                        value={form.values.publishDateTime}
                        onChange={date => form.setFieldValue('publishDateTime', date[0])}
                        className='form-input'
                    />
                )}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default DatePicker;
