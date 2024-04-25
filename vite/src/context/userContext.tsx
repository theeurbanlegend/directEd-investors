import { createContext, useContext, useMemo, useState } from "react";
import { Props } from "../types";

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
}

const UserContext = createContext<UserContext | null>(null); 
UserContext.displayName = "UserContext";

function UserProvider(props: Props) { 
  const [name, setName] = useState<string>(""); 
  const [email, setEmail] = useState<string>(""); 
  const [profile, setProfile] = useState<Profile | null>(null); 

  const value = useMemo(
    () => ({
      name,
      email,
      profile,
      setName,
      setEmail,
      setProfile
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
