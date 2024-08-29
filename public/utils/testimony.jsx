import Button from "@/public/utils/button";
import Image from "next/image";
import circles from "@/public/images/circles.svg";

export default function Testimony({stars,text,username,location }) {
  return (
    <div className="text-[#4e4e4e] border-2 border-cerreneLightGreen bg-cerreneYellow ">
    
      <div>{text} </div>
      <div>{username} </div>
      <div>{location}</div>
        
    </div>
  );
}
