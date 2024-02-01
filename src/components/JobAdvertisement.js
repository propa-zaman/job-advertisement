import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';

const jobTypes = [
    { key: 'Select Job Type', value: '' },
    { key: 'Cadre', value: 'cadre' },
    { key: 'Non cadre', value: 'non-cadre' }
]

const initialValues = {
    jobType: '',
    jobAdvertisement: '',
    memoNo: '',
    jobAdId: '',
    importantLinks: '',
    publishDateTime: '',
    additionalInfo: ''

}

const validationSchema = Yup.object({
    jobType: Yup.string().required('Required'),
    jobAdvertisement: Yup.string().required('Required'),
    memoNo: Yup.string().required('Required'),
    jobAdId: Yup.string().required('Required'),
    importantLinks: Yup.string().required('Required'),
    publishDateTime: Yup.date().required('Required').nullable(),
    additionalInfo: Yup.string().required('Required')

})

const onSubmit = (values, onSubmitProps) => {
    console.log('form data', values)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}
const JobAdvertisement = () => {
    return (
        <div className='mt-14'>
            <h2 className='text-center text-2xl mb-5 text-blue-400'>Job Advertisement Form</h2>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                {
                    formik => {
                        return <Form>
                            <FormikControl
                                control='select'
                                label='Select Job Type'
                                name='jobType'
                                options={jobTypes}></FormikControl>

                            <FormikControl
                                control='input'
                                type='text'
                                label='Job Advertisement'
                                name='jobAdvertisement'></FormikControl>

                            <FormikControl
                                control='input'
                                type='text'
                                label='Memo No'
                                name='memoNo'></FormikControl>

                            <FormikControl
                                control='input'
                                type='text'
                                label='Job Advertisement Id'
                                name='jobAdId'></FormikControl>

                            <FormikControl
                                control='input'
                                type='text'
                                label='Important Links'
                                name='importantLinks'></FormikControl>

                            <FormikControl
                                control='date'
                                label='Publish Date and Time'
                                name='publishDateTime'
                            ></FormikControl>


                            <FormikControl
                                control='quill'
                                label='Additional Information'
                                name='additionalInfo'
                            ></FormikControl>

                            <button className='w-[120px] h-[20px] flex items-center justify-center p-3 bg-green-500 hover:bg-green-800 text-white mt-4' type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                        </Form>
                    }
                }

            </Formik>
        </div>
    );
};

export default JobAdvertisement;