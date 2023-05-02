import { NavLink, Link} from 'react-router-dom';

function Header(){
    return(
    <nav className="navbar navbar-expand-lg navbar-dark" style={{fontFamily: 'Georgia', backgroundColor: "#3E83C1"}}>
    <Link className="navbar-brand" to='/Home'>Dog Adoption</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

        <li className="nav-item">
            <NavLink 
            to='/viewDogs' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>View Our Dogs</NavLink>
        </li>

        <li className="nav-item">
            <NavLink 
            to='/chooseDog' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Choose a dog</NavLink>
        </li>
        </ul>
    </div>
    </nav>  
    );
}

export default Header;