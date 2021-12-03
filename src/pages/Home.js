import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  flex-direction: column;

  a {
    color: ${p => p.theme.colors.primaryColor};
    font-size: ${p => p.theme.fontSize.large};
  }
`

const LinkToLogin = styled(Link)`
  margin-top: 1rem;
`
function Home() {

  return (
    <Container>
      <LinkToLogin to='/login'>ورود</LinkToLogin>
      <LinkToLogin to='/messages'>پیام ها</LinkToLogin>
    </Container>
  )
}

export default Home
