import styled from 'styled-components'

export const Tab = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`

export const TabHead = styled.div`
  background-color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
`

export const TabBody = styled.div`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`

export const TypePill = styled.p`
  text-transform: capitalize;
  color: white;
  padding: 5px 10px;
  border-radius: 10%;
  margin: 5px;
  box-shadow: black 2px 2px 2px;
`