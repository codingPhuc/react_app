// export async function userInformation() {
//   const respone = await fetch("http://127.0.0.1:5000/sign-up");
//   const resData = await respone.json();
//   if (!respone.ok) {
//     throw new Error("Failed to fetch places");
//   }
//   return resData.places;
// }
// export async function fetchUserPlaces() {
//   const respone = await fetch("http://localhost:3000/user-places");
//   const resData = await respone.json();
//   if (!respone.ok) {
//     throw new Error("Failed to fetch user places");
//   }
//   return resData.places;
// }
export async function fetchUserTasks(token) {
  const response = await fetch("http://127.0.0.1:5000/tasks/get-tasks", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.error);
  }
  return resData;
}

export async function addUserTasks(text, token) {
  const response = await fetch("http://127.0.0.1:5000/tasks/add-task", {
    // mode: "no-cors",
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      text,
      completed: false,
    }),
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Could not add task");
  }
  return resData.message;
}

export async function deleteUserTasks(taskId, token) {
  const response = await fetch(
    `http://127.0.0.1:5000/tasks/delete-task/${taskId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function updateUserTasks(task, token) {
  const response = await fetch(`http://127.0.0.1:5000/tasks/update-task`, {
    method: "PUT",
    body: JSON.stringify({
      _id: task._id,
      text: task.text,
      completed: task.completed,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.error);
  }
  return resData.message;
}

export async function registerInToUserAccount(userData) {
  const response = await fetch("http://127.0.0.1:5000/sign-up", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message);
  }
  return resData.message;
}

export async function signInToUserAccount(userData) {
  const response = await fetch("http://127.0.0.1:5000/sign-in", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.error);
  }
  return resData.token;
}
