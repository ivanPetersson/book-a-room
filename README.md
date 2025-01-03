# Project Setup Guide

Follow these steps to set up and run the project:

## Server Setup

1. **Navigate to the Server Directory:**
   Open your IDE terminal and go to `/server`.

2. **Install Dependencies:**
   Run `npm install`.


3. **Configure the Port:**
   Edit the `port` variable in the `index.ts` file.

4. **Run the Server:**
   Start the development server with `npm run dev`.
  
   > **Note:** You may need to uncomment and run the SQL scripts located in `src/db/connection.ts` first (although I dont think you have to).

---

## Client Setup

5. **Open a New Terminal:**
   Open a new terminal window.

6. **Navigate to the Client Directory:**
   Go into `/client`.

7. **Install Dependencies:**
   Run the following command to `npm install` for dependencies.

8. **Configure URLs:**
   Edit the `urls` in the `service/services.js` file to match your selected port number.

9. **Run the Client:**
   Start the client with `npm run dev`.
   
---

## Access the Application

10. **Open the Application:**
    Visit the application in your browser by going to the localhost URL.

---
