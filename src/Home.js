import { useState } from "react";

const Home = () => {
    //let name = "Masad";

    const [name ,setName] = useState("Masad");
    const [age , setAge] = useState("21")

    const handleClick = () =>
    {
        setName("Shanta");
        setAge("22")
    }

    return (
        <div className="home">
            <h2>
                Home Page
            </h2>
            <p>{ name } is { age } years old.</p>
            <button 
            onClick={handleClick}>Click me
            </button>
        </div>
    );
}
 
export default Home;