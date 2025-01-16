import { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const ShowSection = function () {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow((currentShow) => {
      return !currentShow // inverte show
    })
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h2 className="my-2">Esempio di componente ShowSection</h2>
          <div>
            <Button className="my-3" variant="info" onClick={toggleShow}>
              {show ? 'NASCONDI' : 'MOSTRA'}
            </Button>
          </div>
          {show && (
            <div>
              <Card>
                <Card.Img variant="top" src="https://placedog.net/300/300" />
                <Card.Body>
                  <Card.Title>Card!</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta totam corporis atque laudantium deserunt voluptates
                    at dignissimos? Corrupti temporibus doloremque velit
                    laudantium vero beatae quo. Repellendus cumque eos in rem.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default ShowSection
