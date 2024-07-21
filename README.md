# **React Forms Exercises**

These exercises will give you more practice working with React forms.

-------

### **Testing Requirements**

Make sure both of these apps have tests. Here are the guidelines for testing:

- **Every component needs a smoke + snapshot test.**
- **Critical Business Logic needs tests too**. Use your judgement for this, but make sure you cover core functionality. Examples include: the ability to enter data, submit a form, and have the desired outcome appear in the DOM.


------   


## **Part 1 - Color Box Maker**

Create a new React application, which contains the following components:

***App***

- This component should render the ***BoxList*** component.

***BoxList***

- Place your state that contains all of the boxes here. This component should render all of the ***Box*** components along with the ***NewBoxForm*** component

***Box***

- This component should display a ***div*** with a background color, width and height based on the props passed to it.

***NewBoxForm***

- This component should render a form that when submitted, creates a new ***Box***. You should be able to specify the ***Box***’s width, height, and background color. When the form is submitted, clear the input values.

- When each ***Box*** component is displayed, add a button with the text of “X” next to each ***Box***. When this button is clicked, remove that specific box. This will require you to pass a function down as props - the button **should not** be a separate component, it should be included in the Box component.

---

## **Part 2 - Todo App - List, Add, Remove Todos**

Create a Todo App that allows users to see, add, edit, and remove todos. It should contain the following components.

***App***

- This component should render the ***TodoList*** component

***TodoList***

- This component should render the ***NewTodoForm*** component and should render the list of Todo components. Place your state that contains all of the todos in this component.

***NewTodoForm***

- This component should render a form with one text input for the task to be created. When this form is submitted, a new ***Todo*** component should be created. 

***Todo***

- This component should display a ***div*** with the task of the todo.

- For each Todo component, there should also be a button with the text “X” that when clicked, removes the todo.

---

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
