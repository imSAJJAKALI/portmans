import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";



const Container = styled.div`
    padding:15px ;
    /* border:1px solid green; */
    display: flex;
    gap:20px;
    letter-spacing:0.5px;
    font-size: 17px;
    
`

const MainContainer = styled.div`
  width:100%;
  margin: auto;
  /* border:1px solid red; */
  /* display: flex; */
  /* justify-content: center; */
`;

const DropDown = styled.div`
    position: absolute;
    
    padding:50px; 
    background-color: #806a6a;
    width: 100%;
    height: 86vh;
    left: 0;
    
    display: flex;
    justify-content: space-between;
    .imagecontainer{
        width: 50%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

`

const url='http://49.206.253.146:2109/childCategories?categoryId=3074457345616679204'

const NavigationDropdown = () => {
    const [data,setData] =useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(url);
            setData(response.data); // Update state with the received data
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Call the asynchronous function immediately
      }, [url]); // Add url as a dependency if it's a variable from outside the useEffect
    


  return (
    <MainContainer>
       <Container>
            {data.extraData?.map((el,index)=> <div
             onMouseEnter={() => document.getElementById(`${el.name}`).style.display = 'block'}
             onMouseLeave={() => document.getElementById(`${el.name}`).style.display = 'none'}
            key={index}><a href="">{el.name}</a>
            <DropDownHover childrenData={el} />
            </div> )}
       </Container>
    </MainContainer>
  );
};

export default NavigationDropdown;


const DropDownHover =({childrenData})=>{
 console.log(childrenData?.children)
 console.log(childrenData?.image?.[0])
''
    return(
        <DropDown
        style={{display:'none',}}
        id={childrenData.name}
       >
        <div style={{display:'flex',justifyContent:'space-between'}}>
         <div>
  {childrenData?.children?.map((el, index) => (
    <div key={index}>
      <ul>
        <li>{el.name}</li>
        <ul>
          {el.children?.map((child, i) => (
            <li key={i}>{child.name}</li>
          ))}
        </ul>
      </ul>
    </div>
  ))}
</div>
          {childrenData?.image&&
          <div className="imagecontainer">
            <img src={childrenData?.image?.[0]} alt="" />
          </div>
          }
          </div>
        </DropDown>
    )
}