import React, {useRef, useState} from 'react';
import {useFormik} from 'formik';
import s from './SendMessageForm.module.scss';
import Button from "../../common/Components/Button/Button";
import emailjs from '@emailjs/browser';

type FormikErrorsType = {
    name?: string
    email?: string
    message?: string
}
type FormDataType = {
    name: string
    email: string
    message: string
}

export const SendMessageForm = () => {
    const [disabled, setDisabled] = useState(false);
    const form = useRef<any>();
    const sendEmail = (e: FormDataType) => {

        setDisabled(true)
        emailjs.sendForm('service_b0jgn1q', 'template_yu9zlx6', form.current, '0LpFYplVJotUW863l')
            .then((result) => {
                console.log(result.text)
                setDisabled(false)
                alert('Message sent')
            })
            .catch((error) => {
                alert(error.text);
            })
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorsType = {}
            if (!values.email) {
                errors.email = 'Email is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())) {
                errors.email = 'Invalid email address'
            }
            if (!values.message) {
                errors.message = 'Message is required'
            } else if (values.message.length < 2) {
                errors.message = 'Message should be longer then two symbols'
            }
            if (!values.name) {
                errors.name = 'Name is required'
            } else if (values.name.length < 2) {
                errors.name = 'Enter valid name'
            }
            return errors
        },
        onSubmit: values => {
            sendEmail({
                name: values.name.trim(),
                email: values.email.trim(),
                message: values.message
            })
            formik.resetForm();
        },
    });

    return (
        <div className={s.form}>
            <form ref={form} onSubmit={formik.handleSubmit}>
                <div className={s.error}>
                    {formik.errors.name && formik.touched.name &&
                        <div>{formik.errors.name}</div>}
                </div>

                <input  {...formik.getFieldProps('name')}
                        name="name" placeholder={'Name'}/>

                <div className={s.error}>
                    {formik.errors.email && formik.touched.email &&
                        <div>{formik.errors.email}</div>}
                </div>

                <input{...formik.getFieldProps('email')}
                      name="email" placeholder={'Email'}/>

                <div className={s.error}>
                    {formik.errors.message && formik.touched.message &&
                        <div>{formik.errors.message}</div>}
                </div>

                <textarea{...formik.getFieldProps('message')}
                         name="message" placeholder={'Enter your message'}/>
                <div className={s.submitButton}>
                    <Button text={disabled ? 'Sending...': 'Send'} type={'submit'}/>
                </div>
            </form>
        </div>
    );
};

