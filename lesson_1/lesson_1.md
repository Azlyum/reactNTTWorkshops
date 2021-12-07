
First Lesson

### What is React
React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components.

you need to think of breaking down UI into small chunks, encabulated logic with in components to acheive the UI you want to put on the page 


![alt text](./../public/thinking-in-react-components.png)

in the iamge above you can see this search product card has been broken down into small components to build the UI.
    
### share your screen and show you     

###What is the VDOM 

#### what is the DOM 

DOM stands for “Document Object Model”. The DOM in simple words represents the UI of your application.

Everytime there is a change in the state of your application UI, the DOM gets updated to represent that change. 

Now the catch is frequently manipulating the DOM affects performance, making it slow.


The DOM is represented as a tree data structure. Because of that, the changes and updates to the DOM are fast.

 But after the change, the updated element and it’s children have to be re-rendered to update the application UI. 

The re-rendering or re-painting of the UI is what makes it slow.


### Virtual DOM 


the virtual DOM is only a virtual representation of the DOM. Everytime the state of our application changes, the virtual DOM gets updated instead of the real DOM.


the virtual DOM, which is represented as a tree is created. 

Each element is a node on this tree. If the state of any of these elements changes, a new virtual DOM tree is created. 

This tree is then compared or “diffed” with the previous virtual DOM tree


![alt text](./../public/lnrn_0201.png)

In React every UI piece is a component, and each component has a state. React follows the observable pattern and listens for state changes.

 When the state of a component changes, React updates the virtual DOM tree. 
 
 Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”

#####Once React knows which virtual DOM objects have changed, then React updates only those objects, in the real DOM.

### what is JSX 

```javascript 
const myComponent = props => {
  return <div>I'm JSX!</div>
}
```

very simple functional React component which renders a `<div>` with some text to the screen.

JSX is just syntactical sugar! It doesn't run natively in the browser and React does not depend on it!

### So what does JSX get transpiled to?

```javascript
const myComponent = props => {
  return React.createElement('div', null, "I'm JSX")
}
```

### writing a react component without JSX

 we use a method provided by React: createElement. You therefore need to import React into your JS file.

### create react element explained 

The JSX we write inside the react is often transpiled into a React.createElement() method with the help of babel compiler.

React.createElement() method takes the three arguments type , props ,children.

type: Type of the html element or component (example : h1,h2,p,button, etc).

props: The properties object (example: {style: { color: “red” }} or className or event handlers etc).

children: anything you need to pass between the dom elements.

within the chridren array it you can pass other React.createElement fuctions that return other elements 



```javascript 
const Person = props => {
    return React.createElement('div', {
        className: 'container',
        children: [
          React.createElement('span', null, 'Hello'),
          ' ',
          React.createElement('span', null, 'World'),
        ],
      })
      
}
```

this is a very verbose way to writing a react Component

#### writing a react component with JSX 

```javascript
import React from 'react'

const ComponentWithJSX = () => {
   return(
       <div>this is a Component with JSX</div>
   )
}

export default ComponentWithJSX 
```

with compile to 

```javascript
const myComponent = props => {
  return React.createElement('div', null, "this is a Component with JSX")
}
```

TO DO 

run npm create-react-app test-app 

create one component with createELement 

create one component with a nested Elements

create one component with JSX