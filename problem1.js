function studentScore(nama, nilai) {
  if (nilai >= 80 && nilai <= 100) {
    console.log(`Nama: ${nama}`);
    console.log(`Nilai: A`);
  } else if (nilai >= 65 && nilai <= 79) {
    console.log(`Nama: ${nama}`);
    console.log(`Nilai: B+`);
  } else if (nilai >= 50 && nilai <= 64) {
    console.log(`Nama: ${nama}`);
    console.log(`Nilai: B`);
  } else if (nilai >= 35 && nilai <= 49) {
    console.log(`Nama: ${nama}`);
    console.log(`Nilai: C`);
  } else if (nilai >= 0 && nilai <= 34) {
    console.log(`Nama: ${nama}`);
    console.log(`Nilai: D`);
  } else {
    console.log(`Nama: ${nama}`);
    console.log(`Nilai: Invalid`);
  }
}

studentScore('Umar', 60);
studentScore('Sinta', 80);
studentScore('Jaka', 70);
studentScore('Siti', 50);
studentScore('Dani', 120);
studentScore('Dana', 30);
