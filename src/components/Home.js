import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Logo from '../Logo.png'

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }
    render(){
        const { posts } =this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                    <img src={Logo} alt="A logo"/>
                    <div className="card-content">
                    <Link to ={'/' + post.id}>
                    <span className="card-title teal-text darken-4">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                    </div>
                    </div>
                )
            })
        ) : (
            <div className="center"> No posts available</div>
        )
    return (
        <div className="container home">
        <h4 className="center">Home</h4>
        <p>{postList}</p>
        </div>
    )
}
}
export default Home