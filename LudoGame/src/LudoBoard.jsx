import { useState } from "react"

export default function LudoBoard(){

    let [bluemoves , setblueMoves] = useState(0);
    let [yellowmoves , setyellowMoves] = useState(0);
    let [greenmoves , setgreenMoves] = useState(0);
    let [redmoves , setredMoves] = useState(0);

    function BlueMoves(){
        setblueMoves((currMoves)=>{
            return currMoves+1;

        })
    }
    
    function YellowMoves(){
        setyellowMoves((currMoves)=>{
            return currMoves+1;

        })
    }
    function GreenMoves(){
        setgreenMoves((currMoves)=>{
            return currMoves+1;

        })
    }
    function RedMoves(){
        setredMoves((currMoves)=>{
            return currMoves+1;

        })
    }
    
    let blueStyle = {backgroundColor: 'blue' , padding:'1rem',border:'none', bordeRadius:'14px',  color:'white'}
    let yellowStyle = {backgroundColor: 'yellow' , padding:'1rem', bordeRadius:'14px', border:'none', color:'white'}
    let greenStyle = {backgroundColor: 'green' , padding:'1rem', bordeRadius:'14px', border:'none', color:'white'}
    let redStyle = {backgroundColor: 'red' , padding:'1rem', bordeRadius:'14px', border:'none', color:'white'}
    
    return(
        <>
        <h1>Ludo Board</h1>
        <div>
        <p >Blue moves: {bluemoves}</p>
        <button onClick={BlueMoves} style={blueStyle}>+1</button>
        <p>Yellow moves: {yellowmoves}</p>
        <button onClick={YellowMoves} style={yellowStyle}>+1</button>
        <p>Green moves: {greenmoves}</p>
        <button onClick={GreenMoves} style={greenStyle}>+1</button>
        <p>Red moves: {redmoves}</p>
        <button onClick={RedMoves} style={redStyle}>+1</button>
        </div>

        </>
    )
}