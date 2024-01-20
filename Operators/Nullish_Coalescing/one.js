let obj1 = {
  id: 1,
  name: "Vikas",
  age: 0,
  city: "",
  mobile: null,
  is_active: true,
  is_valid: false,
};

console.log(obj1);

// Todo : 0, empty string, false, undefined and null => result : RHS
console.log(obj1.id || 100);
console.log(obj1.name || "XYZ");
console.log(obj1.age || 999);
console.log(obj1.city || "Unknown_City");
console.log(obj1.marks);
console.log(obj1.marks || 1000);
console.log(obj1.mobile || 9876547892);
console.log(obj1.is_active || "Ram");
console.log(obj1.is_valid || "Seeta");

// Todo : It check only for undefined and null => result : RHS
console.log(obj1.id ?? 100);
console.log(obj1.name ?? "XYZ");
console.log(obj1.age ?? 999);
console.log(obj1.city ?? "Unknown_City");
console.log(obj1.marks);
console.log(obj1.marks ?? 1000);
console.log(obj1.mobile ?? 9876547892);
console.log(obj1.is_active ?? "Ram");
console.log(obj1.is_valid ?? "Seeta");