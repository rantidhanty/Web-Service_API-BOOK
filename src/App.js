import React from 'react';

 // Mengimpor komponen Main dari file './Components/Main'
import Main from './Components/Main';

// Mengimpor file CSS untuk styling
//Tanda <> dan </> dalam JSX adalah fragment kosong atau "React Fragment". React Fragment adalah cara untuk mengelompokkan beberapa elemen tanpa menambah elemen ekstra ke dalam DOM. Ini sangat berguna ketika Anda ingin mengembalikan beberapa elemen dari komponen tetapi tidak ingin membungkusnya dalam elemen div atau elemen lain yang tidak diperlukan.
import './Components/style.css';
function App() {
  return (
    <>
      <Main/> {/* Menampilkan komponen Main */}
    </>
  );
}
export default App; // Mengekspor komponen App sebagai default
// Komponen App akan menjadi komponen utama yang di-render oleh React
// Komponen App akan menampilkan komponen Main yang berisi konten utama aplikasi

/*
Penjelasan kode di atas:

1. import React from 'react';: Mengimpor modul React dari pustaka 'react'.
2. import Main from './Components/Main';: Mengimpor komponen Main dari file './Components/Main'. Ini mengizinkan penggunaan komponen Main di dalam komponen App.
3. import './Components/style.css';: Mengimpor file CSS 'style.css' dari direktori './Components'. Ini digunakan untuk menyisipkan stylesheet yang didefinisikan dalam file CSS tersebut ke dalam aplikasi.
4. function App() { ... }: Mendefinisikan komponen App sebagai fungsi komponen yang mengembalikan JSX.
5. <Main/>: Memasukkan komponen Main di dalam elemen JSX. Hal ini akan menampilkan konten yang didefinisikan dalam komponen Main.
6. export default App;: Mengekspor komponen App sebagai komponen default yang dapat digunakan di tempat lain dalam aplikasi.
*/
