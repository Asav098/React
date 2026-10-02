
function ProfilePicture(){
    const imageUrl = './src/assets/jaechoi.jpeg'; 
    const handleClick = (e) => e.target.style.borderRadius = "50%";
    return(<img onClick={(e)=> handleClick(e)} src={imageUrl}></img>)
}
export default ProfilePicture