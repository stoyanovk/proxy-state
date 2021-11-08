import { setUsersList, setUser, useStoreSelector } from "../storeExample";
import { getUsers } from "../api";
import { useEffect } from "react";

export function UserList() {
  const { usersList } = useStoreSelector(({ usersList }) => ({
    usersList
  }));
  useEffect(() => {
    getUsers().then((r) => {
      setUsersList(r);
    });
  }, []);
  console.log("render UserList");
  if (!usersList.length) {
    return (
      <div>
        <h3>User list is empty</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>User list</h3>
      <ul>
        {usersList.map((item) => (
          <li key={item.id} onClick={() => setUser(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
