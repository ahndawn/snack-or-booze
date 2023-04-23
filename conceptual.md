### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
    It provides declarative routing for React applications. It allows you to define the navigation and routing logic for your application, enabling you to create single-page applications with multiple views or pages that can be dynamically rendered based on the URL.


- What is a single page application?
    It loads a single HTML page and dynamically updates the content as the user interacts with the application, without requiring full page reloads.

- What are some differences between client side and server side routing?
  Client-side routing renders views on the client-side with JavaScript for faster performance and interactivity, but may require more complex code and has SEO considerations. Server-side routing generates complete HTML pages on the server, potentially slower but simpler code, and better for SEO. Choice depends on application requirements.

- What are two ways of handling redirects with React Router? When would you use each?
  Redirect component for declarative redirects within components or routes, and history object for programmatic navigation with more flexibility. Redirect is for handling redirects based on component state or props, while history object is for handling redirects imperatively in response to events or conditions within component's logic.

useHistory hook example
```javascript
  import { useHistory } from 'react-router-dom';

const MyComponent = () => {
  const history = useHistory();

  const handleRedirect = () => {
    // Use push() or replace() to navigate to target route
    history.push('/target-route');
    // or
    history.replace('/target-route');
  };
};
```

Redirect Examples
```Javascript
import { Redirect } from 'react-router-dom';

// Within a component
const MyComponent = () => {
  const shouldRedirect = // determine if redirect is needed
  if (shouldRedirect) {
    return <Redirect to="/target-route" />;
  }
  // ...
};

// Within a route configuration
<Route
  exact
  path="/source-route"
  render={() => <Redirect to="/target-route" />}
/>
```

- What are two different ways to handle page-not-found user experiences using React Router? 
  Using a catch-all route: You can define a catch-all route at the end of your route configuration that acts as a fallback route for any unrecognized URLs. This catch-all route can render a custom 404 page or handle the not-found logic in a designated component.

```Javascript
import { Route, Switch } from 'react-router-dom';

// Define your regular routes first
<Route exact path="/" component={Home} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />

// Define a catch-all route at the end
<Route component={NotFound} />
```

  Using a custom Not Found component within a Switch: You can use a Switch component from React Router to wrap your routes, and render a custom Not Found component within the Switch as the last route.
``` Javascript
import { Route, Switch } from 'react-router-dom';

// Wrap your routes in a Switch component
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route component={NotFound} /> {/* Custom Not Found component */}
</Switch>
```

- How do you grab URL parameters from within a component using React Router?
  Using the useParams hook, which is a hook provided by the react-router-dom library. The useParams hook allows you to access the parameters defined in the URL pattern of the current route.

- What is context in React? When would you use it?
  It is a mechanism that allows data to be passed down through the component tree without the need to pass props explicitly at each level. It is a way to share data between components without going through the intermediate components in the component tree.
  Context is used in React when you have data that needs to be accessed by multiple components at different levels of the component tree. Instead of passing down props from parent to child components through several levels, context can be used to provide the data to all the child components directly, avoiding the prop drilling problem.


- Describe some differences between class-based components and function
  components in React.
  Class-based components and function components are two ways to define components in React. Class-based components are defined using JavaScript classes that extend 'React.Component', while function components are defined as simple JavaScript functions. Class-based components have built-in state management and lifecycle methods, while function components use hooks for state management and lifecycle events. Function components are generally considered more performant, concise, and modern, while class-based components may still be necessary in certain cases.

- What are some of the problems that hooks were designed to solve?
  Hooks were created in React to solve several problems. They make it easier to manage stateful logic in functional components, without the need for complex class-based components or prop drilling. Hooks simplify component lifecycles, reducing confusion and boilerplate code. They also make code more readable and maintainable by providing a more functional and declarative approach to managing state and side effects. In short, hooks are a modern and efficient way to write React components, making them easier to understand, maintain, and share reusable logic.