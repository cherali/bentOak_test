import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../Icons/Icon'
import SVGIcon from '../Icons/SvgIcon'

const Container = styled.div`
  height: 81px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
`

const Rect = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  width: ${(document.documentElement.clientWidth / 2) - 50}px;
  height: 80px;
  background-color: ${p => p.theme.colors.grayColor};
  z-index: -1;
`

const LeftRect = styled(Rect)`
  left: 0;
  border-top-left-radius: 16px;
`

const RightRect = styled(Rect)`
  right: 0;
  border-top-right-radius: 16px;
`

const BackRect = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 150px;
  margin: 0 auto;
  z-index: -1;
  height: 80px;
  color: ${p => p.theme.colors.grayColor};
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconButton = styled.button`
  padding: 0;
  border: 1px solid ${p => p.theme.colors.white20Color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${p => p.theme.colors.iconBgColor};
`

const CenteredIconButton = styled(IconButton)`
  height: 82px;
  width: 82px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: -39px;
  background-color: ${p => p.theme.colors.grayColor};

  img {
    width: 40px;
    height: 40px;
  }
`


function BottomTabNavigation() {
  const navigate = useNavigate()

  const handleHomeClicked = () => navigate('/')

  return (
    <Container>
      <LeftRect />
      <RightRect />

      <BackRect>
        <SVGIcon name='rect' />
      </BackRect>

      <CenteredIconButton onClick={handleHomeClicked}>
        <Icon name='home' />
      </CenteredIconButton>

      <Row >
        <IconButton>
          <Icon name='edit' />
        </IconButton>

        <IconButton>
          <Icon name='inbox' />
        </IconButton>
      </Row>

    </Container>
  )
}

export default BottomTabNavigation
