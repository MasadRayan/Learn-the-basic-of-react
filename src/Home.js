import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs , setblogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Masad', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Raju', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Oroni', id: 3 }
    ])

    const handleDelet = (id) =>{
        const newBlog = blogs.filter((blog) => blog.id !== id);
        setblogs(newBlog);
    }

    return (
        <div className="home">
            <BlogList blogs= { blogs} title = "All blogs!" handleDelet={handleDelet}/>
            
        </div>
    );
}
 
export default Home;