import { useEffect, useState } from 'react'
import { Col, Container, Form, ListGroup, Row } from 'react-bootstrap'

const FetchComponent = function () {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (response.ok) {
        const data = await response.json()
        setUsers(data)
      } else {
        throw new Error('errore nel recupero utenti')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form.Control
            type="text"
            placeholder="Cerca utenti"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <ListGroup>
            {users
              .filter((u) =>
                u.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((userObject) => (
                <ListGroup.Item key={userObject.id} data-testid="list element">
                  {userObject.name} - {userObject.email}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default FetchComponent
