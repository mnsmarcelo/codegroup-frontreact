import { useQuery } from '@tanstack/react-query';
import { API_URL } from 'config/contants';
import { Repository } from '../types';

type GetRepositoriesOptions = {
  user: string;
};

export const GetRepositories = async ({ user }: GetRepositoriesOptions): Promise<Repository[]> => {
  const res = await fetch(`${API_URL}/users/${user}/repos`);
  return res.json();
};

export const useRepositories = ({ user }: GetRepositoriesOptions) => {
  const {
    data, isLoading, isError, refetch,
  } = useQuery({
    queryKey: ['get-repositories', user],
    queryFn: () => GetRepositories({ user }),
  });

  return {
    data, isError, isLoading, refetch,
  };
};
