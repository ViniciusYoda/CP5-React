import styled from "styled-components"

export const DivHome = styled.div`
    background-color: #f3f3;
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center ;
    span{
        background-color: blue;
        color: yellow;
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
        background-color: #000000;
        border-radius: 10px;
    }
    button a{
        text-decoration: none;
        color: #fff;
        font-size: 20px;
    }
    button a:hover{
        color: red;
        transition: 0.5s;
    }
`
//-----------------------------------------

export const DivNav = styled.div`
    background-color: red;
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
        background-color: #fff;
        list-style: none;
        width: 20vw;
        margin-right: 5vw;
    }
    ul li a{
        text-decoration: none;
    }

`

//-----------------------------------------




