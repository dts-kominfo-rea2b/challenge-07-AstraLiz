const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi =="tidak marah") {
      (async () => {
        const jumlahIIX = sum(await promiseTheaterIXX(), emosi);
        const jumlahVGC = sum(await promiseTheaterVGC(), emosi);
        resolve(jumlahIIX + jumlahVGC)
      })();
    } else if (emosi == "marah") {
      (async () => {
        const jumlahIIX = sum(await promiseTheaterIXX(), emosi);
        const jumlahVGC = sum(await promiseTheaterVGC(), emosi);
        resolve(jumlahIIX + jumlahVGC)
      })();
    } else if (emosi == "") {
      reject("Data not Found")
    };
  });
};

function sum(data, emosi) {
  let counter = 0;

  if (emosi == "marah") {
    for (let i= 0; i < data.length; i++) {
      if (data[i].hasil == "marah") {
        counter++
      }
    }
  } else {
  for (let i= 0; i < data.length; i++) {
    if (data[i].hasil == "tidak marah") {
      counter++
    }
  }
}
return counter;
}

module.exports = {
  promiseOutput,
};
