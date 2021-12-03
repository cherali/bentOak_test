import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 8px;
  display: flex;
  gap: 8px;
  height: 38px;
  overflow-y: hidden;
  overflow-x: auto;
  padding-bottom: 0.8rem;
`


const FilterButton = styled.button`
  border-radius: 20px;
  background-color:  ${p => p.isActive ? p.theme.colors.iconBgColor : '#ffffff'};
  width: auto;
  margin: 0;
  border: 1px solid ${p => p.theme.colors.primaryColor};
  color: ${p => p.theme.colors.primaryColor};
  padding: 0 12px;
  white-space: nowrap;
  font-weight: 700;
`

function MessagesFilter({ defaultFilter = 'all', onChangeFilter = () => { } }) {
  const [selectedFilter, setSelectedFilter] = useState(defaultFilter)

  const handleFilterClicked = value => () => {
    setSelectedFilter(value)
    onChangeFilter(value)
  }

  const filters = [
    { title: 'all', value: 'all' },
    { title: 'id > 1', value: 1 },
    { title: 'id > 5', value: 5 },
    { title: 'id > 10', value: 10 },
    { title: 'id > 15', value: 15 },
    { title: 'id > 20', value: 20 },
    { title: 'id > 25', value: 25 },
  ]


  return (
    <Container>
      {filters.map(item => (
        <FilterButton
          key={item.value}
          isActive={item.value === selectedFilter}
          onClick={handleFilterClicked(item.value)}
        >
          {item.title}
        </FilterButton>
      ))}
    </Container>
  )
}

export default MessagesFilter
