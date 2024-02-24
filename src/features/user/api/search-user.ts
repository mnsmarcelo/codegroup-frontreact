import { useQuery } from '@tanstack/react-query';
import { User } from 'features/user/types';
import { API_URL } from 'config/contants';

type SearchUserOptions = {
  user: string;
};

export const GetUser = async ({ user }: SearchUserOptions): Promise<User> => {
  const res = await fetch(`${API_URL}/users/${user}`);
  return res.json();
};

export const useSearchUser = ({ user }: SearchUserOptions) => {
  const {
    data, isLoading, isError, refetch,
  } = useQuery({
    queryKey: ['search-user', user],
    enabled: false,
    queryFn: () => GetUser({ user }),
  });

  return {
    data, isError, isLoading, refetch,
  };
};
