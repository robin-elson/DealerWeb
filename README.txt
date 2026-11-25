HONDA DEALER - VERSI STATIC HTML

Versi ini tidak memakai PHP, MySQL, API, atau database. Bisa dijalankan dengan VS Code Live Server.

CARA MENJALANKAN:
1. Ekstrak folder honda-dealer-static.
2. Buka folder tersebut di VS Code.
3. Pastikan ekstensi Live Server terpasang.
4. Klik kanan index.html > Open with Live Server.

FITUR:
- Halaman dealer responsif
- Katalog mobil dengan pencarian, kategori, dan pengurutan
- Detail mobil
- Simulasi cicilan di browser
- Form konsultasi yang membuka WhatsApp
- Data mobil contoh tertanam di js/app.js

CATATAN:
- Harga dan data mobil merupakan contoh; sesuaikan di js/app.js sebelum dipakai.
- Ganti nomor WhatsApp demo 6281234567890 di js/app.js dengan nomor sales yang benar.
- Foto kendaraan menggunakan URL gambar eksternal sehingga memerlukan koneksi internet.
- Karena ini versi static tanpa backend/database, tidak ada autentikasi server, CRUD server, atau penyimpanan data bersama. Perubahan kode/data dilakukan langsung di file.


IDENTITAS KELOMPOK
Website ini dibuat oleh kelompok:
- Robin Qurnio Elson (231011450470)
- Rayhan Santanu (231011450662)
- Syifa Saesarini
Nama anggota juga ditampilkan pada bagian footer website.

FITUR LAPORAN TAMBAHAN
- Menu Laporan: pilih bulan akhir untuk melihat tiga bulan kalender termasuk bulan pilihan.
- Grafik unit/omzet bulanan, tipe terlaris, peringkat individu dan tim marketing.
- Reward: 30% presensi (total hadir/total hari kerja), 50% penjualan (unit/target 30 unit, maksimum 100%), 20% review (rata-rata tertimbang jumlah review / 5). Kandidat harus memiliki data evaluasi ketiga bulan. Skor sama mendapatkan rekomendasi bersama. Bulan berjalan bersifat sementara.
- Input anggota, transaksi, dan evaluasi bulanan; simpan evaluasi untuk memperbarui bulan dan anggota yang sama. Hapus data melalui riwayat. Ekspor CSV dan cetak laporan.
- Data awal simulasi; tombol Kosongkan data menghapus semua data termasuk anggota, Muat data demo menggantinya dengan simulasi baru. Data tersimpan hanya di localStorage browser. Tidak ada backend atau keamanan admin yang sebenarnya. Untuk produksi, tambahkan autentikasi, database dan validasi server.

HALAMAN ADMIN
- Klik Login di footer untuk masuk sebagai admin atau sales.
- Username: admin
- Password: HondaAdmin123
- Semua laporan dan input internal dipindahkan dari index.html ke admin.html.
- Login demo menggunakan JavaScript dan sessionStorage. Dapat dilewati melalui developer tools; bukan kontrol akses produksi. Jalankan dengan Live Server agar origin penyimpanan konsisten.

VERSI PORTAL SALES
Jalankan index.html melalui Live Server (satu origin/browser untuk admin dan sales).
Admin: admin / HondaAdmin123. Sales demo: andi, bella, citra, dimas / Sales123.
Admin menambah akun lewat Kelola anggota marketing. Sales melakukan check-in sekali per tanggal lokal dan melihat transaksi miliknya per bulan.
Admin mencatat transaksi pembelian terkonfirmasi, memilih sales, memasukkan harga, unit, dan persentase komisi (default 1%). Komisi = harga x unit x tarif / 100. Data demo/lama memakai tarif asumsi 1%. Belum ada proses pencairan.
Reward: absensi efektif = maksimum rekap manual dan jumlah check-in unik bulan tersebut, dibatasi hari kerja; admin harus memasukkan hari kerja serta review bulanan. Bobot lama tetap berlaku.
Data dan login demo hanya di localStorage/sessionStorage, bukan keamanan server. Tidak sinkron antarperangkat. Gunakan data simulasi saja. Reset data menghapus absensi dan akun tambahan.

LOGIN TERPADU
Satu tautan Login di footer membuka login.html. Akun admin diarahkan ke admin.html, akun sales ke sales.html. Logout kembali ke login.html. Akun dan data sebelumnya tetap berlaku.

VERSI PROFESSIONAL
Jalankan index.html dengan Live Server. Login admin / HondaAdmin123; sales andi, bella, citra, dimas / Sales123. Semua data contoh, simpan di browser/origin yang sama.
Admin: sidebar Ringkasan, Akun sales, Stok, Keuangan, Transaksi, Reward, CRM, Ekspor, Laporan 3 bulan. Sales: Ringkasan, CRM, Transaksi, Komisi, Absensi. Pelanggan: menu Booking.
Booking pelanggan adalah permintaan, bukan transaksi final. Sales mengajukan transaksi setelah pembelian dikonfirmasi; admin memverifikasi, stok berkurang, komisi muncul. Admin menyetujui dan menandai komisi dibayar. Invoice dapat dicetak dari transaksi; kode INV dipakai untuk satu review. Tidak ada pembayaran online atau pengiriman notifikasi eksternal.
Stok awal demo 20 unit/model, batas rendah 3. Bonus rekomendasi Rp1 juta, target 10 unit/bulan, hari kerja 22, bobot 30/50/20; dapat diatur. Harga pokok transaksi lama belum diketahui; laba estimasi. Ekspor Excel berbentuk SpreadsheetML .xml; PDF melalui dialog cetak Save as PDF. Jangan memasukkan informasi pribadi nyata. Autentikasi client-side bukan keamanan produksi. Data lama dapat dipertahankan pada origin yang sama; backup manual localStorage sebelum mengganti versi.
