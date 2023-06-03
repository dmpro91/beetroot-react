import { useContext } from "react";
import { Card } from "react-bootstrap"
import { UserContext } from "../../context/user.contex"

export const UserInfo = () => {
    const {user} = useContext(UserContext);

    return <Card>
        <h3>First name: {user.firstName}</h3>
        <h3>Last name: {user.lastName}</h3>
        <h3>Last age: {user.age}</h3>
    </Card>
}