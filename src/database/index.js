import mongoose from "mongoose";

const connectToDB = async () => {
  const url = `mongodb+srv://fadhilmuhamad272:fadhilmuhamad272@cluster0.seafu.mongodb.net/`;

  mongoose
    .connect(url)
    .then(() => console.log("database connect succes"))
    .catch((e) => console.log(e));
};

export default connectToDB;
