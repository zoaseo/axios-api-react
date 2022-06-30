import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
const initialState = {
    loading: false,
    data: null,
    error: null,
}
function reducer(state, action) {
    switch(action.type){
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case 'ERROR':
            return {
                loading:false,
                data: null,
                error: action.error,
            };
        default:
            return state;
    }
}
const PostsReducer = () => {
    const [ state, dispatch ] = useReducer(reducer,initialState);
    const fetchPosts = async () => {
        dispatch({type: 'LOADING'});
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch({type: 'SUCCESS', data: response.data});
        }
        catch (e) {
            dispatch({type: 'ERROR', error: e});
        }
    }
    useEffect(()=>{
        fetchPosts();
    },[]);
    const { loading, data, error } = state;
    if(loading) return <div>로딩중입니다....</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null
    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                {data.map(post=>(
                    <tr key={post.userId}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default PostsReducer;