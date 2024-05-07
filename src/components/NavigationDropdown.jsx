import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";



const Container = styled.div`
    padding:15px ;
   
    display: flex;
    justify-content:center;
    gap:20px;
    letter-spacing:0.5px;
    font-size: 17px;
    @media(max-width: 1024px){
        display: none;
    }
`

const MainContainer = styled.div`
  width:100%;
  margin: auto;
  /* border:1px solid red; */
  /* display: flex; */
  /* justify-content: center; */
`;

const ListItem = styled.div`

  display: flex;
  justify-content: flex-end;
  padding: 10px; /* Add padding for spacing */
 /* border-left:'2px solid #333' */
  & > div {
    /* border: 1px solid green; */
    padding: 10px; /* Add padding for spacing */
  }

  & ul {
    list-style-type: none; /* Remove default list styles */
    padding: 0; /* Remove default padding */
    margin: 0; /* Remove default margin */
  }

  & ul li {
    text-decoration: none; /* Remove default text decoration */
    margin-bottom: 5px; /* Add margin between list items */
  }
`;

const DropDown = styled.div`
    position: absolute;
    padding:5px 100px; 
    box-sizing: border-box;
    width: 100%;
    height: 86vh;
    left: 0;
    display: flex;
    justify-content: space-between;
    .imagecontainer{
        width: 50%;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:10px;
        img{
            width: 60%;
            height: 60%;
            object-fit: cover;
        }
    }

`

const url = 'http://49.206.253.146:2109/childCategories?categoryId=3074457345616679204'

const NavigationDropdown = () => {
    const [data, setData] = useState([])
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
                {data.extraData?.map((el, index) => <div
                    onMouseEnter={() => document.getElementById(`${el.name}`).style.display = 'block'}
                    onMouseLeave={() => document.getElementById(`${el.name}`).style.display = 'none'}
                    key={index}><a href="" style={{textTransform:'uppercase',textDecoration:'none',color:'#333'}}>{el.name}</a>
                    <DropDownHover childrenData={el} />
                </div>)}
            </Container>
        </MainContainer>
    );
};

export default NavigationDropdown;


const DropDownHover = ({ childrenData }) => {
    console.log(childrenData?.children)
    console.log(childrenData?.image?.[0])

    return (
        <DropDown
            style={{ display: 'none', }}
            id={childrenData.name}
        >
            <div style={{ display: 'flex', padding:'50px',justifyContent:'center'}}>
                <ListItem style={{  display:`${childrenData?.image?.[0]?'block':'flex'}`,gap:`${childrenData?.image?.[0]?'0px':'100px'}`
               
               
                 }}>
                    {childrenData?.children?.map((el, index) => (
                        <div key={index} style={{cursor:'pointer'}} >
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
                </ListItem>
                {childrenData?.image &&  <div style={{border:'1px solid #333',margin:'50px',marginLeft:'150px'}}></div>}
               
                {childrenData?.image &&
                    <div className="imagecontainer" style={{cursor:'pointer'}}>
                        <img src={childrenData?.image?.[0]} alt="" />
                        <h5>{childrenData?.name}</h5>
                    </div>
                }
            </div>
        </DropDown>
    )
}