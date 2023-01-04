const Tech = ({ techs }) => {
    return (
        <ul>
            {techs.map((e) => (
                <li>{e}</li>
            ))}
        </ul>
    )
}

const UserCard = ({ img, firstName, lastName }) => {
    return (
        <div>
            <img src={img} alt="user" width={150} />
            <h4> {firstName}{lastName} </h4>
        </div>
    )
}

const Button = ({ text, status, func }) => {
    const styleObj = {
        padding: "15px",
        borderRadius: "15px",
        backgroundColor: status ? "green" : "red",
        border: status ? "1px solid green" : "1px solid red",
        color: "white",
    };

    return (
        <button style={styleObj} onClick={func}>{text}</button>
    )
}




export default function Main({ user, techs, greetPeople, showdate }) {
    const userInfo = {
        ...user,
        img: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    }

    return (
        <div>
            <div>
                <h4>Tech Stack</h4>
                <Tech techs={techs} />
                <UserCard {...userInfo} />
                <Button text="Greet People" status={true} func={greetPeople} />
                <Button text="Show Date" status={false} func={showdate} />
            </div>
        </div>
    )
}