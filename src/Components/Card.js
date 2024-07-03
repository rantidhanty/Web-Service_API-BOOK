//import statement
//  Mengimpor library React untuk menggunakan komponen dan hooks.
import React from "react";

//Mengimpor hook useState dari React build untuk Development.
import { useState } from "react/cjs/react.development";

//import Modal from "./Modal";: Mengimpor komponen Modal dari file Modal.js untuk digunakan dalam komponen Card.
import Modal from "./Modal";

//component definition
//const Card = ({ book }) => { ... }: Mendefinisikan komponen fungsional Card yang menerima prop book
const Card = ({ book }) => {

  //state Variabel
  //const [show, setShow] = useState(false);: Mendefinisikan state show untuk mengontrol visibilitas modal, dengan nilai awal false
  const [show, setShow] = useState(false);

  //const [bookItem, setItem] = useState();: Mendefinisikan state bookItem untuk menyimpan item buku yang dipilih.
  const [bookItem, setItem] = useState();

  //debugging
  //console.log(book);: Mencetak nilai book ke konsol untuk tujuan debugging
  console.log(book);

  //Helper Function
  //const formatRupiah = (amount) => { ... }: Fungsi untuk memformat jumlah uang ke dalam format Rupiah
  const formatRupiah = (amount) => {
    if (amount === undefined) return "Harga tidak tersedia";
    amount = parseFloat(amount).toFixed(0);
    return `Rp ${amount.replace(/\B(?=(\d{3})+$)/g, ",")}`;
  };

  
  //Rendering JSX
  //return ( ... ): Mengembalikan elemen JSX yang akan dirender.
  return (

    //book.map((item) => { ... }): Melakukan iterasi melalui array book dan membuat elemen card untuk setiap item buku

    //Tanda <> dan </> dalam JSX adalah fragment kosong atau "React Fragment". React Fragment adalah cara untuk mengelompokkan beberapa elemen tanpa menambah elemen ekstra ke dalam DOM. Ini sangat berguna ketika Anda ingin mengembalikan beberapa elemen dari komponen tetapi tidak ingin membungkusnya dalam elemen div atau elemen lain yang tidak diperlukan.
    <>
      {book.map((item) => {
        //let thumbnail = ...: Mendapatkan thumbnail dan jumlah harga dari item buku.
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        //if (thumbnail !== undefined && amount !== undefined) { ... }: Memastikan bahwa thumbnail dan jumlah harga ada sebelum merender kartu buku.
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            //onClick={() => { setShow(true); setItem(item); }}: Mengatur state show dan bookItem saat kartu diklik untuk menampilkan modal.
            <>
              <div className="card" onClick={() => { setShow(true); setItem(item); }}>
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">{formatRupiah(amount)}</p>
                </div>
              </div>
              <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
            </>
            //<Modal show={show} item={bookItem} onClose={() => setShow(false)} />: Merender komponen Modal dan meneruskan props show, item, dan onClose.
          );
        }
      })}
    </>
  );
};

//Export Statement
//export default Card;: Mengekspor komponen Card sebagai ekspor default dari file
export default Card;