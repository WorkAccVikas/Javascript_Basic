// Todo: solve callback hell and pyramid of DOM
// Todo : Promise Chaining
const loadScript = (src_url) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src_url;
    script.type = "text/javascript";
    document.body.appendChild(script);
    script.onload = () => {
      resolve("Script has been loaded");
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

let p1 = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
);

p1.then((result) => {
  console.log("Resolved Value in first then = ", result);
  return loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
  );
})
  .then((result1) => {
    console.log("Second script ready");
    console.log("Resolved Value in second then = ", result1);
    return loadScript(
      "https://cdnjs.cloudflare1.com/ajax/libs/jquery/3.2.1/jquery.min.js"
    );
  })
  .then((result2) => {
    console.log("Third script ready");
    console.log("Resolved Value in third then = ", result2);
  })
  .catch((err) => {
    console.log("In catch");
  });
