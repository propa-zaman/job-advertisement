import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';
import QuillEditor from './QuillEditor';

const jobTypes = [
    { key: 'Select Job Type', value: '' },
    { key: 'Cadre', value: 'cadre' },
    { key: 'Non cadre', value: 'non-cadre' }
];

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


})

const onSubmit = values => {
    console.log('form data', values);
};

const Advertisement = () => {
    return (
        <div>
            <h2 className='text-center text-2xl mb-5 text-green-400'>Job Advertisement Form</h2>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => (
                        <Form>
                            <label htmlFor='jobType'>Select Job Type</label>
                            <Field as='select' name='jobType'>
                                {jobTypes.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.key}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name='jobType' component={TextError} ></ErrorMessage>

                            <label htmlFor='jobAdvertisement'>Job Advertisement</label>
                            <Field type='text' name='jobAdvertisement' />
                            <ErrorMessage name='jobAdvertisement' component={TextError} ></ErrorMessage>

                            <label htmlFor='memoNo'>Memo No</label>
                            <Field type='text' name='memoNo' />
                            <ErrorMessage name='memoNo' component={TextError} ></ErrorMessage>

                            <label htmlFor='jobAdId'>Job Advertisement Id</label>
                            <Field type='text' name='jobAdId' />
                            <ErrorMessage name='jobAdId' component={TextError} ></ErrorMessage>

                            <label htmlFor='importantLinks'>Important Links</label>
                            <Field type='text' name='importantLinks' />
                            <ErrorMessage name='importantLinks' component={TextError} ></ErrorMessage>

                            <label htmlFor='publishDateTime'>Publish Date and Time</label>
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
                            <ErrorMessage name='publishDateTime' component={TextError} ></ErrorMessage>

                            <label htmlFor='additionalInfo'>Additional Information</label>
                            <Field name='additionalInfo' component={QuillEditor} />
                            <ErrorMessage name='additionalInfo' component={TextError} ></ErrorMessage>

                            <button
                                className='w-[120px] h-[20px] flex items-center justify-center p-3 bg-green-500 hover:bg-green-800 text-white mt-4'
                                type='submit'>
                                Submit
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};

export default Advertisement;