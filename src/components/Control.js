import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    constructor(props){
        super(props);

        this.state = {
        }

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(){
        this.props.onClick();
    }

  render() {
      let {orderBy, orderDir} = this.props
      let isShowForm = this.props.isShowForm;
      let elmButton = <button onClick={this.handleAdd} type="button" className="btn btn-info btn-block">Add Task</button>
      if(isShowForm === true){
        elmButton = <button onClick={this.handleAdd} type="button" className="btn btn-success btn-block">Close Task</button>
      }
    return (
        <div className="row">
            {/* Search */}
            <Search onClickGo={this.props.onClickSearchGo} />
            {/* Sort */}
            <Sort
                onClickSort = {this.props.onClickSort}
                orderBy = {orderBy}
                orderDir = {orderDir}
            />
            {/* Add */}
            <div className="col-md-5">
               {elmButton}
            </div>
        </div>
    );
  }
}

export default Control;
