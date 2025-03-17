"use server";

import connectToDB from "@/database";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

//add new user action
export async function addNewUserAction(FormData, PathToRevalidate) {
  await connectToDB();
  try {
    const newlyCreatedUser = await User.create(FormData);
    if (newlyCreatedUser) {
      revalidatePath(PathToRevalidate);
      return { success: `true`, message: `user added succesfully` };
    }
  } catch (error) {
    console.log(error);
    return {
      success: "false",
      message: `some error occured please try again!`,
    };
  }
}
//fetch users action
export async function fetchUsersAction() {
  await connectToDB();
  try {
    const listOfUser = await User.find({});
    if (listOfUser) {
      return { success: `true`, data: JSON.stringify(listOfUser) };
    }
  } catch (error) {}
}
//edit users action
export async function updateUserAction(
  currentUserId,
  formData,
  PathToRevalidate
) {
  await connectToDB();
  const { firstName, lastName, email, address } = formData;

  try {
    const updateUser = await User.findByIdAndUpdate(
      currentUserId,
      { firstName, lastName, email, address },
      { new: true }
    );

    if (updateUser) {
      revalidatePath(PathToRevalidate);
      return {
        success: true,
        message: currentUserId,
        formData,
      };
    } else {
      console.log("try again edit");
      return {
        success: false,
        message: `update user failed`,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: `some error occured please try again!`,
    };
  }
}
//delete users action
export async function deleteUserAction(currentUserId, PathToRevalidate) {
  await connectToDB();

  try {
    const deleteUser = await User.findByIdAndDelete(currentUserId);
    if (deleteUser) {
      revalidatePath(PathToRevalidate);
      return {
        success: true,
        message: `delete user succesfully`,
      };
    } else {
      return {
        success: false,
        message: `delete user failed`,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: `some error occured please try again!`,
    };
  }
}
