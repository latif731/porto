import React from 'react'
import './contact.css'
import {Container, Row, Col} from 'reactstrap'
import Form from '../form/Form'


const Contact = () => {
  return (
    <section id='contact'>
        <Container>

        <Row>
            <Col lg='12'>
                <h2>Get In Touch</h2>
            </Col>

            <div class="bbbb">
                <div class="contact_info_container">
                    <div class="single_info-box ">
                        <h6>Address</h6>
                        <p>Ds. Jatirejo Rt. 12/Rw. 02 Kec. Wonoasri Kab. Madiun</p>
                        </div>
                        <div class="single_info-box"><h6>Phone</h6><p>085782244135</p>
                        </div>
                        <div class="single_info-box">
                            <h6>Email</h6>
                            <p>pamungkaslatifbudi@gmail.com</p>
                            </div></div>
                            <div class="single_info-box4">
                                <h6>Location</h6>
                                <div>
                            <iframe className='map' width="400" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Jatirejo,wonoasri&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                            </div>
                            </div>
                            </div>
            
                <Form/>
        </Row>
        </Container>
    </section>
  )
}

export default Contact