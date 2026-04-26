# Glow Website

This is a responsive e-commerce web application built using React, Typescript and Tailwind CSS. It provides seamless shopping experience with dynamic product listings, authentication and functional cart and wislist systems. Products in this website are fetched from [DummyJSON](https://dummyjson.com/products) while user authentication is handled using [FreeAPI](https://freeapi.hashnode.space/api-guide/apireference/getUserById).

---

## Features

### Product & UI
- Responsive design
- Product listing from API
- Clean and modern UI with Tailwind CSS and shadcn/ui components
- Hover effects and interactive components
- Skeleton loading states during API fetching

### Authentication
- User login and logout functionality
- User data fetched from Free API
- Basic session handling for authenticated users

### Cart Functionality
- Add to cart
- Remove from cart
- Update product quantity
- Dynamic subtotal & total calculation
- Persistent cart using **localStorage**
- Real-time cart updates using global state

### Wishlist Functionality
- Add/remove items to wishlist
- Wishlist persistence using **localStorage**

### State & Architecture
- Global state management using Zustand
- Optimized rendering with React hooks (`useMemo`, `useEffect`)
- Reusable and modular component structure

### UX Enhancements
- Toast notifications for actions
- Smooth navigation with React Router

---

## Technologies Used

- React (with TypeScript)
- Tailwind CSS
- shadcn/ui
- React Router DOM
- Lucid React Icons
- Vite
- Zod (for validation)
- Zustand (state management)
- DummyJSON API (products)
- Free API (user authentication)
- localStorage (cart and wishlist persistence)

---

## Installation

1. Clone the repository
   - git clone [https://github.com/pramms19/typescript-project.git](https://github.com/pramms19/typescript-project.git)
2. Navigate to the project
   - cd typescript-project
3. Install dependencies
   - npm install
4. Run the project
   - npm run dev

## Author
Pramada Shrestha
[https://github.com/pramms19](https://github.com/pramms19)
