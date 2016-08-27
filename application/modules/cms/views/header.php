<head>
	<title><?php if(!empty($title)) echo $title; else echo 'Student Portal | NITW'; ?></title>
	<link href="assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="assets/css/google.bootstrap.min.css"  rel="stylesheet">
	<link href="assets/css/offcanvas.css" rel="stylesheet">

	<link href="assets/css/registration/offcanvas.css" rel="stylesheet">
	<link href="assets/css/feedback/offcanvas.css" rel="stylesheet">

	<?php
	if (isset($css)) {
		foreach ($css as $index => $c) {
			?>
			<link href="<?php echo asset_url()."css/".$c; ?>" rel="stylesheet">
			<?php
		}
	}
	?>
	<link href="<?php echo asset_url().'css/registration/introjs.min.css' ?> " rel="stylesheet">
	<link href="<?php echo asset_url().'css/registration/offcanvas.css' ?> " rel="stylesheet">

</head>

