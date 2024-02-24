import React from 'react';
import { useParams } from 'react-router-dom';
import { Repositories } from 'features/repositories/components/repositories';

type ReposPageProps = {
  user: string;
};

export const RepositoriesPage = () => {
  const { user } = useParams<ReposPageProps>();

  return (
    <div>
      <Repositories user={user} />
    </div>
  );
};
