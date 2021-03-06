<h4>Activation Link</h4>
<p for="email">Please enter your registered email id so we can send you an activation email.</p>
<?php if(!empty($message)) { ?>
<div class="alert alert-danger">
	<?php echo $message;?>
</div>
<?php } ?>
<div class="well google-well">
	<?php echo form_open("auth/activation_mail");?>
	<p>
		<span class="help-block">Registered Email Id:</span>
		<input type="email" id="email" placeholder="Registered email id" class="form-control" name="email"/>
		<small><span class="glyphicon glyphicon-warning-sign"></span> Check your inbox (or spam folder) for activation link</small>
	</p>
	<p><?php echo form_submit(array('class'=>'btn btn-success','name'=>'submit'), 'Get Activation Link');?></p>

	<?php echo form_close();?>
</div>