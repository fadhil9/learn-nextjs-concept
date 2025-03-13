"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SingleUserCard({ user }) {
  //   console.log(user);
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
      </Card>
    </div>
  );
}

export default SingleUserCard;
