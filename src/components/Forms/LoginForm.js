import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../FormElements/Input'


const Row = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1rem;

  p {
    font-weight: 500;
  }
`

const SubmitButton = styled.button`
  border: 1px solid #28d7ae;
  background-color: ${p => p.theme.colors.secondaryColor};
  border-radius: 16px;
  height: 48px;
  width: 100%;
  font-size: ${p => p.theme.fontSize.medium};
  font-weight: 700;
  color:${p => p.theme.colors.primaryColor};
  margin-top: 1rem;
`



function LoginForm({ initialValues, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >

      {(props) => <Form>
        <Field as={Input} name="username" placeholder="نام کاربریت رو اینجا بنویس" />

        <Field as={Input} name="password" secure type='password' placeholder="رمز عبورت رو اینجا بنویس" />


        <Row>
          <p>رمز عبورت رو فراموش کردی؟</p>
          <Link to='/login' >بازیابی رمز عبور</Link>
        </Row>


        <Row>
          <p>قبلا ثبت نام نکردی؟</p>
          <Link to='/login' >ثبت نام در هوپا</Link>
        </Row>


        <SubmitButton type="submit">ورود</SubmitButton>
      </Form>}
    </Formik>
  )
}

export default LoginForm
