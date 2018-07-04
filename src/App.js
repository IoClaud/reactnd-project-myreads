import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListCategories from './ListCategories'
import NoMatch from './NoMatch'
import SearchBooks from './SearchBooks'
import './App.css'

const categories = [
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

class BooksApp extends Component {
  state = {
    books : []
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
    const {books} = this.state

    return (
      <div className="app">
          <Switch>
            <Route exact path='/' render={() => (
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
                    <Link to="/search">
                      Add a book
                    </Link>
                  </div>
                </div>
              )}
            />

            <Route path="/search" render={(history) => (
                <div>
                  <SearchBooks
                    booksShelf = {books}
                    onChangeCategory = {this.changeCategory}
                  />
                </div>
              )}
            />

            <Route component={NoMatch}/>

          </Switch>

      </div>

    )
  }
}

export default BooksApp
