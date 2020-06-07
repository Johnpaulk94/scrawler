import React from 'react'
import {connect} from 'react-redux'
import {startAddPosts} from '../actions/posts'


class AddPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            body : this.state.body
        }
        console.log(formData)
        this.props.dispatch(startAddPosts(formData))
        this.props.history.push('/users/posts')
    }

    render() {
        return (
            <div className="container">
                <h2>Create New Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className = "form-group">
                        <input type="text" className = "form-control" onChange = { this.handleChange } name="body" value= { this.state.body } placeholder = "Add text" />
                    </div>
                <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddPosts)