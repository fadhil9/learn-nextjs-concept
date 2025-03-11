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

function AddNewUser() {
  const [OpePopUp, setOpenPopUp] = useState(false);
  const [addNewUserFormData, setNewUserFormData] = useState(
    addNewUserFormInitialState
  );

  console.log(addNewUserFormData);

  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  }

  return (
    <div className="">
      <Button onClick={() => setOpenPopUp(true)}>Add New User</Button>
      <Dialog
        open={OpePopUp}
        onOpenChange={() => {
          setOpenPopUp(false);
          setNewUserFormData(addNewUserFormInitialState);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>add new user to this website</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
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
          </div>
          <DialogFooter>
            <Button
              className="disabled:opacity-55"
              disabled={!handleSaveButtonValid()}
              type="submit"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
