### How can you implement shared functionality across a component tree?

- generally, i use useState hook if the component tree will be simple and easiest
  if the component tree will more complex and if I have to send props children to parent then I use the most popular state Management Library Redux

### Why is the `useState` hook appropriate for handling state in a complex component?

- `useState` Hook is perfectly designed to manage a complex component because it's provide the simplest way to change state. It maintains the specified state value on each re-rendering of the component and provides a setter function to update that state. It helps manage different types of state inside the component, such as numbers, strings, objects, or arrays, easily and efficiently.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/developer-mahin/Future-Skills.git
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```
