import React from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <PostForm />
      {/* <PostList /> */}
    </div>
  );
}

export default App;