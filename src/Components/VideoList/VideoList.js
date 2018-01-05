import React from "react";
import VideoItem from "./VideoItem/VideoItem";

const VideoList = (props) => {


console.log(props.videoList);
    return(
        <div>

            {
                props.videoList.map((data,i)=>{
                    return <VideoItem
                        key={data.id}
                        title={data.title}
                        img={data.img}
                        btnTitle={props.btnName}
                        onClickHandle={props.buttonOnClickHandler} index={i}   />
                    })
            }

        </div>
    )
};


export default VideoList;