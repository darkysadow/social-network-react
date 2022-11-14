import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
    render() {
        return (<div className="container">
            <div>
                <div><input type="text" /></div>
                <div><input type="password" /></div>
                <div>
                    <div><button>login</button></div>
                    <div><button>register</button></div>
                </div>
            </div>
        </div>)
    }
}

export default connect()(Login);