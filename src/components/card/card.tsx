import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IRepos } from "../../models";
import { ReactElement } from "react";

interface repoListProps {
  repos: IRepos
}

const CardUser = (props: repoListProps): ReactElement => {
  return (
  <div style={{ display: 'inline'}}>
    <Card style={{ minWidth: '20rem', minHeight: '20%', margin: '1%', background: '#F0FFFF'}} id={"asas"}>
      <Card.Body>
        <Card.Title>{props.repos.name}</Card.Title>
        <Card.Text>
          {props.repos.description}
        </Card.Text>
        <div style={{display: 'col', left: '40%'}}>
          <a href={props.repos.html_url} target="_blank" rel="noopener noreferrer"><Button variant="outline-secondary">Repositório</Button></a>
          <a href={props.repos.homepage} target="_blank" rel="noopener noreferrer"><Button variant="outline-secondary">Live Server</Button></a>
        </div>
      </Card.Body>
    </Card>
  </div>
  )
}

export default CardUser