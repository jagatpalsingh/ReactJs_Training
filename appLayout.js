import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import data from './data.js';
import Card from './Cards.js';

// Styled header component
const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 2rem;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  li {
    margin-left: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #555;
    }
  }
`;

// Styled footer component
const FooterContainer = styled.footer`
  
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Copyright = styled.p`
  margin: 0;
`;

const Header = () => {
    return (
      <HeaderContainer>
        <Logo>Product List</Logo>
        <Navigation>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </Navigation>
      </HeaderContainer>
    );
  };

  const Footer = () => {
    return (
      <FooterContainer>
        <Copyright>&copy; {new Date().getFullYear()} Product List. All rights reserved.</Copyright>
      </FooterContainer>
    );
  };

  const App = () => {
    
    return (
      <div>
        <h1>List of Products</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>Title : {item.title} <br/> Body : {item.body} <br/><br/></li> 
          ))}
        </ul>
      </div>
    );
  };

  const Body = () => {
  return (
    <div>
      {data.map((item) => (
	  <Card     
        key={item.id}
        title={item.title}
        body={item.body}
      /> 
          ))}
    </div>
  );
};

const AppLayout = () => {
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);