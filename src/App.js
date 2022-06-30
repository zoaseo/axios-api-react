import './App.css';
import Users from './components/Users';
import UsersReducer from './components/UsersReducer';
import Posts from './components/Posts';
import PostsReducer from './components/PostsReducer';
import UsersCustomHook from './components/UsersCustomHook';
function App() {
  return (
    <div className="App">
      {/* <Users/> */}
      {/* <UsersReducer/> */}
      {/* <Posts/> */}
      {/* <PostsReducer/> */}
      <UsersCustomHook/>
    </div>
  );
}

export default App;
