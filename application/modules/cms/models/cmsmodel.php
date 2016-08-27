<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
* Name:  Ion Auth Model
*
* Author:  Ben Edmunds
* 		   ben.edmunds@gmail.com
*	  	   @benedmunds
*
* Added Awesomeness: Phil Sturgeon
*
* Location: http://github.com/benedmunds/CodeIgniter-Ion-Auth
*
* Created:  10.01.2009
*
* Description:  Modified auth system based on redux_auth with extensive customization.  This is basically what Redux Auth 2 should be.
* Original Author name has been kept but that does not mean that the method has not been modified.
*
* Requirements: PHP5 or above
*
*/

class Cmsmodel extends CI_Model
{

	public function __construct()
	{
		parent::__construct();
		$this->load->database();

	}

	public function query($data){
		$this->db->insert('posts',$data);
	}

	public function getqueries(){
		$this->db->select('*')
				->from('posts')
				->where('status = 1');
		$query = $this->db->get()->result_array();
		return $query;

	}

	public function like($qid,$v){
		$this->db->select('UpVotes, DownVotes')
				->from('posts')
				->where('ThreadId', $qid);
		$q = $this->db->get()->result_array();

		if($v==1){
			$q['UpVotes']++;

		}
		else{
			$q['DownVotes']++;

		}

		$this->db->where('ThreadId', $qid);
		$this->db->update('posts', $q);

		return $q;
	}
}
