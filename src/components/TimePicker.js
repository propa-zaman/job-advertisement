import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import 'flatpickr/dist/l10n/default.js';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const TimePicker = (props) => {
    const { label, name, options, ...rest } = props;
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {({ form, field }) => {
                    const { setFieldValue } = form;
                    const { value } = field;
                    return (
                        <Flatpickr
                            id={name}
                            {...field}
                            options={{
                                enableTime: true, // Enable time selection
                                noCalendar: true, // Hide the calendar
                                dateFormat: 'H:i', // Specify the time format as needed
                                ...options, // You can pass additional options here
                            }}
                            value={value}
                            onChange={(val) => setFieldValue(name, val[0])}
                        />
                    );
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default TimePicker;