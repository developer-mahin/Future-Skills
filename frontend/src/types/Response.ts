/* eslint-disable @typescript-eslint/no-explicit-any */

type TError = {
  data: {
    data: any;
    errors: any;
    message: boolean;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse = {
  data?: {
    data?: any;
    message: string;
    success: boolean;
  };
  error: TError;
};
