# Dealer Honda Kelompok 15 — GitHub Pages

Website demo akademik berbasis HTML, CSS dan JavaScript. Tidak membutuhkan PHP, Node.js atau database untuk dijalankan.

## Publikasi
1. Buat repository GitHub bernama `dealer-honda` (Public untuk GitHub Free).
2. Ekstrak ZIP dan unggah **isi** ZIP ke root repository, termasuk `index.html`, `admin.html`, `sales.html`, `login.html`, folder `css` dan `js`, serta `.nojekyll` bila tersedia. Jangan unggah ZIP saja.
3. Commit ke branch `main`.
4. Buka Settings → Pages → Build and deployment → Source: Deploy from a branch. Pilih `main` dan `/(root)` lalu Save.
5. Setelah deployment berhasil, buka alamat yang ditampilkan GitHub Pages, biasanya `https://USERNAME.github.io/dealer-honda/`.

## Akun simulasi
- Admin: `admin` / `HondaAdmin123`
- Sales: `andi`, `bella`, `citra`, `dimas` / `Sales123`

## Fitur
Semua fitur Professional dipertahankan: dashboard, akun sales, stok, keuangan, absensi, target, CRM, verifikasi transaksi, komisi, reward, booking, review, ekspor, notifikasi dan invoice. Lihat README.txt untuk detail fitur.

## Batasan penting
- GitHub Pages adalah hosting statis. Login hanya simulasi dan kredensial terlihat pada kode publik. Jangan gunakan data pelanggan, kata sandi asli atau transaksi sungguhan.
- Data localStorage tidak dikirim ke server dan tidak dibagikan antar browser/perangkat. Data pada Live Server lama tidak otomatis pindah ke domain GitHub Pages. Booking dari pelanggan di perangkat lain tidak diterima admin.
- Foto katalog berasal dari URL eksternal dan merupakan ilustrasi, bukan foto model resmi yang terverifikasi. Koneksi internet diperlukan untuk foto eksternal.
- Untuk operasional nyata diperlukan backend, autentikasi dan database dengan kontrol akses server.
- PDF menggunakan dialog cetak, Excel berupa XML. Tidak ada pembayaran online.

## Kelola gambar mobil
Login admin > Gambar mobil. Pilih tipe, unggah JPG/PNG/WebP (maksimum 10 MB, dikompresi otomatis) atau masukkan URL HTTP/HTTPS, lalu simpan. Hapus gambar menampilkan placeholder; Pulihkan bawaan mengembalikan foto asli. Katalog dan detail mobil memakai foto yang sama. Data gambar lokal tidak mengubah file di GitHub dan tidak tersinkron ke pengunjung lain. Untuk perubahan global diperlukan backend penyimpanan atau commit aset dan katalog ke repository.

## Katalog 2026
Foto bersumber dari URL resmi Honda Indonesia; diperlukan internet, server eksternal dapat menolak akses. Hak foto milik pemegang hak masing-masing. Harga referensi OTR Jakarta, bukan penawaran dealer. HR-V SE diganti E+ dan Civic RS diganti RS e:HEV, BR-V menjadi N7X Prestige. ID model tetap sama; laporan lama berdasarkan ID model, bukan varian historis. Gambar kustom lama dapat dipulihkan melalui menu Gambar mobil.
- Satya E CVT: https://servernode01.honda-indonesia.com/brio/variant
- RS CVT: https://servernode01.honda-indonesia.com/wr-v/variant
- E+ CVT: https://www.honda-indonesia.com/index.php/hr-v/variants
- N7X Prestige CVT: https://servernode01.honda-indonesia.com/br-v-n7x/variant
- RS CVT: https://www.honda-indonesia.com/city-hatchback
- RS e:HEV: https://www.honda-indonesia.com/civic

### Slideshow beranda
Login admin → menu Slideshow. Tambah, edit, hapus, nonaktifkan, urutkan slide, ubah durasi 3–30 detik atau pulihkan bawaan. Upload JPG/PNG/WebP maksimal 10 MB atau gunakan URL HTTP(S). Perubahan langsung tersedia di beranda pada origin dan browser yang sama. Data lokal tidak tersinkronisasi ke pengunjung lain di GitHub Pages. Gambar bawaan memakai URL katalog Honda yang memerlukan internet. Tombol navigasi, indikator dan jeda tersedia di beranda.

## Tampilan editorial
Beranda menggunakan logo tengah, menu hamburger dengan panel navigasi, dan tombol Models. Slideshow tetap dikelola dari admin.

## Premium catalogue update (25 November 2026)
17 entries covering 14 Honda model families. Prices are reference OTR Jakarta, not a dealer quotation. e:N1 has no public price; contact dealer. New stock starts at zero. Existing car IDs and saved data are retained. If an earlier slideshow was saved in localStorage, use Slideshow > Pulihkan slide bawaan to activate the new five premium slides. Photos use official external URLs; availability depends on network and host. Three added variants use a placeholder until admin uploads the exact trim photo. Missing specs are marked —. Sources: https://www.honda-indonesia.com/compare and individual product pages.

### Halaman layanan
Booking, pembelian, test drive, servis, review dan stok pelanggan dipindahkan ke `layanan.html`. Akses melalui menu Layanan atau Dealer. Gunakan Live Server agar localStorage dibagikan antarhalaman.

## Pembaruan foto
Gambar cadangan per model menggunakan referensi Honda Indonesia, dealer Honda, Oto.com, Kontan, Jawa Pos, Mobilinanews, Antara, Otohub dan Disway. Foto Brio Satya, Brio RS dan WR-V E merupakan referensi keluarga/varian, bukan jaminan trim, warna atau transmisi persis. URL eksternal membutuhkan internet; aset fisik belum dapat diunduh karena akses jaringan lingkungan pengembangan terbatas. Jika kedua URL gagal, placeholder lokal tetap tampil.

## Panduan dosen
Buka dosen.html atau tautan Panduan Penilaian Dosen pada footer beranda / login. Akun demo bawaan, akses login dengan isian otomatis, dan checklist pengujian tersedia.
