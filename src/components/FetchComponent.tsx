import { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Book } from '../types/Book'
import SingleBook from './SingleBook'

const FetchComponent = () => {
  const [books, setBooks] = useState<Book[]>([]) // <-- warning!
  // when you define a state variable as an empty array,
  // ALWAYS remember to define the shape of the elements inside!

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (response.ok) {
        let data = await response.json()
        setBooks(data)
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>AVAILABLE BOOKS</h2>
      <ListGroup className="text-dark">
        {books.map((book) => (
          <SingleBook key={book.id} book={book} />
        ))}
      </ListGroup>
    </div>
  )
}

export default FetchComponent
