import React from "react";
import { Link } from "react-router-dom";

export default function Scorer(props) {
  const players = [
    { player_name: "Domantas Sabonis" },
    { player_name: "Nikola Vučević" },
    { player_name: "Nikola Jokić" }
  ];

  return (
    <div className="scorer">
        <p>Click on a name below to check out stats</p>
      {players.map((player, index) => (
        <Link key={index} to={`/fieldGoal/${encodeURIComponent(player.player_name)}`}>
          <h2>{player.player_name}</h2>
        </Link>
      ))}
      <div className="regSzn">
         <img src= "https://tse3.mm.bing.net/th?id=OIP.JClG_rau8Gba_eNj1RCODgHaE3&pid=Api&P=0&h=220" />
         <img src= "https://tse1.mm.bing.net/th?id=OIP.e8Aly1AgR0Y_DEfkFBx9fQHaE8&pid=Api&P=0&h=220" />
         <img src= "https://tse1.mm.bing.net/th?id=OIP.0o0fzoUcHMnBZV3xkgoGQAHaE8&pid=Api&P=0&h=220" />

      </div>
      <p>The 2022-23 NBA season was a battle on the boards, with three European giants leading the charge in rebounding. Nikola Jokic, 
        the reigning MVP known for his all-around game, secured a staggering number of rebounds yet again. Domantas Sabonis, a 
        relentless force on the inside, established himself as a rebounding machine. Rounding out the top three was Nikola Vučević,
        a veteran big man with a knack for cleaning up the glass. However, Domantas Sabonis stole the show, leading the entire NBA in
        rebounds with a dominant average of 12.3 per game. His relentless pursuit of every missed shot solidified his place as the league's 
        top rebounder for the 2022-23 season.</p>
    </div>
  );
}

