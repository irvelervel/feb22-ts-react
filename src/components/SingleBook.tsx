import { ListGroup } from 'react-bootstrap'
import { Book } from '../types/Book'

interface SingleBookProps {
  book: Book
}

const SingleBook = ({ book }: SingleBookProps) => {
  return <ListGroup.Item>{book.title}</ListGroup.Item>
}

export default SingleBook
