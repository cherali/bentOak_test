import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/Forms/LoginForm'
import Icon from '../components/Icons/Icon'
import { loginUser } from '../redux/actions/userAction'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  height: 280px;
  background-color: orange;
  position: relative;
`

const LogoContainer = styled.div`
  padding: 0 0.8rem;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const LogoIcon = styled(Icon)`

`

const WormIcon = styled(Icon)`
  position: absolute;
  left: 20px;
  bottom: 10px;
`

const Content = styled.div`
  padding: 1rem 1.5rem;

  h1 {
    padding-bottom: 0.8rem;
  }

  h3 {
    padding-bottom: 1rem;
  }
`


function Login() {
  const initialValues = { username: '', password: '' }

  const onSubmit = values => loginUser(values)

  return (
    <Container>
      <Header>
        <LogoContainer>
          <LogoIcon name='logo' />
        </LogoContainer>
        <WormIcon name='worm' />
      </Header>

      <Content>
        <h1>با این شماره قبلا ثبت‌نام کردی!</h1>

        <h3>برای وارد شدن نام کاربری و رمز عبورت رو بنویس.</h3>

        <LoginForm
          initialValues={initialValues}
          onSubmit={onSubmit}
        />

      </Content>
    </Container>
  )
}

export default Login
