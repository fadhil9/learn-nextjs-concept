"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import {
  addNewUserFormControl,
  addNewUserFormInitialState,
} from "@/utils/index";
import { addNewUserAction } from "@/actions";
import { UserContext } from "@/context";
import { useContext } from "react";
import { updateUserAction } from "@/actions";

function AddNewUser() {
  // console.log(addNewUserFormData);
  const {
    currentEditedId,
    OpePopUp,
    setOpenPopUp,
    addNewUserFormData,
    setNewUserFormData,
    setCurrentEditedId,
  } = useContext(UserContext);

  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  }

  async function handleAddNewUserAction() {
    const result =
      currentEditedId !== null
        ? await updateUserAction(
            currentEditedId,
            addNewUserFormData,
            "/user-management"
          )
        : await addNewUserAction(addNewUserFormData, "/user-management");
    console.log(result);
    if (result.success) {
      setOpenPopUp(false);
    }
  }

  return (
    <div className="">
      <Button onClick={() => setOpenPopUp(true)}>add new user</Button>
      <Dialog
        open={OpePopUp}
        onOpenChange={() => {
          setOpenPopUp(false);
          setNewUserFormData(addNewUserFormInitialState);
          setCurrentEditedId(null);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {currentEditedId == null ? "Add New User" : "Edit User"}
            </DialogTitle>
            <DialogDescription>add new user to this website</DialogDescription>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            {addNewUserFormControl.map((c) => (
              <div className="p-1" key={c.name}>
                <Label htmlFor={c.name} className="text-right m-2">
                  {c.label}
                </Label>
                <Input
                  id={c.name}
                  name={c.name}
                  placeholder={c.placeholder}
                  className="col-span-3"
                  type={c.type}
                  value={addNewUserFormData[c.name]}
                  onChange={(event) =>
                    setNewUserFormData({
                      ...addNewUserFormData,
                      [c.name]: event.target.value,
                    })
                  }
                />
              </div>
            ))}
            <DialogFooter>
              <Button
                className="disabled:opacity-55"
                disabled={!handleSaveButtonValid()}
                type="submit"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
