<?php
 $gal_folder = $_POST['in_galfolder'].'/'; 
 $gal_Lfolder = $_POST['in_galLfolder'].'/'; 
 
 $gal_folder_min = $_POST['in_galfolder'].'min/'; 
 $gal_Lfolder_min = $_POST['in_galLfolder'].'min/'; 
 
 if (empty($gal_folder)) {
   echo (json_encode('Error'));     
 } else {
 
 $scan = scandir( $gal_folder );
 $scan_min = scandir( $gal_folder_min );
 
 $imgLink_Buff = array();
 $imgLink_Buff_min = array();

 
 for ($i=0; $i<count($scan); $i++) {
	if ($scan[$i] != '.' && $scan[$i] != '..') {
          $imgLink_Buff[$i]= $gal_Lfolder . $scan[$i] ;  
 
       };	          
 };
 
  for ($i=0; $i<count($scan_min); $i++) {
	if ($scan_min[$i] != '.' && $scan_min[$i] != '..') {
          $imgLink_Buff_min[$i]= $gal_Lfolder_min . $scan_min[$i] ;  
 
       };	          
 }; 
 $Link_Buff = array($imgLink_Buff,$imgLink_Buff_min );
 
 
 echo (json_encode($Link_Buff)); 
 };
 
 ?>