import { useStoreSelector, incCount } from "../storeExample";

export function Counter() {
  const { count, user } = useStoreSelector(({ count, user }) => ({
    count,
    user
  }));
  console.log("render Counter");
  return (
    <div>
      <h3>Counter Value</h3>
      <p>{count}</p>
      <p>{user?.name}</p>
      <button onClick={incCount}>click</button>
    </div>
  );
}
