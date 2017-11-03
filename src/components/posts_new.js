import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
              <label>{field.label}</label>
              <input
                className="form-control"
                type="text"
                {...field.input}
                // ... : open properties
                // same as : onChange={field.input.onChange}
                //           onFocus={field.input.onFocue}
              />
            </div>
        );
    }
    render() {
        return (
            <form>
              <Field
                label="Title"
                name="title"
                component={this.renderField}
                />
              <Field
                label="Categories"
                name="categories"
                component={this.renderField}
                />
              <Field
                label="Post Content"
                name="content"
                component={this.renderField}
                />
            </form>
        );
    }
}

function validate(values) {
    // values : -> { title: 'a', catecories: 'test', content: 'hoge' }
    const errors = {};

    // Validate the ipunts from 'values'
    if(!values.title || values.title.length < 3) {
        errors.title = "enter a title that is at least 3 chars!"
    }

    if(!values.categories) {
        errors.categories = "enter a categories!"
    }

    if(!values.content) {
        errors.content = "enter a content!"
    }

    // if errors is empty, the form is fine to submit
    // if errors has any properties, redux-form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);
