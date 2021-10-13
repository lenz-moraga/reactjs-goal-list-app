// import styled from 'styled-components';

/* the use of the styled-components library is merely to create components with their own specific styles since this generates a unique class for that component, i.e. go to inspect the div container of the form in the CourseInput.js file in the browser and you will see a random class selector but unique */

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

import styles from './Button.module.css';

/*in the above import, we had to modify the name of the Button.css file and add the .module. to use the CSS Module library which is included in the create-react-app. this library keeps the CSS in the CSS file, and the js and jsx on the .js files, and also create unique classes for each specific component. i.e. go to the developer tools in the browser and inspect the button, there you will see the Component_class__uniqueID class structure*/

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
