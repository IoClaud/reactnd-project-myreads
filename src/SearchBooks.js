import React, { Component } from 'react'
import ListBooks from './ListBooks'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({query})
      if (query) {(books)=> {
        if(books instanceof Array){
          //add books to state
          this.setState({books})
        }
        else {
          //set book state to empty array
          this.setState({books: []})
        }
      }
    }
  }

  render() {
    const {onChangeCategory} = this.props
    const {query, books} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <form>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => {
                this.updateQuery(event.target.value)
              } }/>
            </div>
          </form>
        </div>
        {books.length!==0 && (
          <div className="search-books-results">
            <ol className="books-grid">
              {books.map((book) => (
                  <li key={book.id}>
                      <ListBooks
                          onChangeCategory={onChangeCategory}
                          book = {this.state.book}
                      />
                  </li>
              ))}
            </ol>
          </div>
        )}
        {(books.length===0 && query.length!==0) && (
        <div className="search-results">
             {`No book found`}
         </div>
        )}
      </div>
    )
  }
}

export default SearchBooks