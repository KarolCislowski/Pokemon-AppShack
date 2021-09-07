import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1200px;
`

export const FilteringBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 15px;
  font-weight: 600;
`

export const SearchInput = styled.input`
  margin: 5px;
  border: black 2px solid;
  border-radius: 5px;
  padding: 5px;
`
