import React from 'react';
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import JobAdForm from './JobAdFrom';


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
                <JobAdForm />
            </FormikProvider>
        </div>
    );
};

export default JobAdContext;