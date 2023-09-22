export const getAllUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("Fetch failed in getAllUsers --- K");

  return res.json();
};
