import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control'
import Form from './components/Form'
import List from './components/List'
// import tasks from './mocks/tasks'
import {filter, includes, orderBy as funcOrderBy, remove, reject} from 'lodash'

const uuidv4 = require('uuid/v4');
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: [],
            isShowForm : false,
            strSearch: '',
            orderBy: "NAME",
            orderDir: "ASC",
            itemSelected: null
        }
        this.handleToggoForm = this.handleToggoForm.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSort = this.handleSort.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    componentWillMount(){
        let items = JSON.parse(localStorage.getItem('task'))
        this.setState({
            items: items
        })
    }
    handleAdd(item){
        let items = this.state.items;
        if(item.id !== ''){//edit
            items = reject(items, { id: item.id });
            items.push({
                id: item.id,
                name: item.name,
                level: +item.level
            });
        } else{//add
            items.push({
                id: uuidv4(),
                name: item.name,
                level: +item.level
            })
        }
        this.setState({
            items: items,
            isShowForm : false
        })
        localStorage.setItem('task', JSON.stringify (items))
    }

    handleEdit(item){
        this.setState({
            itemSelected: item,
            isShowForm : true
        })
    }
    handleDelete(id){
        let items = this.state.items;
        remove(this.state.items, (item)=>{
            return item.id === id;
        });
        this.setState({
            items: this.state.items
        })
        localStorage.setItem('task', JSON.stringify (items))
    }
    handleToggoForm(){
        this.setState({
            isShowForm : !this.state.isShowForm,
            itemSelected: null
        });
    }

    handleCancel(){
        this.setState({
            isShowForm : false
        });
    }

    handleSearch(value){
        this.setState({
            strSearch : value
        });
    }

    handleSort(orderBy,orderDir){
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }

    render() {
        let itemsOrigin = this.state.items;
        let items = [];
        let isShowForm = this.state.isShowForm;
        let elmForm = null;
        const search = this.state.strSearch;
        let {orderBy, orderDir} = this.state;
        let itemSelected = this.state.itemSelected;
        // search
        items = filter(itemsOrigin, (item)=>{
            return includes(item.name,search);
        })

        // soft
        items = funcOrderBy(items,[orderBy],[orderDir]);

        if(isShowForm){
            elmForm = <Form itemSelected={itemSelected}  onClickAdd = {this.handleAdd} onClickCancel={this.handleCancel} />
        }

    return (
        <div className="row">
            {/*Title START*/}
            <Title />
            {/*Title End*/}
            {/*Control START*/}
            <Control
                orderBy = {orderBy}
                orderDir = {orderDir}
                onClickSort = {this.handleSort}
                onClickSearchGo={this.handleSearch}
                onClick={this.handleToggoForm}
                isShowForm={isShowForm}
            />
            {/*Control END*/}
            {/*FORM START*/}
            {elmForm}
            {/*FORM  END*/}
            {/*List START*/}
            <List
                onClickEdit={this.handleEdit}
                onClickDelete={this.handleDelete}
                items={items} 
            />
            {/*List End */}
        </div>
    );
  }
}

export default App;
