function fetchUserData() {
  if (!user) {
    var user = "John Doe"; // Hoisted to function scope, not block scope
  }
  console.log(user); // ✅ Prints "John Doe" instead of throwing an error
}

fetchUserData();
