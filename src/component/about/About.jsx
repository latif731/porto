import React,{useState} from 'react'
import './about.css'
import {Container, Row, Col} from 'reactstrap';
import aboutImg from '../../asset/image/latif.png'

import Education from './Education'

import Skill from './Skill'

const About = () => {

    const[aboutFilter, setAboutFilter] = useState('ABOUT')


  return <section id='about'>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
            <h2>About Me</h2>
            </Col>
            <Col lg='4' md='3'>
            <div className="about_btns">
                <button className={`about_btn ${aboutFilter === 'ABOUT' ? 'about_btn-active' : ''}`}onClick={()=>setAboutFilter("ABOUT")}>About Me</button>
                <button className={`about_btn ${aboutFilter === 'EDUCATION' ? 'about_btn-active' : ''}`}onClick={()=>setAboutFilter("EDUCATION")}>Education</button>
                <button className={`about_btn ${aboutFilter === 'SKILL' ? 'about_btn-active' : ''}`}onClick={()=>setAboutFilter("SKILL")}>Skills</button>
            </div>
            </Col>
            <Col lg='8' md='9'>

                {
                    aboutFilter === 'ABOUT' &&  <div className="about_content_wrapper">
                    <div className="about_img">
                        <img src={aboutImg} alt="" className='latifabout'/>
                    </div>
                    <div className="about_content">
                        <p>
                            Saya senang sekali dalam membangun relasi untuk menambah wawasan dan pengetahuan, menyukai tantangan serta mampu bekerja dibawah tekanan, moto saya adalah tetap semangat dan terus belajar demi masa depan yang lebih baik.
                        </p>
                        <div className="social_link">
                            <h6>Contact With Me:</h6>
                            <a href='https://twitter.com/latif57647992'><span className='link'><i class="ri-twitter-line"></i></span></a>
                            <a href='https://www.instagram.com/pamungkaslatifbudi/'><span className='link'><i class="ri-instagram-line"></i></span></a>
                            <a href='https://www.linkedin.com/in/latif-budi-pamungkas-8746041a6/'><span className='link'><i class="ri-linkedin-line"></i></span></a>
                        </div>

                    </div>
                </div> 
                }

                {
                    aboutFilter === "EDUCATION" && <Education/>
                }

                {
                    aboutFilter === "SKILL" && <Skill/>
                }
          
            </Col>
        </Row>
    </Container>
  </section>
}

export default About