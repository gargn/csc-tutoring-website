<?php include('header.php'); ?>
<p>Here there are many short tutorials on various introductory topics. These were originally made as labs for a CPE 105 class, so they may contain questions or activities.

<ul class='tutorials'>
<?php
  if ($handle = opendir('tutorial-papers')) 
  {
    while (false !== ($file = readdir($handle)))
    {
      if ($file !== "." && $file !== "..")
      {
        $files[] = $file;
      }
    }

    closedir($handle);

    sort($files);

    foreach ($files as $file)
    {
      echo "<li><a href=\"tutorial-papers/$file\">$file</a></li>";
    }
  }
?>
</ul>
<?php include('footer.php'); ?>
