import React from 'react';
import { useFormik, FormikProvider, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
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

const handleDateFormate = (date, setFieldValue, fieldName) => {
    const finalDate = date ? format(date[0], 'yyyy-MM-dd') : "";
    setFieldValue(fieldName, finalDate);
};

const initialValues = {
    jobType: '',
    jobAdvertisement: '',
    memoNo: '',
    jobAdId: '',
    importantLinks: '',
    publishDateTime: '',
    additionalInfo: ''
};

const validationSchema = Yup.object({
    jobType: Yup.string().required('Required'),
    jobAdvertisement: Yup.string().required('Required'),
    memoNo: Yup.string().required('Required'),
    jobAdId: Yup.string().required('Required'),
    importantLinks: Yup.string().required('Required'),
    publishDateTime: Yup.string().required('Required').nullable(),
    additionalInfo: Yup.string().required('Required')
});

const Context = () => {
    const { setFieldValue, values, handleSubmit } = useFormikContext();
    return (
        <Form onSubmit={handleSubmit}>
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
                            onChange={(date) => handleDateFormate(date, setFieldValue, 'publishDateTime')}
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

            <button
                className='mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                type='submit'>
                Submit
            </button>
        </Form>
    );
};

const Advertisement = () => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { setSubmitting }) => {
            console.log('Form data', values);
            setSubmitting(false);
        }
    });

    return (
        <div>
            <h2 className='text-center text-2xl mb-5 text-green-400'>Job Advertisement Form</h2>
            <FormikProvider value={formik}>
                <Context />
            </FormikProvider>
        </div>
    );
};

export default Advertisement;