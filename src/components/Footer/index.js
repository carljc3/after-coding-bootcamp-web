import React from 'react'
import { Card, Col, Row, Container, Image } from 'react-bootstrap'
import './index.css'

function Footer (props) {
  return (
    <Card>
      <Card.Header className="FooterHead"></Card.Header>
      <Card.Body className="CardBodyFooter">
        <Container>
          <Row>
            <Image src="https://i.imgur.com/8UiZtHu.png" className="Picture1"/>
            <Col>Contact Us<br />

              <ul>
                <li>
                  <p className="Text">J-Anne Carlson</p>
                  <button className="ContactButtons">J-Anne</button>
                  <a href="https://github.com/carljc3">
                    <Image src="https://i.imgur.com/hzMGiSY.png" className="Icon10"/>
                  </a>
                  <a href="https://www.linkedin.com/in/jay-carlson-24998271/">
                    <Image src="https://i.imgur.com/kuCryHG.png" className="Icon11"/>
                  </a>
                </li>

                <li>
                  <p className="Text">Amberlee Ha</p>
                  <button className="ContactButtons">Amberlee Ha</button>
                  <a href="https://github.com/alt-amberlee">
                    <Image src="https://i.imgur.com/hzMGiSY.png" className="Icon10"/></a>
                  <a href="https://www.linkedin.com/in/amberlee-al-ha/">
                    <Image src="https://i.imgur.com/kuCryHG.png" className="Icon11"/>
                  </a>
                </li>


                <li>
                  <p className="Text">Theresa Aguilar</p>
                  <button className="ContactButtons">Theresa Aguilar</button>
                  <a href="https://github.com/raselberg">
                    <Image src="https://i.imgur.com/hzMGiSY.png" className="Icon10"/>
                  </a>
                  <a href="https://www.linkedin.com/in/theresa-aguilar-676611196/">
                    <Image src="https://i.imgur.com/kuCryHG.png" className="Icon11"/>
                  </a>
                </li>
              </ul>

            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>

  )
}

export default Footer;