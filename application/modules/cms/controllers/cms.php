<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Cms extends CI_Controller {

	public function __construct()
	{
			parent::__construct();
			$this->load->model('cmsmodel');
	}

	public function index(){
		$this->render_page('feed');
	}

	function render_page($view, $data=null, $render=false){
        $view_html = array( 
            $this->load->view('header', $data, $render),
            // $this->load->view('hostels/menu/header', $data, $render),
            $this->load->view($view,$data,$render),
            // $this->load->view('hostels/menu/footer', $data),
            // $this->load->view('base/footer', $data, $render)
            );
        
    }
	public function query(){
		$MemberId = $this->session->userdata('user_id');
		$ThreadName = $this->input->post('ThreadName');
		$ThreadTopic = $this->input->post('ThreadTopic');

		$ThreadText = $this->input->post('ThreadText');
		$data = array('MemberId' => $MemberId, 'ThreadName' => $ThreadName, 'ThreadText'=>$ThreadText );
		$this->cmsmodel->query($data);


	}

	public function getqueries(){
		$queries = $this->cmsmodel->getqueries();
		echo json_encode($queries);
	}

	public function like(){
		$v = $this->input->post('like');
		$qid = $this->input->post('qid');
		$l = $this->cmsmodel->like($qid,$v);
		echo json_encode($l);
	}

}
?>