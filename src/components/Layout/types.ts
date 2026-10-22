import type {
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";

import type { UserProfile } from "../../pages/Profile/types";

export interface LayoutProps {
  children: ReactNode;
}

export interface InputContextType {
  data: string;
  onDataChange: Dispatch<SetStateAction<string>> | (() => void);
}

export interface UserContextType {
  user: UserProfile | null;
  setUser: Dispatch<SetStateAction<UserProfile | null>>;
}