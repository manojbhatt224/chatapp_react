import React, {useState, useRef} from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg.png'
import { UilScenery,UilTimes, UilLocationPoint, UilSchedule, UilPlayCircle } from "@iconscout/react-unicons"
import { useSelector, useDispatch } from 'react-redux'

const PostShare = () => {
    const[image, setImage]=useState(null)
    const imageRef=useRef()
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.authReducer.authData.data)
    const desc=useRef()
    const onImageChange=(event)=>{
        if(event.target.files && event.target.files[0]){
            let img=event.target.files[0];
            setImage(img)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newPost={
            userId: user._id,
            desc:desc.current.value
        }
        if(image){
            const data= new FormData()
            const filename=Date.now()+image.name 
            data.append("name",filename)
            data.append("file", image)
            newPost.image=filename
            dispatch(uploadData(image))
            dispatch(uploadPost(newPost))
        }
    }
    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="profile" />
            <div>
                <input ref={desc} required type="text" placeholder="What's happening?" />
                <div className="PostOptions">
                    <div className="option" style={{color:"var(--photo)"}}
                    onClick={()=>imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{color:"var(--video)"}}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{color:"var(--location)"}}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{color:"var(--schedule)"}}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <div className="button ps-button" onClick={handleSubmit}>
                        Share
                    </div>
                    <input type='file' name='myImage' ref={imageRef} style={{display:"none"}} onChange={onImageChange}/>
                </div>
                {image && 
                <div className="previewImage">
                    <UilTimes onClick={()=>{setImage(null)}}/>
                    <img src={URL.createObjectURL(image)} alt="prevew"/>
                </div>
                }
            </div>
        </div>
    )
}

export default PostShare