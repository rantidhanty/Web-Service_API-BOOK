// Mengimpor library React dan hook useState dari React
import react ,{useState}from "react";

// Mengimpor komponen Card dari file Card.js
import Card from "./Card";

// Mengimpor library axios untuk melakukan request HTTP
import axios from "axios";

// Mendefinisikan komponen fungsional Main
const Main=()=>{

     // Mendefinisikan state 'search' untuk menyimpan input pencarian, defaultnya adalah string kosong
    const [search,setSearch]=useState("");

     // Mendefinisikan state 'bookData' untuk menyimpan data buku yang diambil dari API, defaultnya adalah array kosong
    const [bookData,setData]=useState([]);

     // Mendefinisikan fungsi searchBook untuk melakukan pencarian buku saat tombol Enter ditekan
    const searchBook=(evt)=>{
         // Mengecek jika tombol yang ditekan adalah Enter
        if(evt.key==="Enter")
        {

            // Menggunakan axios untuk melakukan request ke Google Books API dengan query yang diinputkan pengguna
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')

             // Jika request berhasil, setData digunakan untuk menyimpan hasil pencarian ke state 'bookData'
            .then(res=>setData(res.data.items))

            // Jika terjadi error, cetak error ke konsol
            .catch(err=>console.log(err))
        }
    }

    // Mengembalikan elemen JSX yang akan dirender
    return(
        /* Bagian header dari halaman 
        
        input type="" ... Input untuk memasukkan nama buku, memicu searchBook saat tombol Enter ditekan

        div classname="container"... Bagian container untuk menampilkan kartu buku

        <Card book={bookData}/>... Memanggil komponen Card dan meneruskan data buku sebagai prop */
        <>
            <div className="header">
                <div className="row1">
                    <h1>Buku Adalah Jendela Dunia<br/> Untuk Anak Indonesia</h1>
                </div>
                <div className="row2">
                    <h2>Temukan Buku Favorit Kamu, Disini!</h2>
                    <div className="search">

                        <input type="text" placeholder="Masukan Nama Buku"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyDown={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div> 
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>
            
            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}

// Mengekspor komponen Main sebagai ekspor default dari file
export default Main;

/*
Penjelasan tambahan
1. Komponen Main mengatur pencarian buku melalui input teks dan menampilkan hasilnya dalam bentuk kartu menggunakan komponen Card

2. Fungsi searchBook melakukan permintaan ke Google Books API saat pengguna menekan tombol Enter dalam input pencarian.

3. Hasil pencarian disimpan dalam state bookData dan diteruskan ke komponen Card untuk dirender.
*/