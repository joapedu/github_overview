import Col from "react-bootstrap/Col";
import Accordion from 'react-bootstrap/Accordion';
import {useProfile} from "../../hooks/useProfile";
import { IProfile } from "../../models";

interface profileListProps {
    profiles: IProfile
}

const HeaderProfile = (props: profileListProps) => {
    const { profiles, GetProfile } = useProfile();

    return (
        <Accordion defaultActiveKey="0" style={{margin: '1.5%', backgroundColor: 'white'}} >
            <Accordion.Item eventKey="0" style={{backgroundColor: 'white'}}>
                <Col>
                    <Accordion.Header>
                        <div style={{width: '50%'}}>
                            <h2>{props.profiles.name}</h2>
                        </div>
                    </Accordion.Header>
                </Col>
                <Accordion.Body>
                    {props.profiles.bio}
                </Accordion.Body>
            </Accordion.Item>
    </Accordion>
    )
}

export default HeaderProfile