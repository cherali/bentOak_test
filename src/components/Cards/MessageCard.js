import styled, { createGlobalStyle } from 'styled-components'
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, Type } from 'react-swipeable-list';
import { confirmAlert } from 'react-confirm-alert';
import Icon from '../Icons/Icon';

import 'react-swipeable-list/dist/styles.css';

const ConfirmedStyle = createGlobalStyle`
  .--confirmation {
    background-color: #ffffff4d;
  }

  .--confirmation-content {
    padding: 1rem;
    background-color: ${p => p.theme.colors.white20Color};
    border-radius: 8px;

    .-delete {
      background-color: ${p => p.theme.colors.dangerColor};
      color: #fff;
    }

    .-cancel {
      background-color: ${p => p.theme.colors.grayColor};
    }
    
    h1 {
      margin: 1rem 0;
    }
  }
`

const ActionContainer = styled.div`
  display: flex;
  gap: 12px;
`

const Button = styled.button`
  border: none;
  outline: none;
  width: 100%;
  border-radius: 5px;
  height: 32px;
`

const Container = styled.div`
  padding: 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.colors.grayColor};
  width: 100%;
  direction: ltr;

  .swipeable-list-item__content {
    flex-direction: row-reverse;
    text-align: right;
    gap: 12px;
  }

  .swipeable-list-item__content {
    padding: 5px 0;
  }

  p {
    line-height: 1.5rem;
    font-size: ${p => p.theme.fontSize.small};
  }

  p.-cut {
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: ${document.documentElement.clientWidth - 100}px;
  }
`

const ActionContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-size: 12px;
  font-weight: 500;
  box-sizing: border-box;
  color: #eee;
  user-select: none;
  background-color: ${p => p.theme.colors.primaryColor};
`

const ImageContainer = styled.div`
  width: 65px;
  height: 65px;
`

const Img = styled.img`
  width: 65px;
  height: 65px;
  margin: auto;
  border-radius: 50%;
  background-color: #00000026;

`

const DeleteIcon = styled.div`
  width: 60px;
  text-align: center;
  img {
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #000000;
  }
`

function MessageCard({ item, onDeleteMessage }) {

  const deleteMessage = () => {
    onDeleteMessage(item.id)
  }

  const handleDelete = () => {
    confirmAlert({
      overlayClassName: '--confirmation',
      customUI: ({ onClose }) => {
        return (
          <div className='--confirmation-content'>
            <h1>از حذف این پیام مطمئن هستی؟</h1>

            <ActionContainer>

              <Button className='-cancel' onClick={onClose}>نه</Button>
              <Button
                className='-delete'
                onClick={() => {
                  deleteMessage()
                  onClose();
                }}
              >
                آره
              </Button>
            </ActionContainer>
          </div>
        );
      }
    });
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={handleDelete}>
        <ActionContent>
          <DeleteIcon>
            <Icon name='trash' />
          </DeleteIcon>

        </ActionContent>
      </SwipeAction>
    </LeadingActions>
  )

  return (
    <>
      <ConfirmedStyle />
      <Container>
        <SwipeableList
          fullSwipe={false}
          type={Type.IOS}
        >
          <SwipeableListItem
            leadingActions={leadingActions()}
          >
            <ImageContainer>
              <Img src={item.avatar} alt='' />
            </ImageContainer>

            <div>
              <p>{item.first_name}</p>
              <p className='-cut'>{item.last_name} {item.email} {item.last_name} {item.email}{item.last_name} {item.email}{item.last_name} {item.email}</p>
            </div>

          </SwipeableListItem>
        </SwipeableList>
      </Container>
    </>
  )
}

export default MessageCard
