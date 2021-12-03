import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Icon from '../components/Icons/Icon'
import MessageCard from '../components/Cards/MessageCard'
import MessagesFilter from '../components/Messages/MessagesFilter/MessagesFilter'
import BottomTabNavigation from '../components/BottomTabNavigation/BottomTabNavigation'
import { getMessages, updateMessages } from '../redux/actions/messageAction'
import Spinner from '../components/Spinner/Spinner'
import { useState } from 'react'

getMessages()


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
  text-align: center;
`

const MenuContainer = styled.div`
  text-align: left;
  padding: 0 1rem;
`

function Messages() {
  const [filter, setFilter] = useState('all')
  const messageData = useSelector(s => s.messages?.messages) || null
  const messages = filter === 'all' ? messageData : messageData.filter(r => r.id > filter);

  const handleChangeFilter = filterData => setFilter(filterData)

  const onDeleteMessage = id => updateMessages(messages.filter(r => r.id !== id))

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

      <MessagesFilter
        defaultFilter={filter}
        onChangeFilter={handleChangeFilter}
      />

      <Content>
        <MenuContainer>
          <Icon name='menu' />
        </MenuContainer>

        {messages === null && <Spinner size='small' />}

        {messages?.map(message => (
          <MessageCard
            key={message.id}
            item={message}
            onDeleteMessage={onDeleteMessage}
          />
        ))}

        {messages?.length === 0 && <p>لیست خالی است.</p>}

      </Content>

      <BottomTabNavigation />
    </Container>
  )
}

export default Messages
