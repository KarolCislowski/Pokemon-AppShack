import { Nav, PageBtn } from './Pagination.ui'

type PaginationProps = {
  pokePerPage: number
  totalPoke: number
  currentPage: number
  paginate: Function
}

export const Pagination = ({
  pokePerPage,
  totalPoke,
  currentPage,
  paginate,
}: PaginationProps) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPoke / pokePerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Nav>
      {pageNumbers.map((number) => (
        <PageBtn
          onClick={() => paginate(number)}
          className={number === currentPage ? 'active' : ''}
          key={number}
          to={`/page/${number}`}
        >
          {number}
        </PageBtn>
      ))}
    </Nav>
  )
}
