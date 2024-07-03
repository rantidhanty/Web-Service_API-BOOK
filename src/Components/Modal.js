// Mengimpor library React
import react from 'react';

// Mendefinisikan komponen fungsional Modal
// Komponen ini menerima props: show (boolean), item (objek buku), dan onClose (fungsi untuk menutup modal)
const Modal=({show,item,onClose})=>{

    // Jika show adalah false, modal tidak akan ditampilkan (mengembalikan null)
    if(!show)
    {
        return null;
    }

    // Mendapatkan URL thumbnail gambar buku jika ada
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    // Mengembalikan elemen JSX yang akan dirender
    return(
        <>
           /* Overlay untuk modal */
            <div className="overlay">
                <div className="overlay-inner">

                
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">

                    
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            
                            <h1>{item.volumeInfo.title}</h1>

                            
                            <h3>{item.volumeInfo.authors}</h3>

                           
                            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>

                            
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>

                    /* Menampilkan deskripsi buku */
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}

// Mengekspor komponen Modal sebagai ekspor default dari file
export default Modal;