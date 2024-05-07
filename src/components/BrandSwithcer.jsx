import React from "react";
import styled from "styled-components";

const BrandSwitcher = () => {
  const brands = [
    // { url: "https://portmans.jgl.com.au/", icon: "/svg-2.svg" },
    { url: "https://justjeans.jgl.com.au/", icon: "/svg-1.svg" },
    { url: "https://dotti.jgl.com.au/", icon: "/svg-7.svg" },
    { url: "https://jayjays.jgl.com.au/", icon: "/svg-3.svg" },
    { url: "https://jacquie.jgl.com.au/", icon: "/svg-4.svg" },
  ];

  const handleBrandClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <BrandContainer>
      <BrandsWrapper>
        {brands.map((brand, index) => (
          <BrandItem key={index} onClick={() => handleBrandClick(brand.url)}>
            <BrandIcon src={brand.icon} alt="" />
          </BrandItem>
        ))}
      </BrandsWrapper>
    </BrandContainer>
  );
};

export default BrandSwitcher;

const BrandContainer = styled.div`
  width: 100%;
  height: 44px;
  background-color: #e5e5e5;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`;

const BrandsWrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 40px 40px;
  :hover {
    background-color: white;
  }
`;

const BrandItem = styled.div`
  flex: 1;
  border-left: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 18px 15px 19px;
  min-height: 24px;
  cursor: pointer;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 15px 15px 15px 15px;
  }
`;

const BrandIcon = styled.img`
  width: 100%;
  height: 90%;
  object-fit: contain;
`;
