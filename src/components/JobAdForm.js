import React from 'react';
import { useFormikContext, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';
import QuillEditor from './QuillEditor';
import { format } from 'date-fns';

const jobTypes = [
    { key: 'Select Job Type', value: '' },
    { key: 'Cadre', value: 'cadre' },
    { key: 'Non cadre', value: 'non-cadre' }
];


const JobAdForm = () => {
    const { setFieldValue, values } = useFormikContext();

    const handleDateChange = (date) => {
        const finalDate = date ? format(date[0], 'yyyy-MM-dd') : "";
        setFieldValue('publishDateTime', finalDate);
    };
    return (
        <>
            <div>
                <label htmlFor='jobType'>Select Job Type</label>
                <Field as='select' name='jobType'>
                    {jobTypes.map(option => (
                        <option key={option.value} value={option.value}>{option.key}</option>
                    ))}
                </Field>
                <ErrorMessage name='jobType' component={TextError} />
            </div>

            <div>
                <label htmlFor='jobAdvertisement'>Job Advertisement</label>
                <Field type='text' name='jobAdvertisement' />
                <ErrorMessage name='jobAdvertisement' component={TextError} />
            </div>

            <div>
                <label htmlFor='memoNo'>Memo No</label>
                <Field type='text' name='memoNo' />
                <ErrorMessage name='memoNo' component={TextError} />
            </div>

            <div>
                <label htmlFor='jobAdId'>Job Advertisement Id</label>
                <Field type='text' name='jobAdId' />
                <ErrorMessage name='jobAdId' component={TextError} />
            </div>

            <div>
                <label htmlFor='importantLinks'>Important Links</label>
                <Field type='text' name='importantLinks' />
                <ErrorMessage name='importantLinks' component={TextError} />
            </div>

            <div>
                <label htmlFor='publishDateTime'>Publish Date and Time</label>
                <Field name='publishDateTime'>
                    {() => (
                        <Flatpickr
                            id='publishDateTime'
                            name='publishDateTime'
                            options={{ enableTime: false, dateFormat: 'Y-m-d' }}
                            value={values.publishDateTime}
                            onChange={(date) => handleDateChange(date, setFieldValue, 'publishDateTime')}
                            className='form-input'
                        />
                    )}
                </Field>
                <ErrorMessage name='publishDateTime' component={TextError} />
            </div>

            <div>
                <label htmlFor='additionalInfo'>Additional Information</label>
                <Field name='additionalInfo' component={QuillEditor} />
                <ErrorMessage name='additionalInfo' component={TextError} />
            </div>
        </>
    );
};

export default JobAdForm;