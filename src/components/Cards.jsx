import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Cards() {
  return (
    <>
      <Container>
        <Row>
          <Col style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', gap:'15px'}}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://placekitten.com/200/200" />
              <Card.Body>
                <Card.Title>Jamel Scott Fadel</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Github</Button>
                <Button variant="primary">LinkedIn</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                style={{ width: '200px', height: '200px' }}
                src="https://placekitten.com/100/100"
              />
              <Card.Body>
                <Card.Title>Sol Youn</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Github</Button>
                <Button variant="primary">LinkedIn</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                style={{ width: '200px', height: '200px' }}
                src="https://placekitten.com/300/300"
              />
              <Card.Body>
                <Card.Title>Gabe Guevara</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Github</Button>
                <Button variant="primary">LinkedIn</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                style={{ width: '200px', height: '200px' }}
                src="https://placekitten.com/400/400"
              />
              <Card.Body>
                <Card.Title>Gabe Guevara</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Github</Button>
                <Button variant="primary">LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cards;
