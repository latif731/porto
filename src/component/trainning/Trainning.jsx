import React from 'react'
import {Container, Row, Col} from "reactstrap"
import MER from '../../asset/image/bamc1.jpg'
import './trainning.css'

const Trainning = () => {
  return (
    <section id="Experience">
    <Container>
        <Row>
            <Col lg='12' className="mb-5">
                <h2>Trainning</h2>
            </Col>

            <Col className="single_trainning-container">
            <img className='mer' src={MER} alt="" />
            </Col>
        </Row>
    </Container>
</section>
      )
    }
    
    export default Trainning
  