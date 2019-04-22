import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    handleDelete(id){
        this.props.onClickDelete(id);
    }
    handleEdit(item){
        this.props.onClickEdit(item)
        
    }
  render() {
    const item = this.props.item;
    const index = this.props.index;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td className="text-center">{this.showLevelElement(item.level)}</td>
            <td>
                <a href="#/" onClick={()=>this.handleEdit(item)} className="btn btn-warning">Edit</a>
                <a href="#/" onClick={()=>this.handleDelete(item.id)} className="btn btn-danger">Delete</a>
            </td>
        </tr>
    );
  }

  showLevelElement(level){
    let elmlevel = <span className="label label-default">Small</span>;
    if(level === 1){
        elmlevel = <span className="label label-info">Medium</span>;
    }else if(level === 2) {
        elmlevel = <span className="label label-danger">High</span>;
    }
    return elmlevel;
  }
}

export default Item;
