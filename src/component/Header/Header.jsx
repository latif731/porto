import React,{useRef, useEffect} from 'react'
import "./header.css"
import { Container } from 'reactstrap'

const navLinks = [
  {
    display:'Home',
    url:'#home'
  },
  {
    display:'About',
    url:'#about'
  },
  {
    display:'Certificate',
    url:'#certificate'
  },
  {
    display:"Experience",
    url:"#Experience"
  },
  {
    display:'Contact',
    url:'#contact'
  },
]




const Header = () => {

  const headerRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header_shrink')
      } else {
        headerRef.current.classList.remove('header_shrink')
      }
    })

    return () => {
      window.removeEventListener('scroll', null)
    }

  },[])

  const handleClick = e  => {
    e.preventDefault()
    const targetAttr = e.target.getAtribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scroll({
      left: 0,
      top: location - 70,
    })

  }
  return (
    <header className='header' ref={headerRef}>
        <Container>
          <div className='navigation d-flex align-items-center justify-content-between'>
            <div className="logo"><h5>latif</h5></div>

            <div className="nav_menu">
            <ul className='nav_list'>
              {
                navLinks.map((item, index) =><li className='nav_item' key={index}>
                <a href={item.url}>{item.display}</a>
              </li>)
              }
            </ul>
          </div>

          <div className="nav_right d-flex align-items-center gap-4">
            {/* <button className="btn">Let's Talk</button> */}
            {/* <span className="mobile_menu"><i class="ri-menu-5-line"></i></span> */}
          </div>
          </div>
        </Container>
    </header>
  )
}

export default Header