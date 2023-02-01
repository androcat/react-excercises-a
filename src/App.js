import logo from "./logo.svg";
import "./App.css";
import BlogForm from "./components/BlogForm";
import { useState } from "react";

function App() {
  const [post, setPost] = useState([]);

  return <BlogForm />;
}

export default App;
