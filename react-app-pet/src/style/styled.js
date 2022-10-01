import styled from "styled-components"

export const DivHome = styled.div`
    background-color: #00a8ff;
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center ;
    span{
        background-color: cyan;
        color: black;
        border-radius: 5px;
    }
    span:hover{
        background-color: white;
        transition: 0.5s;
    }
    h2{
        font-size: 50px;
    }
    p{
        margin-bottom: 10vh;
        font-size: 20px;
    }
    button{
        width: 200px;
        height: 50px;
        background-color: #000222;
        border-radius: 10px;
    }
    button a{
        text-decoration: none;
        color: #fff;
        font-size: 20px;
    }
    button a:hover{
        color: cyan;
        transition: 0.5s;
    }
`
//-----------------------------------------

export const DivNav = styled.div`
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 10vh;
    h1{
        color: #fff;
        margin-left:5vw ;
    }
    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        width: 20vw;
        margin-right: 5vw;
    }
    ul li a{
        text-decoration: none;
        color: #fff;
        font-size: 20px;
    }

    ul li a:hover{
        color: cyan;
        transition: 0.5s;
    }

`

//-----------------------------------------

export const DivPets = styled.div`
    background-color: #00a8ff;
    width: 100vw;
    height: 100%;
    h1,p{
        padding-bottom:1vh;
    }
    color:#000;

`
//-------------------------------
export const DivForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    input,textarea {
        border-radius: 5px;
        width: 60vw;
        height: 20px;
        padding: 10px;
    }
    button{
        background-color: aqua;
        color: black;
        font-size: 15px;
        width: 100px;
        height: 30px;
        border-radius: 2px;
    }
    button:hover{
        background-color: bisque;
        color: #000;
    }
    form{
        margin-bottom: 50px;
    }
`
//-------------------------------

export const DivPetStyle = styled.div`
    width: 60vw;
    margin-left: 20vw;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    background-color: blanchedalmond;
    border: 2px solid #000;
    p{
        font-size: 18px;
    }
    div p{
        margin-bottom: 2px;
    }
`
