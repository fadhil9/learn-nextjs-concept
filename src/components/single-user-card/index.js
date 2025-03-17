"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions/index";
import { useContext } from "react";
import { UserContext } from "@/context";

function SingleUserCard({ user }) {
  //   console.log(user);
  const { setOpenPopUp, setCurrentEditedId, setNewUserFormData } =
    useContext(UserContext);
  async function handleUserDelete(userId) {
    const result = await deleteUserAction(userId, `/user-management`);
  }
  async function handleUserEdit(currentUser) {
    setOpenPopUp(true);
    setNewUserFormData({
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      email: currentUser?.email,
      address: currentUser?.address,
    });
    setCurrentEditedId(currentUser?._id);
  }
  return (
    <div className="">
      <Card className="bg-gray-200 shadow-gray-700">
        <CardHeader>
          <CardTitle>
            {user.firstName} {user.lastName}
          </CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{user.address}</p>
        </CardContent>
        <CardFooter className="flex justify-end gap-1">
          <Button onClick={() => handleUserEdit(user)}>edit</Button>
          <Button onClick={() => handleUserDelete(user?._id)}>delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SingleUserCard;
