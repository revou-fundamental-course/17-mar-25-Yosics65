document.addEventListener("DOMContentLoaded", function () {
  // Luas Persegi
  document.getElementById("hitung-luas").addEventListener("click", function () {
    let sisi = parseFloat(document.getElementById("sisi-luas").value);
    let hasilLuas = document.getElementById("hasil-luas");

    if (!isNaN(sisi) && sisi > 0) {
      let luas = sisi * sisi;
      hasilLuas.innerHTML = `
          <p>L = S × S</p>
          <p>L = ${sisi} × ${sisi}</p>
          <p><strong>L = ${luas}</strong></p>
        `;
    } else {
      hasilLuas.innerHTML = `<p style="color: red;">Masukkan angka yang valid!</p>`;
    }
  });

  // Keliling Persegi
  document
    .getElementById("hitung-keliling")
    .addEventListener("click", function () {
      let sisi = parseFloat(document.getElementById("sisi-keliling").value);
      let hasilKeliling = document.getElementById("hasil-keliling");

      if (!isNaN(sisi) && sisi > 0) {
        let keliling = 4 * sisi;
        hasilKeliling.innerHTML = `
          <p>K = 4 × S</p>
          <p>K = 4 × ${sisi}</p>
          <p><strong>K = ${keliling}</strong></p>
        `;
      } else {
        hasilKeliling.innerHTML = `<p style="color: red;">Masukkan angka yang valid!</p>`;
      }
    });

  // Luas Persegi Panjang
  document
    .getElementById("hitung-luas-pp")
    .addEventListener("click", function () {
      let panjang = parseFloat(document.getElementById("panjang").value);
      let lebar = parseFloat(document.getElementById("lebar").value);
      let hasilLuasPP = document.getElementById("hasil-luas-persegi-panjang");

      if (!isNaN(panjang) && panjang > 0 && !isNaN(lebar) && lebar > 0) {
        let luas = panjang * lebar;
        hasilLuasPP.innerHTML = `
          <p>L = P × L</p>
          <p>L = ${panjang} × ${lebar}</p>
          <p><strong>L = ${luas}</strong></p>
        `;
      } else {
        hasilLuasPP.innerHTML = `<p style="color: red;">Masukkan angka yang valid!</p>`;
      }
    });

  // Keliling Persegi Panjang
  document
    .getElementById("hitung-keliling-pp")
    .addEventListener("click", function () {
      let panjang = parseFloat(
        document.getElementById("panjang-keliling").value,
      );
      let lebar = parseFloat(document.getElementById("lebar-keliling").value);
      let hasilKelilingPP = document.getElementById(
        "hasil-keliling-persegi-panjang",
      );

      if (!isNaN(panjang) && panjang > 0 && !isNaN(lebar) && lebar > 0) {
        let keliling = 2 * (panjang + lebar);
        hasilKelilingPP.innerHTML = `
          <p>K = 2 × (P + L)</p>
          <p>K = 2 × (${panjang} + ${lebar})</p>
          <p><strong>K = ${keliling}</strong></p>
        `;
      } else {
        hasilKelilingPP.innerHTML = `<p style="color: red;">Masukkan angka yang valid!</p>`;
      }
    });
});
