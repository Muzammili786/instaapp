import React, { useState } from "react";
import "./home.css";
import CollapsibleExample from "../../components/header";
import Post from "../../components/post";

const Home = () => {
    const [posts, setPosts] = useState([
        {
          username: "Muzammil Iqbal",
          shotdisc: "Original Audion",
          caption: "Wow, I'm Amazing adfed dfehu faseur fhuert afbahura fuhreiwe dfad fuefdfa adrferh fadjkse fasdsdadhuer fasd",
          imageUrl:
            "https://cache4.pakwheels.com/ad_pictures/6464/chinese-bikes-lifan-2022-64646770.jpg",
        },
        {
          username: "Husnan Rasheed",
          shotdisc: "Have a good",
          caption: "Oh, I'm a God!",
          imageUrl:
            "https://www.lifanmotos.net/files/News%20Center/Domestic%20Express/19.jpg",
        },
        {
            username: "Agha Ahmed",
            caption: "abcd ade fjferffa adhdfdfeaasdfe fffdusrufs daksase feudfakseubdfa sdkfabf!",
            imageUrl:
              "https://i.pinimg.com/originals/56/07/01/560701526914e5230bafdb4c04a31426.png",
          },
      ]);
   
    return(
        
        <>
        <div>
            <CollapsibleExample />
            
            <div className="timeline">
        {posts.map((post) => (
          <Post
            username={post.username}
            shotdisc={post.shotdisc}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
        </div>
        
        </>
    )
}

export default Home;