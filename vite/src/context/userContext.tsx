import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Props } from "../types";
import useAuth from "../hooks/useAuth";

interface Profile {
  url: string;
}

export interface UserContext {
  id: string | null;
  name: string | null;
  email: string | null;
  profile: Profile | null;
  setId: React.Dispatch<React.SetStateAction<string | null>>;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>;
  getCurrentUser: () => void;
}

const UserContext = createContext<UserContext | null>(null);
UserContext.displayName = "UserContext";

function UserProvider(props: Props) {
  const [id, setId] = useState<string | null >(null); 
  const [name, setName] = useState<string | null >(null);
  const [email, setEmail] = useState<string | null >(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const getCurrentUser = () => {
    const userdata = useAuth();
    const { id, name, email, isExpired } = userdata || {};
    setName(name!);
    setEmail(email!);
    setId(id!);
  };
  useEffect(()=>{
    getCurrentUser()
  }, [])
  const value = useMemo(
    () => ({
      name,
      email,
      id, 
      profile,
      setName,
      setId,
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
