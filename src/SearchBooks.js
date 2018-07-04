import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'
import ListBooks from './ListBooks'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    if (!query) {
      this.setState({query: '', books: []})
    } else {
      this.setState({ query: query.trim() })
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          books = []
        }
        books.map(book => (this.props.booksShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState({books})
      })
    }
  }

  render() {
    const {onChangeCategory} = this.props
    const {query, books} = this.state

    return (
      <div className="search-books">

        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <form className="search-form" onSubmit={(event) => event.preventDefault()}>
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
          {books.length!==0 && (
            <ol className="books-grid">
              {books.sort(sortBy('title')).map((book) => (
                <li key = {book.id}>
                  <ListBooks
                    book = {book}
                    onChangeCategory={onChangeCategory}
                  />
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  booksShelf: PropTypes.array,
  onChangeCategory: PropTypes.func.isRequired
}

export default SearchBooks
