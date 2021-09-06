import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  opacity: 0.8;
  width: 200px;
  min-height: 250px;
  padding: 20px;
  text-align: center;
  border: 2px solid steelblue;
  border-radius: 20px;
  flex-grow: none;
  margin: 15px;
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
  }
`