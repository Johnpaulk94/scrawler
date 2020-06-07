import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './Home'
import Login from './components/Login'
import Register from './components/Register'
import { startRemoveUser } from './actions/users'
import Browse from './components/Browse'
import AddPosts from './components/AddPosts'
import UserPosts from  './components/UserPosts'
import OwnPosts from './components/OwnPosts'


function App(props) {
  const handleLogout = () => {
      props.dispatch(startRemoveUser()) 
  }
  return (
    <BrowserRouter>
      <div>
          {
            Object.keys(props.user).length === 0 ? (
              <div>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Scrawler</Link>
                      <ul className="navbar-nav">
                        <Link to ="/users/login" className="nav-item nav-link">Login</Link>
                        <Link to ="/users/register" className="nav-item nav-link">Register</Link>
                      </ul>
                  </nav>
              </div>
            ) : (
              <div>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <Link className="navbar-brand" to="/">Scrawler</Link>
                      <ul className="navbar-nav">
                        <Link to ="/users/posts" className="nav-item nav-link">Browse</Link>
                        <Link to ="/posts/new" className="nav-item nav-link">Create Posts</Link>
                        <Link to="/users/ownposts" className="nav-item nav-link">Your Posts</Link>
                        <Link to ="/users/logout" className="nav-item nav-link" onClick={handleLogout}>Logout</Link>
                      </ul>
                  </nav>
              </div>
            )
          }

          <Route exact path="/" component = {Home} />
          <Route path="/users/login" component={Login} />
          <Route path="/users/register" component = {Register} />
          <Route exact path="/users/posts" component={Browse} />
          <Route exact path="/posts/new" component={AddPosts} />
          <Route exact path="/users/ownposts" component={OwnPosts} />
          <Route path="/users/:id/posts" component={UserPosts} />

        </div>
      </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
