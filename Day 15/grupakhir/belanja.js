class Keranjang {
  constructor(produk, qty, harga) {
    this.produk = produk;
    this.qty = qty;
    this.stock = stock;
    this.harga = harga;
  }
}
let belanja = [
  { produk: "Kemeja Pria", stock: 10, harga: 120000 },
  { produk: "Celana Jeans Pria", stock: 5, harga: 200000 },
  { produk: "Boxer", stock: 15, harga: 50000 },
  { produk: "Batik", stock: 8, harga: 120000 },
];
let tampilanBelanja = "";

belanja.forEach((val, index) => {
  tampilanBelanja +=
    index +
    1 +
    ". " +
    val.produk +
    " Stock " +
    val.stock +
    " Rp.@" +
    val.harga.toLocaleString("id-ID") +
    "\n";
});
let keranjang = [];
let menu = 0;
while (menu != 3) {
  menu = prompt(`
1. menu
2. keranjang
3. exit`);

  if (menu == "1") {
    let option = parseInt(prompt(tampilanBelanja));
    if (option > 0 && option < 5) {
      let item = belanja[option - 1];
      let qty = parseInt(
        prompt(`jumlah barang yang mau dibeli? (stock = ${item.stock})`)
      );
      qty > item.stock || qty < 0
        ? alert("Not Possible")
        : keranjang.push(
            new Keranjang(item.produk, qty, item.stock, item.harga)
          );
    } else if (option == 0) {
    }
  } else if (menu == 2) {
    let listKeranjang = "";
    keranjang.forEach((val, idx) => {
      listKeranjang +=
        idx +
        1 +
        ". " +
        val.produk +
        " quantity " +
        val.qty +
        "(stock: " +
        val.stock +
        ")";
      " Rp.@" + val.harga.toLocaleString("id-ID") + "\n";
    });
    let option2 = 0;
    while (option2 != 2) {
      option2 = parseInt(
        prompt(`
${listKeranjang}
silahkan pilih:
    1. Check Out
    2. Delete
    3. Edit Quantity
    4. Back`)
      );
      switch (option2) {
        case 1:
          let totalHarga = keranjang.reduce((a, b) => {
            b = b.qty * b.harga;
            return (a += b);
          }, 0);
          let bayar = parseInt(
            prompt(`Jumlah yang harus dibayar = ${totalHarga}
        Silahkan masukan uang yang akan anda bayarkan !`)
          );
          if (bayar < totalHarga) {
            alert(`masih kurang ${totalHarga - bayar}
          transaksi gagal`);
          } else if (bayar === totalHarga) {
            alert(`transaksi berhasil`);
            option2 = 10;
          } else {
            alert(`uang anda kelebihan ${bayar - totalHarga}
          kembali akan diserahkan oleh kurir`);
          }
          break;
        case 2:
          let del = parseInt(prompt(`${listKeranjang}`));
          if (del > 0 && del <= keranjang.length) {
            keranjang.splice(del - 1, 1);
          }
          break;
        case 3:
          let edi = parseInt(
            prompt(`
          Silahkan input item yang ingin di rubah jumlahnya
            ${listKeranjang}`)
          );
          let sum = parseInt(
            prompt(
              `${
                keranjang[edi - 1].produk +
                " quantity;" +
                keranjang[edi - 1].qty
              }, enter new quantity! (stock: ${keranjang[edi - 1].stock})`
            )
          );
          if (sum > 0 && sum <= keranjang[edi - 1]) {
            keranjang[edi - 1].qty = sum;
          } else {
            alert("invalid");
          }
      }
    }
  } else if (menu == 3) {
    alert("terima kasih sudah berkunjung");
  }
}
console.log("whatever");
