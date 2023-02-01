import logo from "./logo.svg";
import "./App.css";
import BlogForm from "./components/BlogForm";
import { useState } from "react";

function App() {
  const [posts, setPost] = useState([]);

  const addPost = (post) => {
    setPost([post, ...posts]);
  };

  return <BlogForm addPost={addPost} />;
}

export default App;
