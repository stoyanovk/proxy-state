import { useStoreSelector } from "../storeExample";

export function UserInfo() {
  const { user } = useStoreSelector(({ user }) => ({ user }));
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
