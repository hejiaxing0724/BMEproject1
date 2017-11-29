<?php
namespace Home\Controller;
use Think\Controller;

class InfoController extends Controller{

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
		$cid=I('cid');
		if (empty($cid)) {
			$cid=1;
		}
		$year=M('indexclass')
		->join("hl_indexscore on hl_indexscore.is_ic_id = hl_indexclass.ic_id and hl_indexscore.is_type='0'")
		->where('ic_c_id='.$cid)
		->order('ic_year desc ')->select();

		
		foreach ($year as $key => $value) {
			$arr = M('indexscore')->where(array('is_ic_id'=>$value['is_ic_id'],'is_type'=>'1'))->select();
			
			foreach ($arr as $keyy => $valuee) {
				$year[$key][$keyy+1]=$valuee['is_score'];
			}
		}
	//dump($year);
		$this->assign('arr',$year);
		//$firstindex=M('firstindex')->select();
		$city=M('city')
		->select();
		$yearnow = date('Y',time());
		foreach ($city as $key => $value) {
			$arrrr = M('indexclass')->where(array('ic_c_id'=>$value['c_id'],'ic_year'=>$yearnow))->select();
			$is_ic_id = $arrrr[0]['ic_id'];
			$arrrrrr = M('indexscore')
			->where(array('is_ic_id'=>$is_ic_id,'is_type'=>'0'))
			->select();
			$thisyearscore = $arrrrrr[0]['is_score'];
			$city[$key]['thisyearscore']=$thisyearscore;

		}
		//dump($city);
		$this->assign('cid',$cid);
		$this->assign('city',$city);
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
    public function searchall(){
    	$checklog = $this->log_check();
		if ($checklog==0) {
			$arr=array('result'=>'0');
			
		}else{
			$user=M('registereduser')->where(array('ru_id'=>$checklog))->select();
			$arrr=array('result'=>'1','nick'=>$user[0]['ru_nick']);
			$arr[]=$arrr;
		}
		//身份验证
		    $searchcontent = I('searchcontent');
		    $this->assign('searchcontent',$searchcontent);
		    $arr1=$this->mbStrSplit($searchcontent);
			$arr = '%'.implode('%', $arr1).'%';
		 //sql语句组合   
		    $map['ti_name']=array('like',$arr);
		    $index = M('thirdindex')->where($map)->select();
		    
		    $this->assign('index',$index);

		    $bip['b_text']=array('like',$arr);
		    $blog = M('blog')->where($bip)->select();
		    $this->assign('blog',$blog);
		$this->assign('checklog',$arr);
		$this->display();
    }
//拆分中文字符
    function mbStrSplit ($string, $len=1) {
	  $start = 0;
	  $strlen = mb_strlen($string);
	  while ($strlen) {
	    $array[] = mb_substr($string,$start,$len,"utf8");
	    $string = mb_substr($string, $len, $strlen,"utf8");
	    $strlen = mb_strlen($string);
	  }
	  return $array;
	}
		
		
    public  function secondinfo(){
    	$c_id = I('cid');
    	$year = I('year');
    	$fi_id = I('fi_id');
    	$city = M('city')->where(array('c_id'=>$c_id))->select();
    	$firstindex = M('firstindex')->where(array('fi_id'=>$fi_id))->select();
    	$this->assign('c_name',$city[0]['c_name']);
    	$this->assign('fi_name',$firstindex[0]['fi_name']);
    	$this->assign('year',$year);
    	layout(false);
    	$indexclass = M('indexclass')->where(array('ic_c_id'=>$c_id,'ic_year'=>$year))->select();
    	$ic_id = $indexclass[0]['ic_id'];
    	$index = M('secondindex')
    	->join('hl_thirdindex on hl_thirdindex.ti_si_id = hl_secondindex.si_id')
    	->where(array('si_fi_id'=>$fi_id))
    	->select();
    	foreach ($index as $key => $value) {
    		$arr = M('indexvalue')->where(array('iv_ic_id'=>$ic_id,'iv_ti_id'=>$value['ti_id']))->select();
    		$thirdvalue = $arr[0]['iv_value'];
    		$index[$key]['iv_value'] = $thirdvalue;
    		$arrr = M('indexscore')->where(array('is_ic_id'=>$ic_id,'is_type'=>'2','is_i_id'=>$value['si_id']))->select();
    		$secondscore = $arrr[0]['is_score'];
    		$arrrr = M('indexscore')->where(array('is_ic_id'=>$ic_id,'is_type'=>'3','is_i_id'=>$value['ti_id']))->select();
    		$thirdscore = $arrrr[0]['is_score'];
    		$index[$key]['secondscore'] = $secondscore;
    		$index[$key]['thirdscore'] = $thirdscore;
    	}
    	//dump($index);
    	$this->assign('indexdetail',$index);
    	$this->display();
    }


    
}