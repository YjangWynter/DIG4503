import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Posts = () =>{
    let api = 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState()

    useEffect(()=>{
        axios.get(api).then((res)=>{
            const responsePosts = res.data
            setPosts(responsePosts);

        })
    },[])

    //essential the setPosts function called
    return(
        <div>
            <h1>Posts</h1>
            {posts && posts.map((post)=>{
                const {id, title, body} = post
                return(
                    <div id={id} key={id}>
                        <h3><u>{title}</u></h3>
                        <h4>Post #{id}</h4>
                        <p>{body}</p>
                    </div>
                )
            })}
        </div>
    )

}
export default Posts