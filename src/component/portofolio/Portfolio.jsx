import React from 'react'
import './portfolio.css'
import {Container, Row, Col} from 'reactstrap'
import img1 from '../../asset/image/wed.jpg'

const Portfolio = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg="12" className="portfolio_top">
                    <h6></h6>
                    <h2></h2>
                </Col>
                <Col lg="12" sm="6" md="6">
                    <div className="portfolio_card">
                        <img src={img1} alt="" />
                    </div>

                    <div className="portfolio_content">
                        <div className="contenty_top">
                            <h6>Frontend Developer</h6>
                            <a href="">View live</a>
                        </div>
                        <h5>React Landing Page</h5>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio