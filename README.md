# Project Setup Guide

Follow these steps to set up and run the project:

## Server Setup

1. **Navigate to the Server Directory:**
   Open your IDE’s terminal and go to the `/server` directory:
   ```bash
   cd /server
   ```

2. **Install Dependencies:**
   Run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

3. **Configure the Port:**
   Edit the `port` variable in the `index.ts` file to specify your desired port.

4. **Run the Server:**
   Start the development server with:
   ```bash
   npm run dev
   ```
   > **Note:** If needed, uncomment and run the SQL scripts located in `src/db/connection.ts` (although this is typically not required).

---

## Client Setup

5. **Open a New Terminal:**
   In your IDE, open a new terminal window.

6. **Navigate to the Client Directory:**
   Go to the `/client` directory:
   ```bash
   cd /client
   ```

7. **Install Dependencies:**
   Run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

8. **Configure URLs:**
   Edit the `urls` in the `service/services.js` file to match your selected port number.

9. **Run the Client:**
   Start the development client with:
   ```bash
   npm run dev
   ```

---

## Access the Application

10. **Open the Application:**
    Visit the application in your browser by going to the localhost URL:
    ```bash
    http://localhost:<selected_port_number>
    ```

---
