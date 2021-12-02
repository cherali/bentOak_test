import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageLink = styled(Link)`
  margin-top: 1rem;
`

function NotFound() {
  return (
    <div>
      <h5>صفحه مورد نظر پیدا نشد.</h5>
      <PageLink to='/'>بازگشت به صفحه اصلی</PageLink>
    </div>
  )
}

export default NotFound
