# chat-app

This is a simple chat application built using Socket.io and Node.js. The application allows users to join chat rooms and communicate with each other in real-time.

#### Features

- Real-time messaging: Users can send and receive messages instantly without the need to refresh the page.

- Multiple chat rooms: Users can join different chat rooms and have separate conversations in each room.

- User nicknames: Users can choose a nickname to identify themselves in the chat.

- Join/Leave notifications: When a user joins or leaves a chat room, all other users in the room will receive a notification.

#### Installation

- Download this template from github and open it in your favourite text editor.
- Go inside the folder path and execute the following command:
  ```
       npm install 
  ```

  - In the root directory create a .env file and add the following env variables

  ```
       PORT <= port number of your choice>
  ```

  example :

  ```
       PORT = 3000
  ```

  #### Usage

  - Start the server
    ```
      node server.js
  ```

  - Open your web browser and visit http://localhost:3000.

  - Enter a chat room name and choose a nickname.

  - Share the chat room name and nickname with others who want to join the chat.

  - Start chatting! Messages will be instantly displayed in real-time.