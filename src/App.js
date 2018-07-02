import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import ListCategories from './ListCategories'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,

    books : [],
    categories: [
        {
          "title": "Currently Reading",
          "id": "currentlyReading"
        },
        {
          "title": "Want to Read",
          "id": "wantToRead"
        },
        {
          "title": "Read",
          "id": "read"
        }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeCategory = (book, category) => {
    if (this.state.books) {
      BooksAPI.update(book,category).then(() => {
        book.shelf = category;
        this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
  }

  render() {
    const {books, categories} = this.state

    console.log(books)

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div>
            <SearchBooks
              books = {books}
              onChangeCategory = {this.changeCategory}
            />
          </div>
        ) : (
          <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <ListCategories
                  onChangeCategory={this.changeCategory}
                  categories = {categories}
                  books = {books}
                />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
