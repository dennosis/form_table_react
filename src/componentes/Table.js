
import React, { Component } from 'react';

class Table extends Component {

    render() {
        return (
        <div className="table">
            <div className="table-header">
               <div className="row">
                  <div className="column">First Name</div>
                  <div className="column">Last Name</div>
                  <div className="column">Email</div>
                  <div className="column">Options</div>
               </div>
            </div>
            <div className="table-body">
               {this.props.users.map((user, key) => {
                  return (
                     <div className={`row ${user.updating ? "updating" : ""}`}>
                        <div className="column">{user.firstName}</div>
                        <div className="column">{user.lastName}</div>
                        <div className="column">{user.email}</div>
                        <div className="column">
                           <button
                              className="icon edit"
                              onClick={() => this.props.updateUser(key)}
                           >
                              Editar
                           </button>
                           <button className="icon delete"
                                onClick={() => this.props.deleteUser(key)}
                           >
                                Remover
                           </button>
                        </div>
                     </div>
                  );
               })}
            </div>
        </div>
        );
    }
}

export default Table;
