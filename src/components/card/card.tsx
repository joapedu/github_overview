import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IRepos } from "../../models";
import { ReactElement } from "react";

interface repoListProps {
  repos: IRepos
}

const CardUser = (props: repoListProps): ReactElement => {
  return (
      <Container fluid="md">
      <Row>
          <Card className="text-center" style={{backgroundColor: '#F5F5F5'}}>
            <Card.Header> <b>{props.repos.language}</b> </Card.Header>
            <Card.Body>
              <Card.Title>{props.repos.name}</Card.Title>
              <Card.Text>
                {props.repos.description}
              </Card.Text>
              <Col>
                <a href={props.repos.html_url} target="_blank" rel="noopener noreferrer"><Button variant="outline-secondary">Repositório</Button></a>
                <a href={props.repos.homepage} target="_blank" rel="noopener noreferrer"><Button variant="outline-secondary">Live Server</Button></a>
              </Col>
              </Card.Body>
            <Card.Footer className="text-muted"><strong>{props.repos.topics[0]}, {props.repos.topics[1]}, {props.repos.topics[2]}</strong></Card.Footer>
          </Card>
        </Row>
      </Container>
  )
}

export default CardUser