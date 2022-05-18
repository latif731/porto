import React from 'react'

import { Container, Row, Col } from 'reactstrap'

const MapGoogle = () => {
  return (
    <div>
        <Container>
            <Row>
            <iframe width="480" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Jatirejo,wonoasri&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
            </Row>
        </Container>
    </div>
  )
}

export default MapGoogle