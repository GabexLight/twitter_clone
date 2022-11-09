import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from "@mui/material"
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    function sendTweet(e) {
        e.preventDefault();
        const post = {
            displayName: "rafeh Qazi",
            username: "cleverqazi",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
                "https://pbs.twimg.com/media/E8aGDSHXMA4fOBR.jpg"
        };
        setTweetMessage("");
        setTweetImage("");
        addDoc(collection(db, "posts"), post);
    }



return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <Avatar src='https://www.filepicker.io/api/file/q8yh1SmySmy5BNapeDem' />
                <input
                    value={tweetMessage}
                    onChange={(e) => setTweetMessage(e.target.value)}
                    placeholder="What's happening?"
                    type="text"
                />
            </div>
            <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className='tweetBox__imageInput'
                placeholder='Optional: Enter image URL'
                type="text"
            />

            <Button
                onClick={sendTweet}
                type='submit'
                className='tweetBox__tweetButton'
            >
                Tweet
            </Button>
        </form>
    </div>
);
}

export default TweetBox