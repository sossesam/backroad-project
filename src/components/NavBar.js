
import { pageLinks } from '../data';
import { mediaLinks } from '../data';
const NavBar = () => {
  let url ="https://latantravels.com.ng/"
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo" alt="latan travels"><a href={url}>LATAN-TRAVELS</a></div>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*<!-- left this comment on purpose -->*/}
        <ul className="nav-links" id="nav-links" >
            {pageLinks.map((link)=>{
                return(
                    <li key={link.id}>
                        <a href={link.href} className='nav-link'>{link.text}</a>
                    </li>
                )
            })}
        </ul>
          

        <ul className="nav-icons">
          {mediaLinks.map((link)=>{
            return(
            <li key={link.id}>
            <a href={link.href} target="_blank" class="nav-icon"
               rel="noreferrer" attr={link.text}><i class={link.icon}></i
            ></a>
          </li>
            )
        }
        )
        }
        </ul>
      </div>
    </nav>
  )
};

export default NavBar

