
import React, { useState } from "react";
import EmojiPicker, { Emoji} from "emoji-picker-react";
import image from "./tech1.jpg"

const EmojiSearching= () => {
  const [emoji, setEmoji] = useState("");

const handleEmojiClick=(emojiData)=>{
    setEmoji(emojiData.unified);
  }
  return (
    <div style={{backgroundColor:"yellow",backgroundImage:`url(${image})`}}>
      <h2 style={{textAlign:"center",color:"white",fontSize:80}}>Emoji Searching</h2>
      <div>
        {emoji?<Emoji unified={emoji} size={100}/>:null}
      </div>
       <center><EmojiPicker onEmojiClick={handleEmojiClick}/></center>

    </div>
  );
};

export default EmojiSearching;