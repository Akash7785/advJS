let img = document.getElementById("img");
function getData() {
  return true;
}

let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let data = false;
    data = getData();
    if (data) {
      resolve("Sweet");
    } else {
      reject("Chappal");
    }
  }, 3000);
});

myPromise.then(function (res) {
  console.log("result:", res);
  window.location.href = "bal.html";
  img.src =
    "https://media4.giphy.com/media/zaqclXyLz3Uoo/giphy.gif?cid=ecf05e47vij3bfdexaysf596o431nxei1ixczgyxlbctpjqr&rid=giphy.gif&ct=g";
});

myPromise.catch(function (res) {
  console.log(res);
});

console.log(myPromise);
