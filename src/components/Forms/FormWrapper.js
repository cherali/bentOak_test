import { Formik } from 'formik';
import React, { cloneElement } from 'react'

function FormWrapper({ initialValues, onSubmit, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {
        (props) => {
          console.log("dfjl", props)
          return cloneElement(children, props)
        }
      }

    </Formik>
  )
}

FormWrapper.defaultProps = {
  initialValues: {},
  onSubmit: () => { },
}

export default FormWrapper
