import "./Profile.css"
const Profile = (props) =>{
    return(
    <div>
        <div>
        <img src={props.image} alt="" />
        <h2> {props.name}</h2>
        <h3>{props.age}</h3>
        <h3>{props.location}</h3>
        </div>

    </div>
    )
}
export default Profile