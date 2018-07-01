import React, { Component } from 'react'

class ListBooks extends Component {
  render() {
    //console.log('Props', this.props)
    const {book, onChangeCategory} = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: `${book.width}`+'px',
            height: `${book.height}`+'px',
            backgroundImage: `url(${book.thumbnail})`
          }}/>

          <div className="book-shelf-changer">
            <select defaultValue={book.category} onChange={(event) => onChangeCategory(book, event.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="CurrentlyReading">Currently Reading</option>
              <option value="WantToRead">Want to Read</option>
              <option value="Read">Read</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>


    )
  }
}

export default ListBooks
