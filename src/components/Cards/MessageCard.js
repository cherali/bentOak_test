import styled from 'styled-components'
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, Type } from 'react-swipeable-list';
import Icon from '../Icons/Icon';

import 'react-swipeable-list/dist/styles.css';


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

function MessageCard({ item }) {

  const handleDelete = () => {
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
    <Container>
      <SwipeableList
        fullSwipe={false}
        type={Type.IOS}
      >
        <SwipeableListItem
          leadingActions={leadingActions()}
        >
          <ImageContainer>
            <Img src={'/assets/icons/logo.png'} alt='' />
          </ImageContainer>

          <div>
            <p>title</p>
            <p>description</p>
          </div>

        </SwipeableListItem>
      </SwipeableList>
    </Container>
  )
}

export default MessageCard
