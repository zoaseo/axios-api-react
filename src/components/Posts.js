import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [ posts, setPosts ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const fetchPosts = async () => {
        try {
            setError(null);
            setLoading(true);
            setPosts(null);
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        }
        catch (e) {
            setError(e);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchPosts();
    },[])
    if(loading) return <div>로딩중....</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!posts) return null;
    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                {posts.map((post)=>
                    <tr key={post.userId}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                )}
            </table>
        </div>
    );
};

export default Posts;