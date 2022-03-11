function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini

  // kodingan yang di larang
  // cars.filter((car) => car.available === true).forEach((car) => result.push(car));

  // menggunakan perulangan forEach
  // cars.forEach((car)), yaitu car merepresentasikan setiap isi dari cars
  cars.forEach((car) => {
    // cek apakah setiap isi car yang ber key available berisi nilai true?
    // jika iya dimasukan ke dalam result menggunakan push
    car.available == true ? result.push(car) : null;
  });

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  console.log("Setelah di filter available");
  console.log(result);

  return result;
}
