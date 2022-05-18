import React, {useRef, useEffect} from 'react'
import './herosection.css'
import { Container, Row, Col } from 'reactstrap'
import heroimg from '../../asset/image/latif.png'
import CV from "../../asset/image/cv1.png"

const HeroSection = () => {

    

  return (
    <section className='hero_section' id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero_content">
                        {/* <p className='mb-3'>Welcome to my website!</p> */}
                        {/* <h5 className='mb-4'>Hi</h5> */}
                        <h1 className='hero_title mb-4'>
                        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
            Assalamualaikum wr. wb.
        </span>
                       </h1>
                        <h2>
                            Perkenalkan nama saya Latif Budi Pamungkas saya berusia 26 tahun, dengan beberapa pengalaman dan skill yang saya miliki saya berharap mampu memberikan kontribusi 
                            lebih untuk pelayanan yang sempurna. 
                        </h2>

                        <div className="mt-5 hero_btns d-flex align-items-center gap-4">
                            <button className='btn hire_btn'><a href={CV} download>Hire Me</a></button>
                            {/* <button className='btn'>Contact</button> */}
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="hero_img">
                        <img src={heroimg} alt="" className='latif w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection