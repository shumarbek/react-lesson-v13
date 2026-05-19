interface IProps {
    username: string;
}

const Profile = (props: IProps) => {
    return(
        <div>
            <h1>{props.username}</h1>
        </div>
    )
}

export default Profile;