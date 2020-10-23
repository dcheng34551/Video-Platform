import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        //設定input的初始值
        this.state = {term: ''};
    }

    //onChange發生時，控制input裡面的值
    handleInputChange = (e) => {
        this.setState({term: e.target.value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.handleFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" name="video" onChange={this.handleInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar ;