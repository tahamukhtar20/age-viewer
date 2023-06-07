[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  <a href="https://github.com/apache/age/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/apache/age-viewer"/>
  <a href="https://github.com/apache/age/stargazers">
    <img src="https://img.shields.io/github/stars/apache/age-viewer"/>
</p>

# What is Apache-Age Viewer
Apache-Age Viewer is a web based user interface that provides visualization of graph data stored in a postgreSQL database with AGE extension. 
It is graph visualisation tool, for Apache AGE.

This is a sub-project of [the Apache AGE project](https://age.apache.org/#).

# Recommend Node Version & install module

- Node version - ^14.16.0

- Node Module - pm2 

Install latest **pm2** with :
``` npm i pm2 ```


> [pm2](https://www.npmjs.com/package/pm2) is an NPM module to run the project in production mode, and hence is optional for getting started with setting up development environment for Age-Viewer 

# Running Age-Viewer

 - Install the required node modules using  :  
	```npm run setup```
- Run Age-Viewer using : 
```npm run start```

>This will start the age-viewer on http://localhost:3000 if port 3000 is free.

# Newly made changes in the code

- **Drawer Button Placement**: The drawer button has been moved to a better location for improved usability.

- **Query Builder Icon**: The query builder is now represented by an icon and is placed alongside the other drawer buttons. It has a hover effect to maintain consistency with the other buttons, and its functionality remains the same.

- **Copy Icon Spacing**: The copy icon was adjusted to create better spacing around the associated text.

- **Button Appearance**: The buttons have been redesigned to enhance their visual appeal and ensure a cohesive look.

- **Drawer Button Design**: The drawer buttons have received an improved visual design.

- **Font Change**: The font used in the project has been updated to provide a more distinctive look, deviating from the default Bootstrap font.

- **Responsive Connect to Database Frame**: The Connect to Database frame now adjusts its layout based on different screen sizes to ensure responsiveness.

- **Responsive Connection Status**: The connection status component has been made responsive to adapt to various screen sizes.

- **Connection Status Button**: The button used in the connection status component has been replaced with the button from the Connect to Database form, sourced from Ant Design (antd) instead of React Bootstrap. This change was made for consistency and to enhance the modal's appearance.

- **Modal Cross Icon**: The cross icon used in modals has been updated to use the Ant Design (antd) confirm modal for consistent styling, Original was the default JS confirm modal, this change was made for matching the sidebarhome component.

- **Tooltips**: Tooltips have been added to the new buttons as an alternative to displaying the associated text, improving user experience.

- **Editor Component**: The editor component has been restructured to make it more responsive and suitable for smaller screens.

- **Graph Label with Dropdown**: A new graph label has been introduced, which includes a dropdown menu.

- **Responsive FrameHeaderTitle**: The responsive breakpoint for the FrameHeaderTitle component has been changed to accommodate smaller screen sizes.

# How to build using command

- Build the front-end : 
```npm run build-front ```

- Build the back-end :
``` npm run build-back```

- Start the project in production mode :
  ``` 
	pm2 stop ag-viewer-develop

	pm2 delete ag-viewer-develop

	pm2 start ecosystem.config.js

	```

  # How to start using Age-Viewer
 - To start using Age-Viewer we need to have a running postgreSQL database server with Apache Age Extension 
	 ### Setting up the PostgreSQL server with AGE extension
	-  Easiest way  for Windows, Mac-OS and Linux Environment using **Docker**
  
	> Install docker in advance (https://www.docker.com/get-started), install the version compatible with your OS from the provided link.
	
	 **Run Using Docker** :
   
	- Get the docker image - 
	```docker pull apache/age ```
	
	- Create AGE docker container
	```bash
	docker run --name myPostgresDb -p 5455:5432 -e POSTGRES_USER=postgresUser \
	-e POSTGRES_PASSWORD=postgresPW -e POSTGRES_DB=postgresDB -d apache/age
	```
	
	| Docker variables| Description |
	|--|--|
	| ``--name`` | Assign a name to the container |
	|	`-p` |	Publish a container’s port(s) to the host|
	|	``-e``|	Set environment variables|
	|	``-d``|	Run container in background and print container ID|
- To Get the running log of the docker container created - 
`` docker logs --follow myPostgresDb``
- To Get into postgreSQL Shell (There are two ways this can be done) -
	- First get into docker shell using -	`` docker exec -it myPostgresDb bash`` 
	<br>Then get into postgreSQL shell using - `` psql -U postgresUser postgresDB``
	
	OR
	
	- Alternatively postgres shell can also be assessed directly (without getting into the docker shell) -
		`` psql -U postgresUser -d postgresDB -p 5455 -h localhost``
		and put in ``postgresPW`` when prompted for password.
- After logging into postgreSQL shell follow the [Post-Installation](https://github.com/apache/age#post-installation) instruction to create a graph in the database.
### Connect Apache Age-Viewer to PostgreSQL Database
**Initial Connection Layout**
![enter image description here](https://user-images.githubusercontent.com/69689387/211624181-9644f489-1a45-4eed-ac8e-7aaf156b97ea.png)
To Connect to postgreSQL server running from Docker Container
- Connect URL - localhost
- Connect Port - 5455 
- Database Name - postgresDB
- User Name - postgresUser
- Password - postgresPW
> The following field is same as used to make the docker container specified above as flags.



# License

Apache AGE Viewer is licensed under the Apache License, Version 2.0. See LICENSE for the full license text.
