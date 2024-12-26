const cursor = document.querySelector('.cursor');
const trail = document.querySelector('.trail');
let timeout; // Variabel untuk menyimpan timeout
let isVisible = true; // Status untuk menampilkan atau menyembunyikan cursor dan trail

function updateCursorPosition(x, y) {
    // Atur posisi cursor
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    // Atur posisi trail
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;

    // Tampilkan trail dengan efek fade-in
    trail.style.opacity = 1;
    trail.style.transform = 'translate(-50%, -50%) scale(1)'; // Besar saat muncul

    // Hapus timeout sebelumnya jika ada
    clearTimeout(timeout);

    // Setelah 300ms, sembunyikan trail
    timeout = setTimeout(() => {
        trail.style.opacity = 0;
        trail.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Kembali ke ukuran kecil
    }, 300); // Durasi trail terlihat
}

// Event untuk touchmove
document.addEventListener('touchmove', (event) => {
    if (isVisible) {
        const touch = event.touches[0]; // Ambil titik sentuh pertama
        updateCursorPosition(touch.clientX, touch.clientY);
    }
});

// Event untuk touchstart
document.addEventListener('touchstart', (event) => {
    if (isVisible) {
        const touch = event.touches[0]; // Ambil titik sentuh pertama
        updateCursorPosition(touch.clientX, touch.clientY);
    }
});

// Event untuk mousemove
document.addEventListener('mousemove', (event) => {
    if (isVisible) {
        updateCursorPosition(event.clientX, event.clientY);
    }
});

// Event untuk mousedown
document.addEventListener('mousedown', (event) => {
    if (isVisible) {
        updateCursorPosition(event.clientX, event.clientY);
    }
});

// Event untuk touchend dan mouseup
document.addEventListener('touchend', () => {
    if (isVisible) {
        trail.style.opacity = 0;
        trail.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Kembali ke ukuran kecil
    }
});

document.addEventListener('mouseup', () => {
    if (isVisible) {
        trail.style.opacity = 0;
        trail.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Kembali ke ukuran kecil
    }
});

// Event untuk double click
document.addEventListener('dblclick', () => {
    isVisible = !isVisible; // Toggle status tampil/tersembunyi

    // Menampilkan atau menyembunyikan cursor dan trail
    if (isVisible) {
        cursor.style.display = 'block';
        trail.style.display = 'block';
    } else {
        cursor.style.display = 'none';
        trail.style.display = 'none';
    }
});

 function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Set default theme
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('light-theme');
});
 
      function openModal(modalId) {
        document.getElementById(modalId).style.display = "flex";
      }

      function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
      }

      function addToCart(productName, productPrice) {
        const phoneNumber = '6282259866266';
        const message = `Halo, saya ingin membeli produk: ${productName} dengan harga Rp${productPrice}. Apakah stok masih tersedia?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
      }

      function addToCartTl(productName, productPrice) {
        const botUsername = 'm150_pedia_id';
        const message = `Halo, saya ingin membeli produk: ${productName} dengan harga Rp${productPrice}. Apakah stok masih tersedia?`;
        const url = `https://t.me/${botUsername}?start=${encodeURIComponent(message)}`;
        window.location.href = url;
      }

         // Store hours check
      const openHour = 8;
      const closeHour = 23;
      function updateStoreStatus() {
        const now = new Date();
        const currentHour = now.getHours();
        const storeStatus = document.getElementById("storeStatus");
        let isStoreOpen = false;

        if (currentHour >= openHour && currentHour < closeHour) {
          storeStatus.textContent = "Toko sedang buka";
          storeStatus.classList.add("open");
          storeStatus.classList.remove("closed");
          isStoreOpen = true;
        } else {
          storeStatus.textContent = "Toko sedang tutup";
          storeStatus.classList.add("closed");
          storeStatus.classList.remove("open");
        }
        return isStoreOpen;
      }

      window.onload = function() {
        const storeStatus = document.getElementById('storeStatus');
        const isStoreOpen = updateStoreStatus();
        if (!isStoreOpen) {
          storeStatus.style.backgroundColor = '#f2dede';
          storeStatus.style.color = '#a94442';
        } else {
          storeStatus.style.backgroundColor = '#dff0d8';
          storeStatus.style.color = '#3c763d';
        }
      };
      function searchPackage() {
        var input = document.getElementById('searchInput');
        var filter = input.value.toLowerCase();
        var panels = document.getElementsByClassName('panel package');
      
        for (var i = 0; i < panels.length; i++) {
          var panel = panels[i];
          var name = panel.getAttribute('data-name').toLowerCase();
          var description = panel.getAttribute('data-description').toLowerCase();
          
          if (name.includes(filter) || description.includes(filter)) {
            panel.style.display = ''; 
          } else {
            panel.style.display = 'none';
            
          }
        }
      }
      
      document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    // Ambil nilai dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Tampilkan alert dengan informasi yang diisi
    alert(`Nama: ${name}\nEmail: ${email}\nPesan: ${message}`);

    // Reset formulir setelah pengiriman
    this.reset();
});

   // JavaScript untuk mengontrol tampilan form chat
    const chatButton = document.querySelector('.btn-chat-help-pojok-kanan-bawah');
    const chatBox = document.querySelector('.box-chat-help-wa');

    chatButton.addEventListener('click', () => {
        // Toggle tampilan chat box
        chatBox.style.display = chatBox.style.display === 'none' || chatBox.style.display === '' ? 'block' : 'none';
    });

    // Menangani pengiriman form
    document.getElementById('btnFormHelpPojokKananBawah').addEventListener('click', () => {
        const name = document.getElementById('formHelpInputNamePojokKananBawah').value;
        const message = document.getElementById('formHelpTextareaMessagePojokKananBawah').value;

        if (name && message) {
            alert(`Nama: ${name}\nPesan: ${message}`);
            // Reset form setelah pengiriman
            document.getElementById('formHelpInputNamePojokKananBawah').value = '';
            document.getElementById('formHelpTextareaMessagePojokKananBawah').value = '';
        } else {
            alert('Silakan isi semua field!');
        }
    });
