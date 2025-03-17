"use client";
import { createContext, useState } from "react";
import { addNewUserFormInitialState } from "@/utils";

export const UserContext = createContext(null);

export default function UserState({ children }) {
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [OpePopUp, setOpenPopUp] = useState(false);
  const [addNewUserFormData, setNewUserFormData] = useState(
    addNewUserFormInitialState
  );

  return (
    <UserContext.Provider
      value={{
        currentEditedId,
        setCurrentEditedId,
        OpePopUp,
        setOpenPopUp,
        addNewUserFormData,
        setNewUserFormData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
