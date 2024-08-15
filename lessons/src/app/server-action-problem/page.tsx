'use client'

import { deleteUser } from "./action";

const getUserId = () => {
  return "current-user"
}
export default function ServerActionProblem() {
  const userId = getUserId()

  return (
    <button onClick={() => deleteUser(userId)}>submit</button>
  );
}
