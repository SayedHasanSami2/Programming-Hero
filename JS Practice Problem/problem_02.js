function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  const result = users.filter((user) => user.isActive === true);

  if (result.length === 0) {
    return "Invalid";
  }

  return result;
}