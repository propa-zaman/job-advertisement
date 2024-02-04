import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import JobAdForm from './JobAdForm';


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

const JobAdContext = () => {
    return (
        <div>
            <h2 className='text-center text-2xl mb-5 text-green-400'>Job Advertisement Form</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log("Form Values", values);
                }}
            >
                {({ handleSubmit, errors, dirty, isValid }) => {

                    return (
                        <Form onSubmit={handleSubmit}>
                            <JobAdForm />
                            <button
                                className='mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                                type='submit'>
                                Submit
                            </button>
                        </Form>
                    )

                }}

            </Formik>
        </div>
    );
};

export default JobAdContext;