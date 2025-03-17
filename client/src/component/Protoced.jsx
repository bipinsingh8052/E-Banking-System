import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protoced(props){
    let nav =useNavigate();

    
    let {Component}=props;


    const loading=()=>{

        let name=localStorage.getItem("name");
        if(name){
            nav("/dashboard")
        }
    }
    useEffect(()=>{loading()},[])

    return(
        <Component/>
    )
}