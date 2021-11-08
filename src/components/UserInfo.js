import { store } from "../storeExample";
import { useStoreSelector } from "../_store";

export function UserInfo() {
  const { user } = useStoreSelector(store, ({ user }) => ({ user }));
  console.log("render UserInfo");

  if (!user) {
    return (
      <div>
        <h3>Select user</h3>
      </div>
    );
  }
  const { name, email } = user;
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
