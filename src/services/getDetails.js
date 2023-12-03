export const getDetails = (type, route) => {
  if (route.params) {
    switch (type) {
      case "name":
        return route.params.name;
      case "phone":
        return route.params.phone;
      case "email":
        return route.params.email;
      case "salary":
        return route.params.salary;
      case "picture":
        return route.params.picture;
      case "position":
        return route.params.position;
    }
  }
  return "";
};
