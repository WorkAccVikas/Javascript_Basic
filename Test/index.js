function replaceObject(obj) {
  obj = { value: 100 }; // Reassignment creates a new object
  console.log("Inside function:", obj); // { value: 100 }
}

let data = { value: 10 };
replaceObject(data);
console.log("Outside function:", data); // { value: 10 } (Original object remains unchanged)
