import React, { Component } from 'react';

class Form extends Component {



    render() {
        return (
            <form className="form" onSubmit={this.props.onSubmit}>
                <fieldset>
                <Field
                    name="firstName"
                    label="user name"
                    value={this.props.formState.firstName}
                    onChange={this.props.onChange}
                />
                <Field
                    name="lastName"
                    label="last name"
                    value={this.props.formState.lastName}
                    onChange={this.props.onChange}
                />
                <Field
                    name="email"
                    label="email"
                    value={this.props.formState.email}
                    onChange={this.props.onChange}
                />
                </fieldset>
                <button>{this.props.formState.mode}</button>
            </form>
        );
    }

}

export default Form;






class Field extends Component {

    render() {
        return (
            <div className="field">
                <label htmlFOR={this.props.name}>{this.props.label}</label>
                <input type="text" name={this.props.name} value={this.props.value} onChange={this.props.onChange} />
            </div>
        );
    }
}
