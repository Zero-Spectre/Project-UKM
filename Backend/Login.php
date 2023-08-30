<?php

// var_dump($_POST['nim']);
// var_dump($_POST['nama']);
// var_dump($_POST['contact']);
// var_dump($_POST['jurusan']);
// var_dump($_POST['ukm']);
// var_dump($_POST['password']);

$nama = htmlspecialchars($_POST['nama']);
$nim = htmlspecialchars($_POST['nim']);
$jurusan = htmlspecialchars($_POST['jurusan']);
$ukm = htmlspecialchars($_POST['ukm']);
$contact = htmlspecialchars($_POST['contact']);
$password = htmlspecialchars($_POST['password']);
// status
$status = 0;
// timestamp

// enkripsi
// $passwords = base64_encode($password);
$passwords = md5($password);
// $passwords = crypt($password);

// koneksi
$koneksi = mysqli_connect('localhost','root','','ukm');

$kirim = mysqli_query($koneksi, "INSERT INTO admin VALUES('$nama','$nim','$passwords ','$jurusan','$ukm','$status','$contact','')");
if(!$kirim){
    echo ("Gagal Mengirim");                       
}else{
    echo htmlspecialchars($_POST['contact']);
}

?>