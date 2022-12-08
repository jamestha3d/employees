import {Link} from 'react-router-dom';

const Footer = () => {
    return ( 
        <div>
            <Link to="/"> Home</Link>
            <Link to="/create"> Add New Employee</Link>  
        </div>
    );
}
 
export default Footer;