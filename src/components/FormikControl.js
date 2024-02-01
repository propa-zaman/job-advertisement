import React from 'react';
import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import RadioButtons from './RadioButtons'
import CheckBoxGroup from './CheckBoxGroup'
import DatePicker from './DatePicker';
import QuillAd from './QuillAd';



const FormikControl = (props) => {
    const { control, ...rest} = props
    switch (control) {
        case 'input': return <Input {...rest}></Input>
        case 'textarea': return <Textarea {...rest}></Textarea>
        case 'select': return <Select {...rest}></Select>
        case 'radio': return <RadioButtons {...rest}></RadioButtons>
        case 'checkbox': return <CheckBoxGroup {...rest}></CheckBoxGroup>
        case 'date': return <DatePicker {...rest}></DatePicker>
        case 'quill': return <QuillAd {...rest}></QuillAd>
        default: return null
    }
};

export default FormikControl;