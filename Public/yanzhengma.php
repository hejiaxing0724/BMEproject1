<?php
function yanzhengma($len){
    header("content-type: image/png");


    // $tst="1234567890abcdefghijklmnopqrsyz";
    // $str='';
    // for($i=0; $i<$len; $i++){
    // 	$p=substr($tst, rand(0,strlen($tst)),1);
    // 	$str.=$p;
    // }  
    $arr=array('一年有多少天'=>365,
        '九+5'=>14,
        '中国有多少个名族'=>56,

        );      

    $question=array_rand($arr);
    $anwser=$arr[$question];
    session_start();
    
   $_SESSION['yanzhengma']=$anwser;
    $len=mb_strlen($question);
    $w=40*$len;
    

    $h=70;

    $img=imagecreate($w,$h);

    $color=imagecolorallocate($img, rand(150,255), rand(150,255), rand(150,255));

    for ($i=0; $i < 5; $i++) { 
    	$color=imagecolorallocate($img, rand(0,149), rand(0,149), rand(0,149));
    	imageline($img, rand(0,$w/2), rand(0,$h/2), rand($w/2,$w), rand($h/2,$h), $color);
    }

    $len=mb_strlen($question,'utf-8');
    for ($i=0; $i <mb_strlen($question) ; $i++) { 
    	$color=imagecolorallocate($img, rand(0,149), rand(0,149), rand(0,149));
    	imagefttext($img, 30, rand(0,40), $i*($w/mb_strlen($question))+rand(10,30), rand(40,$h), $color, 'msyh.ttf', mb_substr($question, $i,1));
    }

    for ($i=0; $i <7; $i++){
        $color=imagecolorallocate($img, rand(0,149), rand(0,149), rand(0,149));
        imagestring($img, 5, rand(0,$w), rand(0,$h), '&', $color);

    }
    
    imagepng($img);

    imagedestroy($img);
 }
$len=8;
yanzhengma($len);


