import React, {Component} from 'react';
import {usersWithAddress} from "./dataBS/userADR";
import UserCoponent from "./component/user/UserCoponent";

class App extends Component {
    render() {
        return (
            <div>
                {
                    usersWithAddress.map((user) =>{
                        let cls = user.id%2 ? 'parne' : 'neparne';
                        return (
                            <UserCoponent
                                item={user}
                                cls={cls}
                                key={user.id}
                            />);
                    })
                }
            </div>
        );
    }
}

export default App;