<?php
namespace Home\Controller;
use Think\Controller;
<<<<<<< HEAD

class IndexController extends Controller{

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

		
		//$this->assign('firstindex',$firstindex);
		$this->display();
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

    public function log_out(){
    	session('token',null);

    	if (session('?token')) {
    		$this->success('账号退出失败');
    	}else{
    		$this->error('账号退出成功','index/index');
    	}
    }

    public function register(){
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
    	$this->display();
    }
=======
class IndexController extends Controller {
    public function index(){
        $data = M('Cate')->select();
        $this->assign('data',$data);

        $data_store = M('store')->select();
        $feature = M('store')->join('tb_build on tb_build.sid = tb_store.sid')
            ->join(' tb_feature on tb_feature.tid=tb_build.tid')
            ->field('tb_build.content,tb_feature.img_url,tb_build.sid')
            ->select();
        for ($i=0; $i < count($data_store) ; $i++) 
        { 
            foreach ($feature as $value) 
            {
                if($data_store[$i]['sid'] == $value['sid'])
                    $data_store[$i]['feature'][] = $value;
            }
        }
        // echo '<pre>';
        //     print_r($data_store);
        // echo '</pre>';
        $this->assign('data_store',$data_store);
        $this->display();
    }

    public function shop(){
        $goodsdata = M('goods')->join('tb_title on tb_title.title_id = tb_goods.title_id')
        ->field('
            tb_goods.goods_name,
            tb_goods.goods_url,
            tb_goods.title_id,
            tb_goods.goods_reminder,
            tb_goods.goods_price,
            tb_goods.goods_number,
            tb_goods.storage,
            tb_goods.recommend')
        ->select();

        $data_title = M('title')->select();


        for ($i=0; $i < count($data_title) ; $i++) 
        { 
            foreach ($goodsdata as $value) 
            {
                if($data_title[$i]['title_id'] == $value['title_id'])
                    $data_title[$i]['goodsdata'][] = $value;
            }
        }

        // echo '<pre>';
        //     print_r($data_title);
        // echo '</pre>';
        $this->assign('data_title',$data_title);
        // $this->assign('data_title',$data_title);
        $this->display();
    }

}
>>>>>>> 46a7683f785761c8fca4a44fb742d265bcd4b8af

    public function register_submit(){
    	$uname = I('uname');
		$password = md5(I('password'));
		$telephone = I('telephone');
		$nick=I('nick');
		$yanzhengma=I('yanzhengma');
		$yanzhengmaresult=session('yanzhengma');
		if($yanzhengma!=$yanzhengmaresult){
			echo json_encode(array('result'=>'no','id'=>"9"));
			return;
		}

		$arr = array('ru_username'=>$uname);//检查用户名是否重复
			     	if(M('registereduser')->where($arr)->select()){
			     		echo json_encode(array('result'=>'no','id'=>'1'));
						return;
			     	}
		$data=array('ru_username'=>$uname,'ru_telephone'=>$telephone,'ru_password'=>$password,'ru_nick'=>$nick);
			     	if(M('registereduser')->add($data)){
			     		$arr=M('registereduser')->where($arr)->select();
			     		//DUMP($arr);
			     		$uid=$arr[0]['ru_id'];
			     		if($add_token=D('User')->add_token($uid)){
			     			$token=D('User')->get_token($uid);
			     			//dump($token);
			     			session('token',$token[0]['t_token']);
			     			echo json_encode(array('result'=>'ok','token'=>$token));
			     		}
			     		// echo json_encode(array('result'=>'ok'));  
			     		return;
			     	}else{
			     		echo json_encode(array('result'=>'no','id'=>'0'));
			     		return;
			     	}
    }

    public function login(){
    	$ru_name=I('username');
    	$password=I('password');
    	$yanzhengma=I('yanzhengma');
    	$yanzhengmaresult=session('yanzhengma');
    	if($yanzhengma==$yanzhengmaresult){
    		$arr=M('registereduser')->where(array('ru_username'=>$ru_name))->select();
    		//var_dump($arr);
    		$ru_password=$arr[0]['ru_password'];
    		//echo md5($password);
    		if($ru_password==md5($password)){
    			$uid=$arr[0]['ru_id'];
    			$ru_manage=$arr[0]['ru_manage'];
    			if($ru_manage=='1'){
    				echo json_encode(array('result'=>'no','id'=>'1','ru_id'=>$uid));
    			}else{
    				$arrr=M('token')->where(array('t_ru_id'=>$uid))->select();
		    		$passtime=strtotime('+ 1 days');
		    		$token=md5($passtime.$uid);
		    		if(!empty($arrr)){
		    			M('token')->where(array('t_ru_id'=>$uid))->save(array('t_passtime'=>$passtime,'t_token'=>$token));
		    		}else{
		    			M('token')->add(array('t_ru_id'=>$uid,'t_passtime'=>$passtime,'t_token'=>$token));
		    		}
	    			session('token',$token);
    				echo json_encode(array('result'=>'ok','token'=>$token));
    			}
    			
	    		
    			
    		}else{
    			echo json_encode(array('result'=>'no','id'=>'0'));
    		}
    	}else{echo json_encode(array('result'=>'no','id'=>'9'));}
    }

    public function xitongjianjie(){
    	layout(false);
    	$this->display();
    }

    public function xiangguansuanf(){
    	layout(false);
    	$this->display();
    }

    public function contactus(){
    	layout(false);
    	$this->display();
    }
}
