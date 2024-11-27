location ec 2 
  launch vpc 
    - create a security grp 
    inbound http and ssh my ip 
      ec2 launch instance
        amazon lin 2
          create new key pair rsa pem
            select existing sec group
              launch instance
open gitbash -> ssh -i "C:\Users\Deepa\Desktop\deep.pem" ec2-user@3.111.34.203 (write the full path)
create a user and assign them ssmroleforaccess and then security credentials generate access key and secret key for the user
aws configure and type in commands

