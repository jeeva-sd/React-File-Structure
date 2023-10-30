# Project Name

This project uses React for the front-end, Redux for state management, and a RESTful API for handling data, providing a seamless task management experience.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone the repository to your local machine: [https://github.com/jeeva-sd/React-File-Structure.git](https://github.com/jeeva-sd/React-File-Structure.git)


2. Change to the project directory:
cd React-File-Structure

3. Install dependencies:
npm install

### Usage

1. Start the development server:
npm run dev

2. Open your web browser and navigate to `http://localhost:3333` to view the application.

### Router

The project uses React Router for routing. Routes are defined in the `routes.js` file, and components are wrapped with features such as authentication, error boundaries, and suspense using a custom `wrapRoute` function.

### Sagas

Sagas are used for managing side effects in the application. The root saga, `rootSaga`, combines multiple sagas.

### Slice

A slice named `counterSlice` is defined using Redux Toolkit. It manages the state of a counter and a `post` object with data and request status. The slice also includes configuration for data persistence using `redux-persist`.

## Authors

- [Jeeva B](https://github.com/jeeva-sd)