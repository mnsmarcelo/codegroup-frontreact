import React, { FC, useState } from 'react';
import {
  Button, Col, Form, InputGroup, Row, Spinner,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar } from 'components';
import { useSearchUser } from '../../api/search-user';

export const SearchUser: FC = () => {
  const [userValue, setUserValues] = useState('');
  const {
    isLoading, data, refetch,
  } = useSearchUser({ user: userValue });
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      refetch();
    }
  };

  return (
    <>
      <Row className="mt-3">
        <Col sm={1} md={3} />
        <Col sm={10} md={6}>
          <InputGroup className="mb-3">
            <Form.Control
              size="lg"
              placeholder="Git username"
              aria-label="Git username"
              aria-describedby="basic-addon2"
              value={userValue}
              onChange={(e) => setUserValues(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button
              variant="primary"
              id="button-addon2"
              onClick={() => refetch()}
            >
              { isLoading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              {isLoading ? 'Buscando...' : 'Buscar'}
            </Button>
          </InputGroup>
        </Col>
        <Col />
      </Row>
      {(!isLoading && data?.id) && (
        <>
          <h1>{data.name}</h1>
          <p>
            {data.followers}
            seguidores
          </p>
          <p>
            {data.following}
            Seguindo
          </p>
          <Avatar user={data} />
          <Link to={`/repos/${data.login}`}>Ver todos os repositórios</Link>
        </>
      )}
      {(!isLoading && !data?.id) && (
        <p>A busca não retornou nada</p>
      )}
    </>
  );
};
