import { JwtPayload } from "jwt-decode";
import { ReactNode } from "react";

export type TUserData = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export interface ExtendedJwtPayload extends JwtPayload {
  user: TUserData;
  role: string;
}

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem =
  | {
      key: string;
      label?: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};
