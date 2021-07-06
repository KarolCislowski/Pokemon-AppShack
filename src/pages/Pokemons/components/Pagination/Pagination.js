export const Pagination = ({ pokePerPage, totalPoke, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPoke / pokePerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      {pageNumbers.map(number => (
        <button key={number} type='button' onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </nav>
  )
}