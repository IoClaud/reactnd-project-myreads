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
                    {book.title}
                    {book.author}
                    {book.category}
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
