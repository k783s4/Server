var config = {};
//PATH to key and certificate for SSL (.pem files)
config.key = "/home/something.pem";
config.cert = "/home/something.pem";
//PATH to certificate and passphrase for SSL (.pfx and string)
config.pfx = "/home/something.pfx";
config.passphrase = "password";
//are tokens sent in by the user processed
config.allowtoken = true;
//is the superuser token allowed
config.SU = true;
//set up an FTP server? (requires FTP addon)
config.FTP = false;
//set up an SSH server (requires SSH addon)
config.SSH = false;
module.exports = config;
