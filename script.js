// Looping
let pilihan = true;
while(pilihan) {

    // ambil pilihan player
    let p = prompt('Ayo Pilih Mau Kertas, Batu, Gunting ?');
    // ambil pilihan komputer (menggunakan bilangan random)
    let comp = Math.random();

    if (comp < 0.34) {
        comp = 'kertas';
    } else if ( comp >= 0.34 && comp < 0.67) {
        comp = 'batu';
    } else {
        comp ='gunting';
    }


    //tentukan aturan main
    let hasil = '';

    if ( p== comp) {
        hasil ='Seri';
    } else if ( p == 'kertas') {
        hasil = (comp == 'batu') ? 'Anda Menang' : 'Komputer Menang';
    } else if ( p == 'batu') {
        hasil ( p == 'gunting') ? 'Anda Menang' : 'Komputer Menang' ;
    } else if ( p == 'gunting') {
        hasil ( p == 'kertas') ? 'Anda Menang' : 'Komputer Menang' ;
    } else {
        hasil = 'BISA MAIN GAK!!!!';
    }
    

    // console.log('Anda pilih : ' + p);
    // console.log('Komp pilih : ' + comp);
    // console.log('Hasilnya : ' + hasil);

    //tampilkan hasilnya
    alert('Anda Pilih : ' + p + '\nKomputer Pilih :' + comp + '\nHasilnya : ' + hasil);

    pilihan = confirm ('Mau Main Lagi ?');

}

alert('Terimakasih sudah Main')


