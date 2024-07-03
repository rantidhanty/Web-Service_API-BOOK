// Mengimpor React library untuk digunakan dalam komponen
import React from 'react';

// Mengimpor ReactDOM library untuk merender komponen ke dalam DOM
import ReactDOM from 'react-dom';

// Mengimpor file CSS untuk memberikan gaya pada aplikasi
import './index.css';

// Mengimpor komponen utama aplikasi, App
import App from './App';

// Mengimpor fungsi untuk melaporkan metrik kinerja web vital
import reportWebVitals from './reportWebVitals';

// Merender komponen App ke elemen dengan id 'root' di public/index.html
ReactDOM.render(
  // Menggunakan React.StrictMode untuk mengaktifkan mode ketat yang membantu mendeteksi potensi masalah di aplikasi
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Menentukan elemen DOM tempat aplikasi akan dirender
  document.getElementById('root')
);

//Baris ini memanggil fungsi reportWebVitals tanpa parameter, yang tidak melakukan apapun secara default.
// Mengukur performa aplikasi, hasilnya dapat dikirim ke konsol atau endpoint analitik
reportWebVitals();
