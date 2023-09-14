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
      <Container fluid="md mt-3" style={{marginBottom: '8%'}}>
      <Row>
          <Card className="text-center" style={{backgroundColor: '#CFE2FF'}}>
            <Card.Header> <b>{props.repos.language}</b> <br/></Card.Header>
            <Card.Body className="br" style={{backgroundColor: '#e2e2e2'}}>
                <Card.Title><h3><span>{props.repos.name}</span></h3></Card.Title>
              <Card.Text>
                  {props.repos.description}
              </Card.Text>
              <Col>
                <a href={props.repos.html_url} target="_blank" rel="noopener noreferrer"><Button className="repo mr-1" variant="outline-secondary">Repositório</Button></a>
                  <a>&nbsp;</a><a>&nbsp;</a>
                <a href={props.repos.homepage} target="_blank" rel="noopener noreferrer"><Button className="prof ml-1" variant="outline-secondary">Live Server</Button></a>
              </Col>
              </Card.Body>
              <Card.Footer className="text-muted"><strong style={{textTransform: 'uppercase'}}><bdo>{props.repos.topics[0]} <strong>&nbsp;</strong> <strong>&nbsp;</strong> {props.repos.topics[1]} <strong>&nbsp;</strong> <strong>&nbsp;</strong> {props.repos.topics[2]} <strong>&nbsp;</strong> <strong>&nbsp;</strong> </bdo></strong></Card.Footer>
          </Card>
        </Row>
      </Container>
  )
}

export default CardUser