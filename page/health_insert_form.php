<?php

    $userid=$_SESSION['userid'];
    $parts= $_POST['parts'];
    $date= $_POST['date'];
    $memo= $_POST['memo'];
    $insert_name= $_POST['insert_name'];
    $insert_set= $_POST['insert_set'];
    $insert_weight= $_POST['insert_weight'];
    $insert_reps= $_POST['insert_reps'];

    echo $insert_name;
    echo $insert_set;
    
    // $hash_str = 'password string';
    // $hash = substr(hash('sha256',$hash_str,true),0,32);
    
    // $iv = chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0);

    // $hash_pass = base64_encode(openssl_encrypt($pass,'aes-256-cbc',$hash,OPENSSL_RAW_DATA,$iv));

    // // 복호화
    // // $decrypted = openssl_decrypt(base64_decode($encrypted), 'aes-256-cbc', $password, OPENSSL_RAW_DATA, $iv);

    // $email = $email1 . "@" . $email2;

    // $regist_day = date("Y-m-d");

    // include "../lib/dbconn.php";

    // // 아이디 중복 확인
    // $sql = "SELECT * FROM member WHERE id='$id'";
    // $result = mysqli_query($conn, $sql);
    // $rowNum = mysqli_num_rows($result);

    // // 아이디가 중복일때
    // if($rowNum){
    //     echo("
    //         <script>
    //             alert('해당 아이디가 존재합니다.');
    //             history.back();
    //         </script>
    //     ");

    //     // 중복 되었으니 다음 작업 중지 php종료
    //     exit;
    // }

    // $replace_id = preg_replace("/[^a-zA-Z0-9]/u", "", $id);
    // if(empty($replace_id) && !ctype_alnum($replace_id)){
    //     echo("
    //         <script>
    //             alert('아이디 형식이 옳바르지 않습니다.');
    //             history.back();
    //         </script>
    //     ");
    // }

    // // exit가 안되었다면 신규 id 작업진행
    // $sql = "INSERT INTO member(id, pass, name, email, regist_day, level, point) VALUES('$id','$hash_pass','$name','$email','$regist_day', '9', '0')";

    // mysqli_query($conn, $sql);
    // mysqli_close($conn);

    // echo"
    //         <script>
    //             alert('회원가입이 완료되었습니다.');
    //             window.location.href = '../index.php';
    //         </script>
    //     ";

?>