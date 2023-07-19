// Todo :  ! and !!
// Todo : !! used for alternative to Boolean

console.log(`{1} Boolean = ${Boolean(1)}, ! => ${!1}, !! => ${!!1}`);
console.log(`{-1} Boolean = ${Boolean(-1)}, ! => ${!-1}, !! => ${!!-1}`);

console.log(`{"1"} Boolean = ${Boolean("1")}, ! => ${!"1"}, !! => ${!!"1"}`);
console.log(
  `{"-1"} Boolean = ${Boolean("-1")}, ! => ${!"-1"}, !! => ${!!"-1"}`
);

console.log(`{0} Boolean = ${Boolean(0)}, ! => ${!0}, !! => ${!!0}`);
console.log(`{""} Boolean = ${Boolean("")}, ! => ${!""}, !! => ${!!""}`);

console.log(
  `{"Vikas"} Boolean = ${Boolean(
    "Vikas"
  )}, ! => ${!"Vikas"}, !! => ${!!"Vikas"}`
);

console.log(`{[]} Boolean = ${Boolean([])}, ! => ${![]}, !! => ${!![]}`);
console.log(
  `{[1,2]} Boolean = ${Boolean([1, 2])}, ! => ${![1, 2]}, !! => ${!![1, 2]}`
);
console.log(
  `{[{id:1,name:'Ganesh'}]} Boolean = ${Boolean([
    { id: 1, name: "Ganesh" },
  ])}, ! => ${![{ id: 1, name: "Ganesh" }]}, !! => ${!![
    { id: 1, name: "Ganesh" },
  ]}`
);

console.log(`{{}} Boolean = ${Boolean({})}, ! => ${!{}}, !! => ${!!{}}`);
console.log(
  `{{id:1,name:'Ram'}} Boolean = ${Boolean({ id: 1, name: "Ram" })}, ! => ${!{
    id: 1,
    name: "Ram",
  }}, !! => ${!!{ id: 1, name: "Ram" }}`
);

console.log(
  `{null} Boolean = ${Boolean(null)}, ! => ${!null}, !! => ${!!null}`
);
console.log(
  `{undefined} Boolean = ${Boolean(
    undefined
  )}, ! => ${!undefined}, !! => ${!!undefined}`
);

console.log(
  `{true} Boolean = ${Boolean(true)}, ! => ${!true}, !! => ${!!true}`
);
console.log(
  `{false} Boolean = ${Boolean(false)}, ! => ${!false}, !! => ${!!false}`
);
console.log(
  `{NaN} Boolean = ${Boolean(NaN)}, ! => ${!NaN}, !! => ${!!NaN}`
);
