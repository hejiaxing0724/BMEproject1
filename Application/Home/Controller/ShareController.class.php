<?php
namespace Home\Controller;
use Think\Controller;
require './Public/php-sdk-7.0.8/autoload.php';
class ShareController extends Controller{

	public function index(){
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
		$bucket = 'rockerh';
		$accessKey = '_NhNW58wxLaH6GRQ8otOV1FGt_kWNB3tcNYqGgX_';
		$secretKey = 'uWs52dzbKP-0eKYSGNtfqnzPKGopr_0LjwyA6TVF';
		$auth = new  \Qiniu\Auth($accessKey, $secretKey);
		$upToken = $auth->uploadToken($bucket);
		$uptoken = $auth->uploadToken($bucket, null, 3600);
		$this->assign('value',$uptoken);

		$p = I('p');
		if($p==''){
			$p=1;
		}
		$pnumsum = M('blog')->count();
		$pnum = ceil($pnumsum/9);
		
		for ($i=1; $i <=$pnum ; $i++) { 
			$page[$i]['page']=$i;
		}
		$this->assign('page',$page);
		//dump($page);
		$blog = M('blog')
		->order('b_time')
		->page($p.',9')
		->select();
		$this->assign('blog',$blog);
		$this->display();
    }

    public function saveblog(){
    	$b_picture = I('b_picture');
    	$b_title = I('b_title');
    	$b_text = I('b_text');
    	$ru_id = $this->log_check();
    	if(M('blog')->add(array('b_picture'=>$b_picture,'b_title'=>$b_title,'b_text'=>$b_text,'b_ru_id'=>$ru_id))){
    		echo json_encode(array('result'=>'ok'));
    	}
    }
    public function showblog(){
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
    	layout(false);
    	$b_id = I('b_id');
    	$arr = M('blog')->where(array('b_id'=>$b_id))->select();
    	$title = $arr[0]['b_title'];
    	$arrr = M('registereduser')->where(array('ru_id'=>$arr[0]['b_ru_id']))->select();
    	if(empty($arrr[0]['ru_nick'])){
    		$author="无名氏";
    	}else{
    		$author =$arrr[0]['ru_nick'];
    	}
    	$like = $arr[0]['b_like'];
    	$time = $arr[0]['b_time'];
    	$text = $arr[0]['b_text'];
    	$picture = $arr[0]['b_picture'];
    	$this->assign('title',$title);
    	$this->assign('author',$author);
    	$this->assign('like',$like);
    	$this->assign('time',$time);
    	$this->assign('text',$text);
    	$this->assign('picture',$picture);
    	$this->assign('b_id',$b_id);

    	$comment = M('comment')->where(array('co_b_id'=>$b_id))->select();
    	foreach ($comment as $key => $value) {
    		$comment[$key]['loft'] = $key+1;
    		$ru = M('registereduser')->where(array('ru_id'=>$value['co_ru_id']))->select();
    		if(empty($ru[0]['ru_nick'])){
    		$nick="无名氏";
	    	}else{
	    		$nick =$ru[0]['ru_nick'];
	    	}
	    	$comment[$key]['nick'] = $nick;
    	}
    	$this->assign('comment',$comment);
    	$this->display();
    }

    public function savecomment(){
    	$b_text = I('b_text');
    	$b_id = I('b_id');
    	$b_ru_id = $this->log_check();
    	if(M('comment')->add(array('co_text'=>$b_text,'co_b_id'=>$b_id,'co_ru_id'=>$b_ru_id))){
    		echo json_encode(array('result'=>'ok'));
    	}
    }
    public function dianzan(){
    	$b_id = I('b_id');
    	$likes = M('blog')->where(array('b_id'=>$b_id))->select();
    	$like = $likes[0]['b_like'];
    	if(M('blog')->where(array('b_id'=>$b_id))->save(array('b_like'=>$like+1))){
    		echo json_encode(array('result'=>'ok'));
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
}