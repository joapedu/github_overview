import Col from "react-bootstrap/Col";
import Accordion from 'react-bootstrap/Accordion';
import {useProfile} from "../../hooks/useProfile";
import { IProfile } from "../../models";
import {Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";

interface profileListProps {
    profiles: IProfile
}

const HeaderProfile = (props: profileListProps) => {
    const { profiles, GetProfile } = useProfile();

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Accordion defaultActiveKey="0" className="header br-7px" style={{margin: '1.5%', backgroundColor: 'white', borderRadius: '8px', width: '50%', display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Accordion.Item eventKey="0">
                <Col>
                    <Accordion.Header>
                        <Col xs={1}>
                            <Image src="https://uploaddeimagens.com.br/images/004/607/572/full/github-logo.png?1694715626" roundedCircle  style={{width: '100%', marginLeft: '-5%'}}></Image>
                        </Col>
                        <Col xs={1}>
                            <Image src={props.profiles.avatar_url} roundedCircle  style={{width: '100%', marginLeft: '5%'}}></Image>
                        </Col>
                        <Col xs={6}>
                            <h2 style={{display: 'block', width: '100%', marginLeft: '5%'}}><span>{props.profiles.name} ~ <i>{props.profiles.login}</i></span> </h2>
                        </Col>
                    </Accordion.Header>
                </Col>
                <Accordion.Body style={{backgroundColor: '#e2e2e2'}}>
                    <span>{props.profiles.bio}</span>
                    <br/>
                    <Row>
                        <Col>
                            <Col>
                                <b>Repositories:</b>  <bdo>{props.profiles.public_repos}</bdo>
                            </Col>
                            <Col>
                                <b>Company:</b>  <bdo>{props.profiles.company}</bdo>
                            </Col>
                            <Col>
                                <b>Website:</b>  <a href={props.profiles.blog}><bdo>Portfolio</bdo></a>
                            </Col>
                        </Col>
                        <Col>
                            <Col>
                                <b>Location:</b>  <bdo>{props.profiles.location}</bdo>
                            </Col>
                            <Col>
                                <b>Followers:</b>  <bdo>{props.profiles.followers}</bdo>
                            </Col>
                            <Col>
                                <b>Github:</b>  <a href={props.profiles.html_url}><bdo>Joapedu</bdo></a>
                            </Col>
                        </Col>
                    </Row>

                </Accordion.Body>
            </Accordion.Item>
    </Accordion>
        </div>
    )
}

export default HeaderProfile