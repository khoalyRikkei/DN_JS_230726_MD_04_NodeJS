import fs from "fs";

const fileReadSync = fs.readFileSync("./starter/read-this.txt", "utf8");
const fileInputSync = fs.readFileSync("./starter/input.txt", "utf8");

fs.writeFileSync("./starter/final.txt", fileReadSync + "\n" + fileInputSync);

console.log(fileReadSync);
console.log(fileInputSync);

fs.readFile("./starter/read-this.txt", "utf8", (err1, data1) => {
  //   console.log(111, data1); //resolve
  fs.readFile("./starter/input.txt", "utf8", (err2, data2) => {
    const data = data1 + "\n" + data2;

    // console.log(222, data);

    // Tiến hành ghi file -->writeFile
  });
});

const promise1 = new Promise((resolve, reject) => {
  fs.readFile("./starter/read-this.txt", "utf8", (err, data) => {
    if (err) {
      reject(err);
    }

    setTimeout(() => {
      resolve(data);
    }, 5000);
  });
});
const promise2 = new Promise((resolve, reject) => {
  fs.readFile("./starter/read-this.txt", "utf8", (err, data) => {
    if (err) {
      reject(err);
    }
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });
});

promise1.then((res) => {
  //   console.log(33333, res);
});

Promise.all([promise1, promise2])
  .then((res) => {
    console.log(1111, res);
  })
  .catch((err) => {
    console.log();
  });

promiseData();

async function promiseData() {
  try {
    const data1 = await promise1;
    const data2 = await promise2;
    console.log(4444, data1 + data2);
  } catch (err) {}
}
// fs.readFile("./starter/input.txt", "utf8", (err2, data2) => {
//   const data = data1 + "\n" + data2;

//   console.log(222, data);
// });
