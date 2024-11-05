# PAZ Terazzo Website

A modern React-based website for PAZ Terazzo, showcasing a product catalog with a color filtering feature and additional pages such as Home, About Us, Gallery, and Contact. The project is built using Vite and styled with Tailwind CSS, utilizing ShadCN UI components for enhanced design and user experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

## Overview

PAZ Tiles is a responsive and feature-rich website designed to display tile products. Users can filter products by color using ShadCN UI components, making the browsing experience more interactive and visually appealing.

## Features

- **Product Filtering**: Filter products based on color using a toggle group powered by ShadCN.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.
- **ShadCN UI Components**: Enhanced UI with customizable and accessible components.
- **React Router**: Smooth navigation between different pages.
- **Dynamic Product Data**: Data-driven display of product details and images.

## Screen Shoots
  **Home Page**
  ![Screenshot 2024-11-05 165444](https://github.com/user-attachments/assets/3655d45e-a0ed-420f-a1fe-0e6776edd4c2)

  **About Us Page**
  ![Screenshot 2024-11-05 165454](https://github.com/user-attachments/assets/0f2c30ac-8f5f-4c03-b3e7-e225d72166e8)

  **Product Page**
  ![Screenshot 2024-11-05 165504](https://github.com/user-attachments/assets/fe528761-f627-4a36-bf07-3f982d22198d)

  **Gallery Page**
  ![Screenshot 2024-11-05 165514](https://github.com/user-attachments/assets/b7e7053e-e4c5-4367-b2a6-8f7319c23897)

  **Contact Us Page**
  ![Screenshot 2024-11-05 165524](https://github.com/user-attachments/assets/2533ac8e-5312-4468-8da7-b1d4748bd1b4)

## Live Demo


## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/paz-tiles.git
   cd paz-tiles
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The app will be running at `http://localhost:3000`.

## Usage

1. **Home Page**: View an introduction to PAZ Tiles.
2. **Products Page**: Browse and filter through a selection of tiles by color.
3. **Gallery**: View a collection of tile projects and inspiration.
4. **Contact**: Get in touch with PAZ Tiles using the contact form.

## Project Structure

```plaintext
src
├── components
│   ├── AboutUs.jsx
│   ├── Category.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Gallery.jsx
│   ├── Homepage.jsx
│   ├── Navbar.jsx
│   ├── Product.jsx
│   ├── ProductCategory.jsx
│   └── ProductsPage.jsx
├── data
│   └── productsData.js
├── App.jsx
├── main.jsx
└── product.css
```

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **UI Components**: ShadCN
- **Bundler**: Vite
- **JavaScript Library**: React
- **Styling**: Tailwind CSS, ShadCN UI components

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top of this repository.
2. **Create a New Branch**: `git checkout -b feature-name`
3. **Make Your Changes**: Add your feature or fix a bug.
4. **Commit Your Changes**: `git commit -m 'Add a new feature'`
5. **Push to Your Branch**: `git push origin feature-name`
6. **Create a Pull Request**: Submit your changes for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
