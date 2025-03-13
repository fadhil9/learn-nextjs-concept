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
  } catch (error) {
    console.log(error);
    return {
      success: "false",
      message: `some error occured please try again!`,
    };
  }
}
//edit users action
//delete users action
