import React, { Component } from 'react'

class ListBooks extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">

              <h2 className="bookshelf-title">Currently Reading</h2>

              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book) => (
                    <li key = {book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                          width: `${book.width}`+'px',
                          height: `${book.height}`+'px',
                          backgroundImage: `url(${book.thumbnail})`
                        }}/>

                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.author}</div>
                    </div>
                    </li>
                  ))}

                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks
