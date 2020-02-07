import MaterialTable from 'material-table';
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class TodosTable extends Component {

    state = {
        columns: [
            { title: 'Todo', field: 'todo' },
            { title: 'Description', field: 'description' },
            { title: 'Priority', field: 'priority', type: 'numeric' },
            { title: 'Done', field: 'done', lookup: { true: 'Yes', false: 'No' } }
        ],
    };

    onAdd = newData =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve();
                this.props.onInsert(newData);
            }, 600);
        });

    onUpdate = (newData, oldData) =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve();
                this.props.onUpdateIndex(this.props.list.indexOf(oldData));
                this.props.onUpdate(newData);
            }, 600);
        });

    onDelete = oldData =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve();
                this.props.onUpdateIndex(this.props.list.indexOf(oldData));
                this.props.onDelete(this.props.index);
            }, 600);
        });

    render() {
        return (
            <MaterialTable
                columns={this.state.columns}
                data={this.props.list}
                editable={{
                    onRowAdd: this.onAdd,
                    onRowDelete: this.onDelete,
                    onRowUpdate: this.onUpdate
                }}
                title="Todos List:"
            />
        );
    }
}

TodosTable.propTypes = {
    index: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        done: PropTypes.string,
        priority: PropTypes.string,
        todo: PropTypes.string
    })),
    onDelete: PropTypes.func.isRequired,
    onInsert: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onUpdateIndex: PropTypes.func.isRequired
};