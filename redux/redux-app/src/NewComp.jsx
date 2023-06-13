import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Subscribe'
        }
    }

    styles = {
        fontStyle: 'italic',
        color: 'purple',
    }

    ButtonChange = () => {
        this.setState({
            message: 'Thank you'
        })
    }

    render() {
        return (
            <div>
                <p style={this.styles}>{this.props.message}</p>
                <button onClick={this.props.ButtonChange}>Subscribe</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ButtonChange: () => dispatch({type: 'Message change'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewComp);