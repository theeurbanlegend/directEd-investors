import { createContext, useContext, useMemo, useState } from "react";
import { Props } from "../types";
import useAuth from "../hooks/useAuth";

interface Profile {
  url: string;
}

export interface UserContext {
  name: string;
  email: string;
  profile: Profile | null;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>;
  getCurrentUser: () => void;
}

const UserContext = createContext<UserContext | null>(null);
UserContext.displayName = "UserContext";

function UserProvider(props: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profile, setProfile] = useState<Profile | null>(null);
  const getCurrentUser = () => {
    const userdata = useAuth();
    const { id, name, email, isExpired } = userdata || {};
    setName(name!);
    setEmail(email!);
  };
  const value = useMemo(
    () => ({
      name,
      email,
      profile,
      setName,
      setEmail,
      setProfile,
      getCurrentUser
    }),
    [name, email, profile]
  );

  return <UserContext.Provider value={value} {...props} />;
}

function useUserContext(): UserContext {
  const context = useContext(UserContext)!;

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
}

export { UserProvider, useUserContext };
