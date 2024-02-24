import React from 'react';
import { Figure } from 'react-bootstrap';
import { User } from '../../features/user/types';

export const Avatar = ({ user }: { user: User }) => (
  <Figure>
    <Figure.Image
      width={171}
      height={180}
      alt="171x180"
      src={user.avatar_url}
    />
    <Figure.Caption>
      {user.bio}
    </Figure.Caption>
  </Figure>
);
