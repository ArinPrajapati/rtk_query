import React from "react";
import "./App.css";
import PostList from "./features/post/PostList";
import AddNewPost from "./features/post/AddNewPost";

function App() {
  return (
    <main className="App">
      <AddNewPost />
      <PostList />
    </main>
  );
}

export default App;
