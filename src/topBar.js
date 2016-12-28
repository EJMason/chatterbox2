import React, {Component} from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class TopBar extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                <h1> ChatterBox 2</h1>
                <div>
                    <Select
                     name="Channels"
                     multi={true}
                     simpleValue={true}
                     options={this.props.dropDownOptions}
                     autosize={true} />
                </div>
            </div>
        );
    }
}

export default TopBar;