import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import logoImg from "../asserts/logo.jpeg";
const StyledHeader = styled.header`
    background-color: #644930;
`;

const Logo = styled(Link)`
    color: #ffff;
    text-decoration: none;
    display: flex;
    gap: 5px;
    letter-spacing: 1px;
    align-items: center;
    h2 {
        
        font-family: "My Soul", cursive;
        font-weight: 400;
        font-style: normal;
    }
    h2 > span {
        font-family: "Mirza", serif;
        font-weight: 400;
        font-style: normal;
    }

    img {
        width: 40px;
        height: 40px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
`;

const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

export default function Header() {
    const { cartProducts } = useContext(CartContext);
    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={"/"}>
                        <img src="http://localhost:3001/logo.jpeg" alt="logo" />
                        <h2>
                            {" "}
                            <span>C</span>raft C<span>ONNECT</span>
                        </h2>
                    </Logo>
                    <StyledNav>
                        <NavLink href={"/"}>Home</NavLink>
                        <NavLink href={"/products"}>All Products</NavLink>
                        <NavLink href={"/categories"}>Categories</NavLink>
                        <NavLink href={"/account"}>Account</NavLink>
                        <NavLink href={"/cart"}>
                            Cart ({cartProducts.length})
                        </NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}
