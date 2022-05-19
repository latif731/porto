import React from 'react'
import {Container, Row, Col, NavItem} from 'reactstrap'
import './service.css'
import CER1 from '../../asset/image/osis.jpg'
import CER2 from '../../asset/image/pramuka.jpg'
import CER3 from '../../asset/image/theater.jpg'
import CER4 from '../../asset/image/pala.jpg'
import CER5 from '../../asset/image/pala2.jpg'
import CER6 from '../../asset/image/foo.jpg'
import CER7 from '../../asset/image/1.png'


const certificateData = [
    {
        icon: 'ri-code-line',
        title: `${CER1}`,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
    {
        icon: 'ri-code-line',
        title: `${CER5}`,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
    {
        icon: 'ri-code-line',
        title: `${CER3}`,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
    {
        icon: 'ri-code-line',
        title: `${CER4}`,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
    {
        icon: 'ri-code-line',
        title: `${CER2}`,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
    {
        icon: 'ri-code-line',
        title: `${CER6}`,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },
    {
        icon: 'ri-code-line',
        title: `${CER7}`,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam blanditiis vel doloribus exercitationem quisquam'
    },


]


const Certificate = () => {
  return (
    <section id="certificate">
        <Container data-aos="flip-down">
            <Row>
                <Col lg='12' className="service_top mb-4">
                    <h2>My Certificate</h2>
                </Col>
                {
                    certificateData.map((item, index) => (
                <Col className="mb-4 box" key={index} >
                    <div className="single_service">
                        <span className="service_icon">
                        </span>
                        <img className='cerimg' src={item.title}/>
                        {/* <p>{item.desc}</p> */}
                    </div>
                </Col>                  
                    ))
                }

            </Row>
        </Container>
    </section>
  )
}

export default Certificate