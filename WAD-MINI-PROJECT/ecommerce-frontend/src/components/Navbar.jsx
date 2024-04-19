import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { grey } from "@material-ui/core/colors";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userRedux"; // Import logout action

const Container = styled.div`
  height: 70px;
  background-color: #00308F;
  border-bottom: 2px solid black;
  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  margin-right: 10px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;
  background-color: white;
  justify-content: flex-end; /* Align items to the right side */
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  border: none;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  height: 50px;
  ${mobile({ height: "40px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  position: relative;
  color: #fff;
  &:last-child {
    margin-left: 0;
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Button = styled.button`
  border: none;
  height: 40px;
  padding: 10px 20px;
  margin-right: 20px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  &:hover {
    background-color: #0c312d;
  }

  ${mobile({ padding: "8px 16px" })}
`;

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) =>
    state.cart.products.reduce((total, product) => total + product.quantity, 0)
  );
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    // Perform any additional logout operations (e.g., clear user data from local storage)
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src="https://raw.githubusercontent.com/Nahush18/iCoder/main/latestlogo.png" alt="Logo" />
          </Link>
          <Link to={`/products/men`} style={{ textDecoration: "none",color:"white",marginRight:"10px" }}>
            <span>Men's fashion</span>
          </Link>
          <Link to={`/products/women`} style={{ textDecoration: "none",color:"white",marginRight:"10px" }}>
            <span>Women's fashion</span>
          </Link>
          <Link to={`/products/shoes`} style={{ textDecoration: "none",color:"white" }}>
            <span>Shoes</span>
          </Link>
        </Left>
        <Center>
        
          {/* <SearchContainer>
            <Input placeholder="Search..." />
            <Search style={{ color: "gray", fontSize: 20, marginLeft: 260 }} />
          </SearchContainer> */}
        </Center> 
        {/* Left and Center parts of your navbar */}
        <Right>
          {/* Conditionally render Log In/Log Out buttons */}
          {currentUser ? (
            <Button onClick={handleLogout}>LOG OUT</Button>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <Button>SIGN UP NOW</Button>
                </MenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <Button>LOG IN</Button>
                </MenuItem>
              </Link>
              {/* Use anchor tag for direct redirection */}
              <a href="https://pricewise-india.vercel.app/" style={{ textDecoration: "none" }} target="_blank">
                <MenuItem>
                  <Button>PRICEWISE</Button>
                </MenuItem>
              </a>
            </>
          )}
          {/* Cart icon */}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
