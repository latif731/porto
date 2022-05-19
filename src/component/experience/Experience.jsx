import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './experience.css'

const developmentExp = [
    {
        year: '2015-2018',
        title: 'Catering Service',
        desc: 'bertugas mempersiapkan makanan dan drygood yang nantinya akan disupply ke dalam pesawat, memonitor rute penerbangan agar jumlah makanan dan drygood yang di supply pas sesuai dengan jumlah rute yang dilalui pesawat, menghitung stok keluar masuk barang yang di supply ke pesawat,'
    },
    {
        year: '2019 - 2020',
        title: 'Flight Operation Officer Internship',
        desc: 'bertugas mengatur jadwal penerbangan, mempersiapkan dokumen penerbangan sebelum scedule keberangkatan pesawat, membriefing pilot dan co-pilot sebelum keberangkatan pesawat, menghitung jumlah bahan bakar yang dikonsumsi oleh pesawat, menghitung keseimbangan pesawat berdasarkan jumlah penumpang dan bagasi'
    },
    {
        year: 'Freelance',
        title: 'Sablon Kaos',
        desc: 'Mendesign dan mencetak baju sesuai dengan keinginan pelanggan'
    },
]

const Experience = () => {
  return (
    <section id="Experience">
        <Container data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <Row>
                <Col lg='12' className="mb-5">
                    <h2>Experience</h2>
                </Col>

                <Col>

                    <div className="single_experience-container">
                    {
                        developmentExp.map((item, index) => (
                        <div className="single_experience" key={index}>
                            <span className="experience_icon"><i class="ri-briefcase-line"></i></span>
                            <h6>{item.year}</h6>
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                        ))
                    }
                    </div>
                </Col>

                {/* <Col lg="6" md='6'>

                    <div className="single_experience-container">
                    {
                        developmentExp.map((item, index) => (
                        <div className="single_experience" key={index}>
                            <span className="experience_icon"><i class="ri-briefcase-line"></i></span>
                            <h6>{item.year}</h6>
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                        ))
                    }
                    </div>
                </Col> */}
            </Row>
        </Container>
    </section>
  )
}

export default Experience