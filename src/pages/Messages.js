import styled from 'styled-components'
import Icon from '../components/Icons/Icon'
import MessageCard from '../components/Cards/MessageCard'
import MessagesFilter from '../components/Messages/MessagesFilter/MessagesFilter'
import BottomTabNavigation from '../components/BottomTabNavigation/BottomTabNavigation'

const Container = styled.div``

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #ffffff;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
`

const HeaderItemContainer = styled.div`
  flex: 1;
`

const UserIconButton = styled.button`
  background-color: ${p => p.theme.colors.grayColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border: none;
`

const LogoIconContainer = styled.div`
  flex: 1;
  text-align: center;
`

const Content = styled.div`
  padding-top: 1rem;
  padding-bottom: 130px;
`

const MenuContainer = styled.div`
  text-align: left;
  padding: 0 1rem;
`

function Messages() {
  return (
    <Container>

      <Header>
        <HeaderItemContainer>
          <UserIconButton>
            <Icon name='avatar' />
          </UserIconButton>
        </HeaderItemContainer>

        <LogoIconContainer>
          <Icon name='logo' />
        </LogoIconContainer>

        <HeaderItemContainer />
      </Header>

      <MessagesFilter />

      <Content>
        <MenuContainer>
          <Icon name='menu' />
        </MenuContainer>

        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </Content>

      <BottomTabNavigation />
    </Container>
  )
}

export default Messages
