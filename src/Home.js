import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";
const Home = () => {
  const {data:blogs,isLoading,errorMessage} = useFetch('http://localhost:8000/blogs');
  return (
    <section className="home">
    {errorMessage && <div>{errorMessage}</div>}
    {isLoading && <div className="loading">Loading</div> }
     {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
     {blogs && <BlogList
            blogs={blogs.filter((blog) => blog.author === "mario")}
            title="Mario's Blogs" 
        ></BlogList>}
      
    </section>
  );
};

export default Home;
