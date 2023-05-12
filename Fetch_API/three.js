let url1 = "https://kontests.net/api/v1/all";
let url2 = "https://dog.ceo/api/breeds/image/random";

const main1 = async (url1, url2) => {
  let response1 = await fetch(url1);
  let contests = await response1.json();
  console.log(contests);
  console.log(contests.length);

  let ihtml = "";
  for (item in contests) {
    console.log(contests[item]);
    let response2 = await fetch(url2);
    let obj2 = await response2.json();
    let img_url = obj2.message;
    console.log(obj2);
    ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src="${img_url}" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].name}</h5>
                                        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                                        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p>Starts at: ${contests[item].start_time}
                                        <p>Starts at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" class="btn btn-primary my-4" target="_blank">Visit Contest</a>
                                </div>
                        </div>
                `;
  }
  cardContainer.innerHTML = ihtml;
};

main1(url1, url2);
