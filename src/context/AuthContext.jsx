// "use client";

// import { createContext, useContext } from "react";
// import { useSession, signOut, authClient } from "@/lib/auth-client";

// const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   return (
//     <AuthContext.Provider value={{}}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // useAuth — same interface as before so all existing components work unchanged
// export function useAuth() {
//   const { data: session, isPending: loading } = useSession();

//   const user = session?.user
//     ? {
//         id: session.user.id,
//         name: session.user.name,
//         email: session.user.email,
//         photoUrl: session.user.image || "",
//         provider: session.user.provider || "email",
//       }
//     : null;

//   const logout = async () => {
//     await signOut();
//   };

//   // updateUser is handled directly via authClient in the update page
//   // kept here for any component that calls it
//   const updateUser = async ({ name, photoUrl }) => {
//     await authClient.updateUser({ name, image: photoUrl });
//   };

//   return { user, loading, logout, updateUser };
// }

"use client";

import { createContext, useContext } from "react";
import {
  useSession,
  signOut,
  authClient,
} from "@/lib/auth-client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { data: session, isPending: loading } = useSession();

  const user = session?.user
    ? {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        photoUrl: session.user.image || "",
        provider: session.user.provider || "email",
      }
    : null;

  const logout = async () => {
    await signOut();
  };

  const updateUser = async ({ name, photoUrl }) => {
    await authClient.updateUser({
      name,
      image: photoUrl,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}