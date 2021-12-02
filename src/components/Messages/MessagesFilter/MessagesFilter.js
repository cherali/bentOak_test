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

function MessagesFilter() {
  const defaultFilter = 'all'
  const [selectedFilter, setSelectedFilter] = useState(defaultFilter)

  const handleFilterClicked = value => () => setSelectedFilter(value)

  const filters = [
    { title: 'all', value: 'all' },
    { title: 'test1', value: 'test1' },
    { title: 'some test', value: 'test2' },
    { title: 'tester', value: 'test3' },
    { title: 'testery', value: 'test4' },
    { title: 'shit test', value: 'test5' },
    { title: 'ss test', value: 'test6' },
    { title: 'ssfd test', value: 'test7' },
    { title: '3d test', value: 'test8' },
    { title: 'we test', value: 'test9' },
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
