# Upsell System with Slot Machine (Next.js + Django)

This repository contains a web application composed of two main parts: a **Next.js** frontend application and a **Django** backend application. The main idea is to create an **upsell page** for a fictional e-commerce store, where users can spin a slot machine to win free items, exclusive discounts, etc.

## Project Structure

The project is divided into the following directories:

- **`page/`**: Contains the **Next.js** application (frontend), completely independent from the backend.
- **`admin/`**: Contains the **Django** application (backend), where you can manage slot machine variants, register products, and configure the system.

## Installation and Setup Instructions

### 1. Setting up the Next.js Application

The Next.js application is located inside the **`page/`** folder. Follow the steps below to install dependencies and run the application:

1. Navigate to the Next.js directory:

   ```bash
   cd page
   ```
2. Install the dependencies using the following command. Using `--force` is necessary to ensure that all dependencies are installed correctly:

   ```bash
   npm install --force
   ```
3. After the dependencies are installed, start the Next.js development server:

   ```bash
   npm run dev
   ```
4. The application will be available at `http://localhost:3000`.

### 2. Setting up the Django Application

The Django application is located in the **`admin/`** folder. To set up and run the backend, follow the steps below:

1. Navigate to the Django directory:

   ```bash
   cd admin
   ```
2. Create and activate the virtual environment for Django. On **macOS/Linux**, use `python3` and `pip3` instead of `python` and `pip`:

   ```bash
   python3 -m venv .venv
   source .venv/bin/activate  # For macOS/Linux
   .venv\Scripts\Activate     # For Windows
   ```
3. Install the dependencies for the Django project. On **macOS/Linux**, use `pip3` to install the dependencies:

   ```bash
   pip3 install -r requirements.txt
   ```
4. Run the database migrations:

   ```bash
   python3 manage.py migrate
   ```
5. Start the Django development server:

   ```bash
   python3 manage.py runserver
   ```
6. Access the Django admin panel at `http://localhost:8000/admin` and log in with the configured credentials.

---

### Django Project Structure

The **`admin/`** directory contains the following main files and folders:

- **`manage.py`**: File for running the server and executing administrative commands in Django.
- **`requirements.txt`**: List of required Python dependencies for running the project.
- **`migrations/`**: Folder containing the database migrations.

---

### Contributions

If you wish to contribute to the project, feel free to fork the repository and submit pull requests. Please ensure that your code is working correctly before submitting.
