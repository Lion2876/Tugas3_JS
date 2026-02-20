const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Cek Zodiak Ente!===");

rl.question('Masukkan Tanggal Lahir (1-31): ', (tanggalInput) => {
  rl.question('Masukkan Bulan Lahir (1-12): ', (bulanInput) => {
    
    const tgl = parseInt(tanggalInput);
    const bln = parseInt(bulanInput);

    // 1. Validasi Rentang Bulan
    if (bln < 1 || bln > 12 || isNaN(bln)) {
      console.log("Error: Bulan Cuma 1-12 loh rek!");
      rl.close();
      return;
    }


    const hariMaksimal = new Date(2024, bln, 0).getDate();

    if (tgl < 1 || tgl > hariMaksimal || isNaN(tgl)) {
      console.log(`Error: Tanggal ${tgl} Tidak Ada di Bulan ${bln}. (Maksimal ${hariMaksimal} hari)`);
      rl.close();
      return;
    }

    let zodiak = "";

    
    if ((bln == 3 && tgl >= 21) || (bln == 4 && tgl <= 19)) zodiak = "Aries";
    else if ((bln == 4 && tgl >= 20) || (bln == 5 && tgl <= 20)) zodiak = "Taurus";
    else if ((bln == 5 && tgl >= 21) || (bln == 6 && tgl <= 20)) zodiak = "Gemini";
    else if ((bln == 6 && tgl >= 21) || (bln == 7 && tgl <= 22)) zodiak = "Cancer";
    else if ((bln == 7 && tgl >= 23) || (bln == 8 && tgl <= 22)) zodiak = "Leo";
    else if ((bln == 8 && tgl >= 23) || (bln == 9 && tgl <= 22)) zodiak = "Virgo";
    else if ((bln == 9 && tgl >= 23) || (bln == 10 && tgl <= 22)) zodiak = "Libra";
    else if ((bln == 10 && tgl >= 23) || (bln == 11 && tgl <= 21)) zodiak = "Scorpio";
    else if ((bln == 11 && tgl >= 22) || (bln == 12 && tgl <= 21)) zodiak = "Sagitarius";
    else if ((bln == 12 && tgl >= 22) || (bln == 1 && tgl <= 19)) zodiak = "Capricorn";
    else if ((bln == 1 && tgl >= 20) || (bln == 2 && tgl <= 18)) zodiak = "Aquarius";
    else if ((bln == 2 && tgl >= 19) || (bln == 3 && tgl <= 20)) zodiak = "Pisces";

    console.log("\n--- Hasil ---");
    console.log(`Input: Tanggal ${tgl}, Bulan ${bln}`);
    console.log(`Zodiak Anda: ${zodiak}`);
    
    rl.close();
  });
});