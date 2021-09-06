import styled from 'styled-components'

export const Main = styled.main`
  margin: 0 auto;
  height: 100vh;
  max-width: 1200px;
  display: flex;
  overflow: visible;
  flex-direction: column;
  align-content: center;
  text-align: center;
  background-size: cover;
  justify-content: flex-start;
`

export const Stats = styled.article`
  margin: 20px auto;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  box-shadow: black 2px 2px 12px 0px;
`

export const List = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
`

export const StatName = styled.span`
  font-weight: 800;
`

export const StatParam = styled.span`
  font-weight: 500;
`