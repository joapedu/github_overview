import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardUser from '../card';
import {useRepos} from "../../hooks/useRepos";


function ContainerUser(this: any, ) {

    return (
    <Container>
        {this.props.children}
    </Container>
  );
}

export default ContainerUser;