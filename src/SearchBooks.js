import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if(query){
      BooksAPI.search(query).then((books) => {
          if(books instanceof Array)  {
            this.setState({books})
          }
          else {
            this.setState({books: []})
          }
        }
      )
    }
  }

  render() {
    const {onChangeCategory} = this.props
    const {query, books} = this.state

    console.log(typeof books)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <form>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key = {book.id}>
                <ListBooks
                  book = {book}
                  onChangeCategory={onChangeCategory}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  book: PropTypes.object,
  onChangeCategory: PropTypes.func.isRequired
}

export default SearchBooks
