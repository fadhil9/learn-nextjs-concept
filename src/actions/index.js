"use server";

import connectToDB from "@/database";

//add new user action
export async function addNewUserAction() {
  await connectToDB;
  try {
    const newlyCreatedUser = await User.create(FormData);
    if (newlyCreatedUser) {
      return { succes: `true`, message: `user added succesfully` };
    }
  } catch (error) {
    console.log(error);
    return {
      succes: "false",
      message: `some error occured please try again!`,
    };
  }
}
//fetch users action
//edit users action
//delete users action
