Student Portal

How to setup
1. Upload assets/sql/wsdc_student into mysql database @Abhishek
2. Upload assets/sql/wsdc_email_id_table into wsdc_student database (imported in setp 1) @Pravallika
2. copy application/config/database_example.php (do not rename this file, copy and paste) @Vaibhav
3. rename copy of application/config/database_example.php to application/config/database.php
4. enter appropriate mysql username and database name. Update passwords.


How to login to portal
NOTE: A default user is already created

1. username: admin
2. password: password


This doesn't work with Bitnami's LAMP stack. @sushil