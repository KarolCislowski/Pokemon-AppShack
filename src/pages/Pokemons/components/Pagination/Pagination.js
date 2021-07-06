import styled from 'styled-components'

const Nav = styled.nav`
  width:100%;
  display: flex;
  flex-wrap: wrap;
  margin:15px;
`

const PageBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #000;
  background:
    radial-gradient(circle,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,1) 35%,
      rgba(0,0,0,0) 36%,
      rgba(0,0,0,0) 100%),
    linear-gradient(180deg,
      rgba(255,255,255,1) 0%,
      rgba(255,255,255,1) 47%,
      rgba(0,0,0,1) 48%,
      rgba(0,0,0,1) 52%,
      rgba(255,0,0,1) 53%,
      rgba(255,0,0,1) 100%);
  margin: 2px;
  font-weight: 900;
  color: #fff;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.68, -0.7, 0.265, 3);
  &:hover {
    transform: rotate(-45deg);
  }
`

export const Pagination = ({ pokePerPage, totalPoke, currentPage, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPoke / pokePerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Nav>
      {pageNumbers.map(number => (
        <PageBtn
          className={number === currentPage ? 'active' : ''}
          key={number}
          type='button'
          onClick={() => paginate(number)}
        >
          {number}
        </PageBtn>
      ))}
    </Nav>
  )
}