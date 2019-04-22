import React, { Component } from 'react';
import Item from './Item'
class List extends Component {

    constructor(props){
        super(props);

        this.state = {
        }
    }
  render() {
    const items = this.props.items;
    const elmItem = items.map((item,index)=>{
        return (
            <Item onClickEdit={this.props.onClickEdit} onClickDelete={this.props.onClickDelete} key={index} item={item} index={index} />
        )
    })
    return (
        <div className="row">
            <div className="col-md-12 mt-5">
                <div className="card mb-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                          <h3 className="panel-title">List Task</h3>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Task</th>
                                    <th className="text-center">Level</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>{elmItem}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default List;
