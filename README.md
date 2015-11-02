# csc-tutoring-website

Website for Cal Poly Computer Science Tutoring Center.

Collaborators:
   Nupur Garg
   Kendall Gassner
   Dylan Howell
   Jasper Kahn


Set up instructions:
   Running the local webserver:
         sudo apachectl start          Starts apache web server
         sudo apachectl restart        Restarts apache web server
         sudo apachectl stop           Stops apache web server

   Setting up the repository:
      cd /private/etc/apache2/
      vim httpd.conf                   Open file containing apache config
      find DocumentRoot                Search from DocumentRoot in file

      cd <document-root>               Go to file path set by DocumentRoot
      sudo git clone https://github.com/gargn/csc-tutoring-website.git
