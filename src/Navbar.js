import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar">
            <h1>The Dojo-blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
            </div>
        </div>
    );
}
 
export default Navbar;