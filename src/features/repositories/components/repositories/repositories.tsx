import React from 'react';
import {
  Badge, Col, Form, InputGroup, ListGroup, Row,
} from 'react-bootstrap';
import { useRepositories } from '../../api/get-repositories';

type RepositoriesProps = {
  user: string | undefined;
};

export const Repositories = ({ user }: RepositoriesProps) => {
  const {
    data,
  } = useRepositories({ user: user as string });

  return (
    <div>
      <Row className="mt-3">
        <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://api.github.com/users/
          </InputGroup.Text>
          <Form.Control
            id="basic-url"
            aria-describedby="basic-addon3"
            value={user}
          />
          <InputGroup.Text id="basic-addon3">
            /repos
          </InputGroup.Text>
        </InputGroup>
      </Row>
      <Row>
        <Col sm={10} md={6}>
          <ListGroup as="ol" numbered>
            {data?.map((repo) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{repo.full_name}</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  {repo.stargazers_count}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};
