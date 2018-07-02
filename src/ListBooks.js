import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  render() {
    //console.log('Props', this.props)
    const {book, onChangeCategory} = this.props
    return (
      <div className="book">
        <div className="book-top">
          {book.imageLinks &&
            <div className="book-cover" style={{
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}/>}
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf} onChange={(event) => onChangeCategory(book, event.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        {book.title && <div className="book-title">
          {book.title}
          </div>
        }
        {book.authors && <div className="book-authors">
          {book.authors}
          </div>
        }
      </div>
    )
  }
}

ListBooks.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeCategory: PropTypes.func.isRequired
}
export default ListBooks
