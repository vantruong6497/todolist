import React, { Component } from 'react';

class Sort extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
        this.handleSort = this.handleSort.bind(this)
    }

    handleSort(orderBy,orderDir){
        this.props.onClickSort(orderBy,orderDir)
    }
  render() {
    let {orderBy, orderDir} = this.props
    let order = orderBy + " " + orderDir
    return (
        <div className="col-md-3">
            <div className="dropdown">
                <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu">
                        <li><a onClick={() =>this.handleSort('name','asc')} href="#/">NAME ASC</a></li>
                        <li><a onClick={() =>this.handleSort('name','desc')} href="#/">NAME DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a onClick={() =>this.handleSort('level','asc')} href="#/">LEVEL ACS</a></li>
                        <li><a onClick={() =>this.handleSort('level','desc')} href="#/">LEVEL DESC</a></li>
                    </ul>
                    <span className="badge  badge-success">{order}</span>
                </div>
            </div>
        </div>
    );
  }
}

export default Sort;
