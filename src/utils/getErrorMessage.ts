import {AxiosError} from 'axios';

export function getErrorMessage(error: unknown) {
  if (error instanceof AxiosError) {
    const errorData = error.response?.data;
    if (errorData) {
      return String(errorData.message);
    }
    return undefined;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}
