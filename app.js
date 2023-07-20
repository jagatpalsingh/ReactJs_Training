import React from 'react';
import ReactDOM from 'react-dom/client';

// const targetElement = document.getElementById("root");

// const newParagraph = document.createElement("h1");
// newParagraph.textContent = "This is the dynamically added content.";

// targetElement.appendChild(newParagraph);

const heading1 = React.createElement(
    'h1',
     { id: 'headingFirst', className: 'headingFirstClass' },
      'Hello, This is first heading');
      
const heading2 = React.createElement(
    'h1',
     { id: 'headingSecond', className: 'headingSecondClass' },
      'Hello, This is Second heading');

const mydv = React.createElement(
    'div',
     { id: 'headingThird', className: 'headingThirdClass' },
      [heading1,heading2]);


const Mydv2 = () => {
    return(
        <>
        <div id="div1">DIV1</div>
        <div id="div2">DIV2</div>
        <div id="div3">DIV3</div>
        </>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Mydv2 />);
