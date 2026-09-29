
function UserGreeting(props){
    const {
        username = "none",
        isLoggedIn= false,
    } = props
    if(props.isLoggedIn){
        return(<h2>Welcome {username}</h2>)
    }
}
export default UserGreeting