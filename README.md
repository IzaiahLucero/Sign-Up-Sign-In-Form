In order for the form data to be submitted you will need to build the database and update a few files. Below you'll find the various steps you need to take in order to have the application work correctly.

##Digital Ocean Drop Creation
1. Once logged into your Digital Ocean account you'll want to click on the "Create" button and select "Droplets".
2. The default location selected is fine. 
3. Under "Choose Image" you'll want to click on "Marketplace". 
4. In the search field, you'll want to search "Docker" and select "Docker on Ubuntu".
5. Under "CPU options" the default "Premium Intel" is fine but you'll can select the $7/mo option as this applicaiton won't require that much storage. 
6. In the next section you'll select the SSH key for your device. If you haven't added on you can click on the "New SSH Key" and Digital Ocean will walk you through the steps to generating one. 
7. Under the "Finalize Details" section you'll want to update the "Hostname" to be something relevant; when I first create mine I called it "Sign-Up-Sign-In-Form" since this application was going to be the only thing on this droplet. 
8. Final field to check is going to be "Project". You can leave this as the deault or select a project if you created one.
9. Once the droplet has been created you are going to want to take note of your ipv4 address as you'll need this later. 

##Web Storm Deployment Configuration 
1. Once you've copied the project into webstorm you'll want to go to Tools > Deployment > Configuration. 
2. In the deployment you'll want to click on the plus icon in the top left corner. From the list select SFTP. Then in the "New server name" box type in the name of your project. 
3. In the SSH configuration menu select the 3 dots to the right. This will open the SSH configuation window. 
4. In the "Host" field you'll want to enter the ipv4 address that you got from your digital ocean droplet. 
5. In the "Port" field you'll want to type "22" MAKE SURE YOU TYPE IT IN!
6. In the "Username" field you'll type "root" and for "Authentication type" you'll select "OpenSSH config..." 
7. Once you've entered those details go ahead and click on the test connection. 
8. You should get a "Successfully connected" message. Then click "Ok" at the bottom of the window.
9. Once back on the "Deployment" screen you should now see the data you just entered in the SSH configuraiton field. 
10. In the root path you'll want to ensure that it says "/home"
11. Nexxt click on the "Mappings" tab and make that sure BOTH the "Deployment Path" & "Web Path" have a "/".
12. Once you've confirmed that the Deployment & Web Path both have a slash you can click ok. 
Congrats! You've successfully connected to your Digital Ocean Droplet. 
