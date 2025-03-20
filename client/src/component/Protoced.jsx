import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Protoced(props){
    let[store,setStore]=useState("")
    let nav =useNavigate();

    
    let {Component}=props;


    const loading=()=>{

        let name=localStorage.getItem("name");
        setStore(name)
        if(name){
            nav("/dashboard")
        }
    }
    useEffect(()=>{loading()},[store])

    return(
        <Component/>
    )
}