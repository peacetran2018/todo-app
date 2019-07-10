import React, { Component } from 'react';
//actions
import { insertTodo } from '../redux/actions/actionMain';
//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    onChangeValue = event => {
        this.setState({
            content: event.target.value
        })
    }

    onAddTodo = () => {
        this.props.insertTodo(this.state.content);
        this.setState({
            content: ''
        })
    }

    onClearValue =() => {
        this.setState({
            content:''
        })
    }

    render() {
        return (
            <div className="form-inline">
                <div className="form-group mb-2 mx-sm-3">
                    <label>Todo Text</label>&nbsp;
                    <input className="form-control" placeholder="Input here..."
                        value={this.state.content}
                        onChange={this.onChangeValue}></input>
                </div>

                <button type="button" className="btn btn-success btn-sm"
                    onClick={this.onAddTodo}><i className="fa fa-plus"></i></button>
                &nbsp;
                <button type="button" className="btn btn-danger btn-sm"
                    onClick={this.onClearValue}><i className="fa fa-times"></i></button>
            </div>
        );
    }
}

const mappingDispatchToProps = (dispatch) => {
    return bindActionCreators({
        insertTodo
    }, dispatch)
}

export default connect(null, mappingDispatchToProps)(TodoInput);