import React, {Component} from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class TopBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: null,
            disabled: false
        }
    }

    handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ 
            value: value 
            });
	}

    toggleDisabled (e) {
		this.setState({ disabled: e.target.checked });
	}

    render() {
        return (
            <div>
                <h1> ChatterBox 2</h1>
                <div>
                    <Select multi simpleValue
                     name="Channels"
                     disabled={this.state.disabled}
                     options={this.props.dropDownOptions}
                     value={this.state.value}
                     onChange={this.handleSelectChange.bind(this)}
                     autosize={true} />
                </div>
            </div>
        );
    }
}

export default TopBar;