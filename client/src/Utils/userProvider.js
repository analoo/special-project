import React, {Component, createContext} from "react"
import API from "./API"

export const UserContext = createContext({ auth: null});

class UserProvider extends Component {

    state = {
        auth: null
    };

    componentDidMount = () => {
        API.getUser().then(res =>
            this.setState({auth: res.data}))

    };
    render() {
        return(
            <UserContext.Provider value={this.state.auth}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;
