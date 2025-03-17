import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";

async function UserManagement() {
  const getListUsers = await fetchUsersAction();

  // console.log(getListUsers);

  return (
    <div className="p-20 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {getListUsers?.data?.length > 0
          ? JSON.parse(getListUsers.data).map((user) => (
              <SingleUserCard key={user._id} user={user} />
            ))
          : `no user`}
      </div>
    </div>
  );
}

export default UserManagement;
