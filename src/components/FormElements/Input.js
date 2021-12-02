import React, { useState } from 'react'
import styled from 'styled-components';
import Icon from '../Icons/Icon';


const Container = styled.div`
  position: relative;
  margin-bottom: 1rem;
`

const InputElement = styled.input`
  display: block;
  width: 100%;
  height: 36px;
  border: 1px solid ${p => p.theme.colors.grayColor};
  border-radius: 12px;
  padding: 1.2rem 1rem;
  font-size: ${p => p.theme.fontSize.medium};
  color: ${p => p.theme.colors.primaryColor};
  box-shadow: 0 0 18px -9px ${p => p.theme.colors.primaryColor};
  
  :focus {
    border-color: ${p => p.theme.colors.secondaryColor};
  }
`

const IconButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 12px;
  width: auto;
  max-width: auto;
  padding: 0;
  background-color: transparent;
  border: none;

`

const EyeIcon = styled(Icon)`
  position: relative;
  top: 2px;
`


function Input({ name, field, form, meta, type = 'text', secure = false, ...props }) {
  const [inputType, setInputType] = useState(type)

  const handleClick = () => setInputType(s => s === 'text' ? 'password' : 'text')


  return (
    <Container>
      <InputElement
        name={name}
        type={inputType}
        {...field}
        {...props}
      />
      {/* {meta.touched && meta.error && (
        <div className="error">{meta.error}</div>
      )} */}
      {secure && <IconButton type='button' onClick={handleClick}>
        <EyeIcon name='hide' />
      </IconButton>}
    </Container>
  );
};





export default Input
