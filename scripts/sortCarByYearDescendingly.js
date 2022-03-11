function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // kodingan yang di larang
  // result.sort((a, b) => b.year - a.year);

  // note: (kekurangan), jika datanya banyak maka akan semakin lama saat men sorting
  // menggunakan forEach untuk mengulang isi setiap result
  // yang dimana jika datanya 25 akan mengulang 25x
  result.forEach(() => {
    // masuk ke array objek result
    // terus mengulang jika masih true dari awal idex ke 1
    for (let i = 1; i < result.length; i++) {
      // jika isi array result yang key year nya lebih besar (>) dari key year array result sebelumnya
      if (result[i].year > result[i - 1].year) {
        // maka variabel isi akan diisi oleh array sebelumnya
        let tmp = result[i - 1];
        // array sebelumnya akan diisi oleh array sekarang
        result[i - 1] = result[i];
        // array sekarang akan diisi oleh variabel temp
        result[i] = tmp;
      }
    }
  });

  // contoh penjelasan alur pengurutan dari kodingan diatas
  // array num = [0,1]
  // jika num[1] > num[1-1]
  // temp = 0;
  // 0 = 1
  // num[1,1]
  // 1 = 0
  // num [1,0]

  // Rubah code ini dengan array hasil sorting secara descending
  console.log("Setelah di sort descending");
  console.log(result);

  return result;
}
