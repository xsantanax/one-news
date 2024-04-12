## Chat Interface

This is a simple web chat interface project designed to showcase frontend engineering experience.

### Live Demo

You can check the app live demo at [https://chat-interface-xsantanax.vercel.app](https://chat-interface-xsantanax.vercel.app).

You can also run it in your machine. First, run the development server. (`npm run dev` or `yarn dev`)

Then, open [http://localhost:3000](http://localhost:3000) in your web browser to see the result.

<!--
### Stack Choices

The following tools have been chosen due to their robustness, simplicity, maintenance, performance, security and scalability.

- [Javascript] - Chosen as language for its compatibility with other chosen frameworks and its widespread use in web development.

- [React](https://react.dev/) - Chosen as the base frontend framework due to its component-based architecture, where each component encapsulates its own logic, state, and rendering behavior. This makes building user interfaces simple, manageable and efficient.

- [Next.js](https://nextjs.org/docs) - Chosen as the React framework because it is designed specifically for serving web applications. It adds server-side rendering and routing capabilities, improving performance and SEO. It is also recommended by React.
  [`(See React recommended frameworks)`](https://react.dev/learn/start-a-new-react-project)

- [TypeScript](https://www.typescriptlang.org/) - Chosen for type safety, which helps catch errors during development and improves code quality and maintainability.

- [ContextAPI](https://react.dev/reference/react/createContext) - Chosen for state management.

- [SASS](https://sass-lang.com) - Chosen for styling due to its features like variables, mixins, nesting, and simpler indentation syntax, which make styling more organized and maintainable.

- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Chosen for testing the application, with Jest as the testing framework (test runner) and React Testing Library for testing React components.

- [Node] - Chosen for creating the API, since it allows for building scalable and efficient server-side applications using JavaScript.

- [MongoDB] - Chosen for database management due to its robustness and scalability, providing efficient handling of complex data structures and seamless integration with Node.js for a streamlined development process.
-->

## System Design

System design is the system to be built, what the system needs to fulfill it's role, its components and how they are connected.

## Architecture

Software architecture is how the system design is implemented. The chosen technologies and why they were chosen.This solution architecture is based on the following requirements:

Functional Requirements

1. User interface (Frontend)
2. Data storage and management (Backend)
3. Testing
4. CI/CD (automatic building, testing and deploying)

Non-Functional Requirements

5. Robustness
6. Security
7. Scalability
8. Maintainability
9. Performance

### 1. Client-Side (Frontend) Architecture:

- [React](https://react.dev/) - Chosen as the base frontend framework for building user interfaces due to its component-based architecture, where each component encapsulates its own logic, state, and rendering behavior. This makes building user interfaces simple, manageable and efficient, bringing simplicity, robustness and scalability to the software.

- [Next.js](https://nextjs.org/docs) - Chosen as the React framework because it is designed specifically for serving web applications. It adds server-side rendering and routing and SEO capabilities, improving performance, scalability and . It is also recommended by React.
  [`(See React recommended frameworks)`](https://react.dev/learn/start-a-new-react-project)

- [TypeScript](https://www.typescriptlang.org/) - Enhances code quality and developer productivity by adding static typing to JavaScript, catching errors during development.

- [ContextAPI](https://react.dev/reference/react/createContext) - Chosen for state management because it provides a centralized way to manage state in React applications using native functions, making data sharing between components more manageable and efficient.

- [SASS](https://sass-lang.com) - A CSS preprocessor that adds features like variables, mixins, and nesting, making styling more organized and maintainable.

### 2. Server-Side (Backend) Architecture:

- [Node] - Chosen for creating the API, since it allows for building scalable and efficient server-side applications using JavaScript.

- [Express] - Chosen for its simplicity and flexibility in building web applications and APIs on top of Node.js. It provides a minimalist framework that allows developers to structure their applications in a modular and organized way.

- [MongoDB] - Chosen for storing and managing data due to its robustness and scalability, with its NoSQL model providing efficient handling of complex data structures and seamless integration with Node.js.

### 3. Testing and Quality Assurance:

- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Chosen for testing the application frontend, with Jest as the testing framework (test runner) and React Testing Library for testing React components, enabling unit tests and integration tests execution and ensuring code reliability and correctness.

- [Vercel Insights] and [Lighthouse] were chosen for performance testing.

<!-- - API Testing: Additional frameworks or tools can be used to test backend API endpoints and functionality, ensuring robustness and stability. -->

### 4. Continuous Integration and Continuous Deployment

- Git - Chosen as Version Control System (VCS) for managing different software versions effectively.

- Github - Chosen as the platform for hosting and sharing repositories, along with managing development and production environments.

- Github Actions - Chosen for automating CI/CD pipelines.

- Vercel has been chosen for managing the CI/CD Pipelines (Continuous Integration and Continuous Deployment Pipelines) using Github Actions, watching updates on Github and automatically building, testing and deploying new pushed versions. This reduces manual errors and improves deployment speed, making software development more reliable, scalable and performant.

(Jenkins could be used instead of Vercel and Github Actions)

<!-- - Docker and Kubernetes: Containerization using Docker and orchestration with Kubernetes facilitate deployment and scalability of containerized applications, improving efficiency and management. -->

### 5. Security:

- HTTPS: Ensures secure communication between clients and servers, preventing data interception and manipulation.

- Data Validation: Validates user input client-side and server-side to prevent malicious data from entering the system, enhancing security and data integrity.

- Authentication and Authorization: Implements mechanisms to authenticate users and authorize access to resources based on roles and permissions, protecting sensitive data.

- MongoDB Security Features: Utilizes access control, authentication mechanisms, and encryption options provided by MongoDB to secure the database and prevent unauthorized access.

### More

This architecture combines frontend and backend technologies effectively, incorporating testing, deployment, and security practices, and focuses on robustness, security, scalability, maintainability, and performance, making it well-suited for developing modern web applications.

The frontend architecture can easily be upgraded to a microfrontend structure as business scales.

Next 14 is used (https://nextjs.org/blog/next-14), which enables features for optimized performance, like Server Components and Server Actions.

The automated tests written are requirement driven, preventing future code changes from affecting business requirements.

The app is 100% responsive for any screen with 360 horizontal pixels or more. [`(Which are all)`](https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide)
