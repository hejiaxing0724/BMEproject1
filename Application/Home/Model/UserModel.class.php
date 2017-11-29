<?php
namespace Home\Model;
use Think\Model;
class UserModel extends Model{
	 protected $autoCheckFields=false;
	 public  function get_token($uid){
	 	return M('token')->where('t_ru_id='.intval($uid).' or t_token="'.$uid.'"')->select();
	 }

	 public function add_token($uid){
	 	$passtime=strtotime('+ 1 days');
	 	$arr=array('t_ru_id'=>$uid,'t_token'=>md5($passtime.$uid),'t_passtime'=>$passtime);
	 	 M('token')->add($arr);
	 	 return $this->get_token($uid);
	 }

	

	 public function get_user($token){
	 	$arrr=M('token')->where(array('t_token'=>$token))->select();
	 	$uid=$arrr[0]['t_ru_id'];
	 	$arr=M('registereduser')->where(array('ru_id'=>$uid))->select();
	 	$username=$arr[0];
	 	
	 	return $username;
	 }


}