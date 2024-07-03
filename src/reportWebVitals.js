//reportWebVitals adalah alat yang berguna untuk mengumpulkan data kinerja aplikasi web, yang dapat membantu pengembang memahami dan meningkatkan pengalaman pengguna.

// Mendefinisikan fungsi `reportWebVitals` yang menerima parameter `onPerfEntry`
const reportWebVitals = onPerfEntry => {
  // Memeriksa apakah `onPerfEntry` adalah fungsi
  if (onPerfEntry && onPerfEntry instanceof Function) {
      // Mengimpor modul `web-vitals` secara dinamis
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          // Memanggil fungsi metrik web vitals dan meneruskan `onPerfEntry` sebagai callback
          getCLS(onPerfEntry); // Mengukur Cumulative Layout Shift (pergeseran tata letak kumulatif)
          getFID(onPerfEntry); // Mengukur First Input Delay (penundaan input pertama)
          getFCP(onPerfEntry); // Mengukur First Contentful Paint (cat pertama yang memuaskan)
          getLCP(onPerfEntry); // Mengukur Largest Contentful Paint (cat terbesar yang memuaskan)
          getTTFB(onPerfEntry); // Mengukur Time to First Byte (waktu ke byte pertama)
      });
  }
};

// Mengekspor fungsi `reportWebVitals` agar bisa digunakan di file lain
export default reportWebVitals;
