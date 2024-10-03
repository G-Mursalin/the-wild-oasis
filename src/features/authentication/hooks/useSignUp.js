import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { signup as signupApi } from '../../../services/apiAuth';

export function useSignUp() {
  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
    onError: (error) => {
      toast.success(error.message);
    },
  });

  return { signUp, isLoading };
}
