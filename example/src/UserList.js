import React, { Component, Fragment } from 'react';
//import ReactDatatable from '../../lib/index.js';
import ReactDatatable from '../../src/index.js';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
        this.columns = [
            {
                key: "name",
                text: "Name",
                className: "name",
                TrOnlyClassName:"aClass",
                align: "left",
                sortable: true,
            },
            {
                key: "address",
                text: "Address",
                className: "address",
                align: "left",
                sortable: true
            },
            {
                key: "postcode",
                text: "Postcode",
                className: "postcode",
                sortable: true
            },
            {
                key: "rating",
                text: "Rating",
                className: "rating",
                align: "left",
                sortable: true
            },
            {
                key: "type_of_food",
                text: "Type of Food",
                className: "type_of_food",
                sortable: true,
                align: "left"
            },
            {
                key: "action",
                text: "Action",
                className: "action",
                width: 100,
                align: "left",
                sortable: false,
                cell: record => {
                    return (
                        <Fragment>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => this.editUser(record)}
                                style={{marginRight: '5px'}}>
                                <i className="glyphicon glyphicon-edit fa fa-edit"></i>
                            </button>
                            <button className="btn btn-danger btn-sm" onClick={() => this.deleteUser(record)}>
                                <i className="glyphicon glyphicon-trash fa fa-trash"></i>
                            </button>
                        </Fragment>
                    );
                }
            }
        ];
        this.config = {
            page_size: 10,
            length_menu: [ 10, 20, 50 ],
            filename: "Users",
            no_data_text: 'No data available!',
            button: {
                excel: false,
                print: false,
                extra: true,
            },
            language: {
                length_menu: "Show _MENU_ result per page",
                filter: "Filter in records...",
                info: "Showing _START_ to _END_ of _TOTAL_ records",
                pagination: {
                    first: "First",
                    previous: "Previous",
                    next: "Next",
                    last: "Last"
                }
            },
            show_length_menu: false,
            show_filter: false,
            show_pagination: false,
            show_info: false,
        };

        this.extraButtons =[
            {
              className:"btn btn-primary buttons-pdf",
              title:"Export TEst",
              children:[
                  <span>
                    <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                  </span>
              ],
                onClick:(event)=>{
                    console.log(event);
                },
            },
            {
                className:"btn btn-primary buttons-pdf",
                title:"Export TEst",
                children:[
                    <span>
                    <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                  </span>
                ],
                onClick:(event)=>{
                    console.log(event);
                },
                onDoubleClick:(event)=>{
                    console.log("doubleClick")
                }
            },
        ]
    }

    editUser(user) {
        console.log("Edit User", user);
    }

    deleteUser(user) {
        console.log("Delete User", user);
    }

    pageChange(pageData) {
        console.log("OnPageChange", pageData);
    }



    render() {
        return (
            <div>
                <ReactDatatable
                    config={this.config}
                    records={this.props.users}
                    columns={this.columns}
                    onPageChange={this.pageChange.bind(this)}
                    extraButtons={this.extraButtons}
                />
            </div>
        )
    }
}
export default UserList;
