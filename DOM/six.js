let id1 = document.getElementById("id1");
console.log(id1);

console.log(id1.matches(".class"));
console.log(id1.matches(".box"));

let sp_1 = document.getElementById("sp1");
console.log(sp_1);
console.log(sp_1.closest(".box"));
console.log(sp_1.closest("#sp1"));
console.log(id1.contains(sp_1));
console.log(sp_1.contains(sp_1));
console.log(sp_1.contains(id1));

// Todo : matches => T / F
// Todo : contains => T / F
// Todo : closest => return element
