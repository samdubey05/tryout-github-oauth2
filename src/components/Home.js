import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "../App";


export default function Home() {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  console.log(state.repos)

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    });
  } 

  return (
    <Wrapper>
      <div className="container">
        <button onClick={()=> handleLogout()}>Logout</button>
        <div>
        <div className="content">
          <img src={state.repos[0].owner.avatar_url} alt="Avatar"/>
          <span>{state.repos[0].owner.login}</span>
          {state.repos.map(repo => (
            <div className="card">
              <div><span>Name: </span><span>{repo.name}</span></div>
              <div><span>Description: </span><span>{repo.description}</span></div>
              <div><span>URL: </span><span>{repo.clone_url}</span></div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
.container{
  display: flex;
  flex-direction: column;
  // height: 100vh;
  font-family: Arial;

  button{
    all: unset;
    width: 100px;
    height: 35px;
    margin: 10px 10px 0 0;
    align-self: flex-end;
    background-color: #0041C2;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #0041C2;

    &:hover{
      background-color: #fff;
      color: #0041C2;
    }
  }

  >div{
    height: 100%;
    width: 100%;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;

    .content{
      display: flex;
      flex-direction: column;
      padding: 20px 100px;    
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      width: auto;
      span{
        font-size: 10px;
      }
      img{
        height: 150px;
        width: 150px;
        border-radius: 50%;
      }
      .card {
        -webkit-box-shadow: -3px 5px 15px -7px rgba(0,0,0,0.75);
        -moz-box-shadow: -3px 5px 15px -7px rgba(0,0,0,0.75);
        box-shadow: -3px 5px 15px -7px rgba(0,0,0,0.75);
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 10px;
        margin-top: 10px
      }
      >span:nth-child(2){
        margin-top: 20px;
        font-weight: bold;
      }
  
      >span:not(:nth-child(2)){
        margin-top: 8px;
        font-size: 14px;
      }
  
    }

  }
}
`;
