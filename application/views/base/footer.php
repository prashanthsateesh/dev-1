</div> <!-- container close here -->
<div class="row hidden-print well footer-well hidden-xs">
  <div class="container">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <!-- <hr> -->
      <footer>
        <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <strong>Quick Links</strong><br><br>
          <ul type="square" style="margin-left:-1.5em">
            <li><a href="http://www.nitw.ac.in" target="_blank">College main website </a></li>
            <li><a href="http://www.nitw.ac.in/nitw/index.php/home/index.php?option=com_content&view=article&id=607" target="_blank">Fee structure 2014-15 </a></li>
            <li><a href="http://mail.google.com/a/student.nitw.ac.in" target="_blank">Student Webmail</a></li>
            <li><a href="http://www.nitw.ac.in/nitw/index.php?option=com_content&view=article&id=554&amp;Itemid=60" target="_blank">Department Websites</a></li>
            <li><a href="http://www.nitw.ac.in/nitw/index.php/academics/rules" target="_blank">Rules and regulations</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <strong>About Us</strong><br><br>
          <address>
            WSDC Office, <br>
            Level 1, Center for Innovation & Incubation <br>
            NIT Warangal, Telangana - 506004
          </address>
          Drop us an email on
          <a href="mailto:wsdc.nitw@gmail.com">  <span class="glyphicon glyphicon-envelope"></span>  wsdc.nitw@gmail.com</a>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <br><br>
          Read more at  <a href="http://wsdc.nitw.ac.in" target="_blank">wsdc.nitw.ac.in <span class="glyphicon glyphicon-new-window"></span></a>
          <br>
          <span class="glyphicon glyphicon-copyright-mark"></span> <a class="tips" title="Web & Software Development Cell, NIT Warangal" target="_blank" href="http://wsdc.nitw.ac.in/">WSDC, NIT Warangal </a>
        </div>
      </div>

    </footer>
  </div>
</div> <!-- footer container close here -->
</div> <!-- /row with hidden print closes -->


<script type="text/javascript" src="<?php echo asset_url()."js/jquery-1.11.1.min.js"; ?> "></script>
<script type="text/javascript" src="<?php echo asset_url()."js/bootstrap.min.js"; ?> "></script>
<!-- <script src="<?php //echo asset_url()."js/intro.min.js"; ?> "></script> -->
<!--<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.28/angular.min.js" ></script> -->

<script type="text/javascript" src="<?php echo asset_url()."js/offcanvas.js"; ?> "></script>

<?php
if (isset($scripts)) {
  foreach ($scripts as $index => $script) {
    ?>
    <script type="text/javascript" src="<?php echo asset_url()."js/".$script; ?>"></script>
    <?php
  }
}
?>
</body>
</html>


<script src="<?php echo asset_url().'js/angular/angular.min.js' ?>" ></script>
<script src="<?php echo asset_url().'js/slip.js' ?>"></script>
<script src="<?php echo asset_url().'js/offcanvas.js' ?>"></script>
<script src="<?php echo asset_url().'js/home.js' ?>"></script>
<script>
$('#navpop').popover('hide');
</script>
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46078676-2', 'nitw.ac.in');
ga('send', 'pageview');
</script>
