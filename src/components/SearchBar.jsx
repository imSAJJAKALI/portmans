import React, { useState } from 'react';
import styled from 'styled-components';

const DROPDOWN_LINKS = [
  { text: 'Sign In', href: '#' },
  { text: 'Create Account', href: '#' },
  { text: 'Account Help', href: '#' }
];

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = (option) => {
    setSelectedOption(option);
    setIsDropdownVisible(false); // Close the dropdown after selection
  };

  return (
    <ContainerRoot>
      <HamburgerIcon>
        <div>
          {isOpen ? (
            <Cross onClick={toggleMenu}>X</Cross>
          ) : (
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
              <div onClick={toggleMenu}>
                <Line />
                <Line />
                <Line />
              </div>
              <SearchModel onClick={toggleDropdown}>
                <img alt="" src="/svg-6.svg" style={{ height: "20px", width: "20px" }} />
              </SearchModel>
            </div>
          )}
        </div>
      </HamburgerIcon>

      {showSearchInput ? (
        <SearchContainer >
          <input
            type="text"
            placeholder="Search"
            style={{
              border: "none",
              padding: "5px",
              margin: "10px",
              borderBottom: "1px solid black",
            }}
          />
          <div>
            <img alt="" src="/svg-6.svg" style={{ height: "20px", width: "20px",cursor:"pointer" }} onClick={() => setShowSearchInput(false)}/>
          </div>
        </SearchContainer>
      ) : (
        <SearchButton onClick={() => setShowSearchInput(true)}>
          <img alt="" src="/svg-6.svg" style={{ height: "20px", width: "20px" }} />
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>
      )}
      <LogoContainer>
        <img alt="" src="./PortmonLogo.png" style={{ height: "28px", width: "198.4px" }} />
      </LogoContainer>
      <SvgContainer>
        <PersonImg
          alt=""
          src="/svg-8.svg"
          onMouseOver={toggleDropdown}
          onClick={toggleDropdown}
        />
        {isDropdownVisible && (
          <DropdownMenu>
            {DROPDOWN_LINKS.map((link, index) => (
              <DropdownItem key={index} onClick={() => handleDropdownItemClick(link)}>{link.text}</DropdownItem>
            ))}
          </DropdownMenu>
        )}
        <img alt="" src="/svg-9.svg" />
        <img alt="" src="/shopping-cart.svg" />
      </SvgContainer>
    </ContainerRoot>
  );
};

export default SearchBar;

const ContainerRoot = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px 8px 0px;
  box-sizing: border-box;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: left;
  font-size: 14px;
  color: #333333;
  font-family: "Inter Bold", sans-serif;
`;

const SearchButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 25px;
  margin-left: 10px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const SearchButtonText = styled.p`
  margin-left: 5px;
  
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const SvgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 50px;
  margin-right: 20px;
`;

const PersonImg = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
  }
`;
const SearchModel = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }`;
const Line = styled.div`
  width: 20px;
  height: 2px;
  background-color: #333;
  margin: 4px 0;
`;

const Cross = styled.div`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
  padding: 10px;
  @media screen and (max-width: 1024px) {
    display: none;
    margin-bottom: 10px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 5%;
  top: 80%;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const DropdownItem = styled.a`
  display: block;
  padding: 20px;
  color: #333;
  text-decoration: none;
  &:hover {
    background-color: #f0f0f0;
  }
`;
