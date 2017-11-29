<?php
namespace Home\Controller;
use Think\Controller;
require './Public/php-sdk-7.0.8/autoload.php';

class MyController extends Controller{
	public function myinfo(){
		$checklog = $this->log_check();
		if ($checklog==0) {
			$arr=array('result'=>'0');
		//dump(session('token'));	
		}else{
			$user=M('registereduser')->where(array('ru_id'=>$checklog))->select();
			$arrr=array('result'=>'1','nick'=>$user[0]['ru_nick']);
			$arr[]=$arrr;
		}
		//dump($arr);
		$this->assign('checklog',$arr);
		//dump($user);
		$this->assign('myinfo',$user);
		$date=$user[0]['ru_time'];
		//var_dump($user);
		$y=substr($date,0,4);
		$m=substr($date,5,2);
		$d=substr($date,8,2);
		$datee=mktime(0,0,0,$m,$d,$y);
		$time=round((time()-$datee)/3600/24);
		//dump($time);
		$this->assign('time',$time);
		$ident=M('identuser')->where(array('iu_id'=>$user[0]['ru_iu_id']))->select();
		$identuser=$ident[0]['iu_name'];
		$this->assign('identuser',$identuser);
		$this->display();
	}
	public function myinfo_modify(){
		$ru_id=$this->log_check();
		$name=I('name');
		$value=I('value');
		if(M('registereduser')->where(array('ru_id'=>$ru_id))->save(array($name=>$value))){
			echo json_encode(array('result'=>'ok'));
		}else{
			echo json_encode(array('result'=>'no'));
		}
	}
	public function log_check(){
    	$token=session('token');
    	$arr=M('token')->where(array('t_token'=>$token))->select();
    	if (empty($arr)) {
    		return 0;
    	}else{
    		$arrr=D('User')->get_token($arr[0]['t_token']);
    		if ($arrr[0]['t_passtime']>time()) {
    			return $arrr[0]['t_ru_id'];
    		}else{
    			return 0;
    		}
    	}

    }

    public function modifypassword(){
    	$oldpassword=md5(I('oldpassword'));
    	$newpassword=md5(I('newpassword'));
    	$ru_id=$this->log_check();
    	$arr=M('registereduser')->where(array('ru_id'=>$ru_id))->select();
    	$ru_password=$arr[0]['ru_password'];

    	if($oldpassword==$ru_password){
    		if(M('registereduser')->where(array('ru_id'=>$ru_id))->save(array('ru_password'=>$newpassword))){
    			echo json_encode(array('result'=>'ok'));
    		}else{
    			echo json_encode(array('result'=>'1'));
    		}
    	}else{
    		echo json_encode(array('result'=>'2'));
    	}
    }

    public function ident(){
    	$checklog = $this->log_check();
		if ($checklog==0) {
			$arr=array('result'=>'0');
		//dump(session('token'));	
		}else{
			$user=M('registereduser')->where(array('ru_id'=>$checklog))->select();
			$arrr=array('result'=>'1','nick'=>$user[0]['ru_nick']);
			$arr[]=$arrr;
		}
		//dump($arr);
		$this->assign('checklog',$arr);
		if(M('daiidentuser')->where(array('diu_ru_id'=>$checklog))->select()){
			$daiident='1';
		}else{
			$daiident='0';
		}
		$this->assign('daiident',$daiident);
		$this->display();
    }
    public function ident_submit(){
    	$diu_ru_id=$this->log_check();
    	$diu_name=I('diu_name');
    	if(M('daiidentuser')->add(array('diu_ru_id'=>$diu_ru_id,'diu_name'=>$diu_name))){
    		echo json_encode(array('result'=>'ok'));
    	}
    }

	public function myblog(){
		$checklog = $this->log_check();
		if ($checklog==0) {
			$arr=array('result'=>'0');
		//dump(session('token'));	
		}else{
			$user=M('registereduser')->where(array('ru_id'=>$checklog))->select();
			$arrr=array('result'=>'1','nick'=>$user[0]['ru_nick']);
			$arr[]=$arrr;
		}
		//dump($arr);
		$this->assign('checklog',$arr);

		$blog = M('blog')
		->order('b_time desc')
		->where(array('b_ru_id'=>$checklog))->select();
		$this->assign('myblog',$blog);
		$this->display();
	}

	public function deleteblog(){
		$b_id = I('b_id');
		if(M('blog')->where(array('b_id'=>$b_id))->delete()){
			echo json_encode(array('result'=>'ok'));
		}
	}

	public function showmyblog(){
		$bucket = 'rockerh';
		$accessKey = '_NhNW58wxLaH6GRQ8otOV1FGt_kWNB3tcNYqGgX_';
		$secretKey = 'uWs52dzbKP-0eKYSGNtfqnzPKGopr_0LjwyA6TVF';
		$auth = new  \Qiniu\Auth($accessKey, $secretKey);
		$upToken = $auth->uploadToken($bucket);
		$uptoken = $auth->uploadToken($bucket, null, 3600);
		$this->assign('value',$uptoken);

		layout(false);

		$b_id = I('b_id');
		$blog = M('blog')->where(array('b_id'=>$b_id))->select();
		$picture = $blog[0]['b_picture'];
		$title = $blog[0]['b_title'];
		$text = $blog[0]['b_text'];
		$b_id = $blog[0]['b_id'];
		$this->assign('picture',$picture);
		$this->assign('title',$title);
		$this->assign('text',$text);
		$this->assign('b_id',$b_id);
		//dump($title);
		$this->display();
	}
	public function modifyblog(){
		$b_id = I('b_id');
		$b_picture = I('b_picture');
		$b_title = I('b_title');
		$b_text = I('b_text');

		if(M('blog')->where(array('b_id'=>$b_id))->save(array('b_picture'=>$b_picture,'b_title'=>$b_title,'b_text'=>$b_text))){
			echo json_encode(array('result'=>'ok'));
		}
		//echo json_encode(array('result'=>$b_id));

	}
}