<h1 align="center">Formik TypeScript UI</h1>

## Overview

Formik TypeScript UI, contains simple HTML form fields wrapped with Formik and written in TypeScript.

## Installation

```sh
npm install --save formik_typescript_ui
```

## Components

### CheckboxField

The CheckboxField component renders a simple HTML `<input>` of the type `checkbox` and its respective `<label>`.

**Props**

Name           | Type    | Default Value | Description
-------------- | ------- | ------------- | -----------
className      | string  | ''            | Adds a custom class to the `<input>` element
classNameLabel | string  | ''            | Adds a custom class to the `<label>` element
disabled       | boolean | false         | Disables the `<input>` element
id             | string  | null          | Sets an id for the `<input>` element. If not specified, the name would be used instead
label          | string  | **required**  | Sets the text for the `<label>` element
labelStyle     | object  | {}            | Adds custom inline style to the `<label>` element
name           | string  | **required**  | Sets the name of the `<input>` element
style          | object  | {}            | Adds custom inline style to the `<input>` element

### CheckboxGroup

The CheckboxGroup component renders a list of `<CheckboxField />` from the given `options`.

**CheckOptionType**

```typescript
interface CheckOptionType {
  id?: string;
  label: string;
  name: string;
}
```

**Props**

Name           | Type              | Default Value | Description
-------------- | ----------------- | ------------- | -----------
className      | string            | ''            | Adds a custom class to each `<input>` element
classNameLabel | string            | ''            | Adds a custom class to each `<label>` element
labelStyle     | object            | {}            | Adds custom inline style to each `<label>` element
options        | CheckOptionType[] | **required**  | Sets the required props for the `<CheckboxField />` components
style          | object            | {}            | Adds custom inline style to each `<input>` element

### DatePickerField

The DatePickerField component renders a simple HTML `<input>` of the type `date`.

**Props**

Name      | Type    | Default Value | Description
--------- | ------- | ------------- | -----------
className | string  | ''            | Adds a custom class to the `<input>` element
disabled  | boolean | false         | Disables the `<input>` element
id        | string  | null          | Sets an id for the `<input>` element. If not specified, the name would be used instead
maxDate   | string  | ''            | Sets the maximun date that can be selected. If not in the correct format `AAAA-MM-DD`, this validation won't have any effects
minDate   | string  | ''            | Sets the minimun date that can be selected. If not in the correct formar `AAAA-MM-DD`, this validation won't have any effects
name      | string  | **required**  | Sets the name of the `<input>` element
style     | object  | {}            | Adds custom inline style to the `<input>` element

### RadioButtonField

The RadioButtonField component renders a simple HTML `<input>` of the type `radio` and its respective `<label>`.

**Props**

Name           | Type    | Default Value | Description
-------------- | ------- | ------------- | -----------
className      | string  | ''            | Adds a custom class to the `<input>` element
classNameLabel | string  | ''            | Adds a custom class to the `<label>` element
disabled       | boolean | false         | Disables the `<input>` element
id             | string  | **required**  | Sets an id for the `<input>` element
label          | string  | null          | Sets the text for the `<label>` element
labelStyle     | object  | {}            | Adds custom inline style to the `<label>` element
name           | string  | **required**  | Sets the name of the `<input>` element
style          | object  | {}            | Adds custom inline style to the `<input>` element

### RadioButtonGroup

The RadioButtonGroup component renders a list of `<RadioButtonField />` from the given `options`.

**RadioOptionType**

```typescript
interface RadioOptionType {
  id: string;
  label: string;
}
```

**Props**

Name           | Type              | Default Value | Description
-------------- | ----------------- | ------------- | -----------
className      | string            | ''            | Adds a custom class to each `<input>` element
classNameLabel | string            | ''            | Adds a custom class to each `<label>` element
labelStyle     | object            | {}            | Adds custom inline style to each `<label>` element
name           | string            | **required**  | Sets the `name` for all the `<input>` elements
options        | RadioOptionType[] | **required**  | Sets the required props for the `<RadioButtonField />` components
style          | object            | {}            | Adds custom inline style to each `<input>` element

### SelectField

The SelectField component uses `react-select` to render the `select` element and it's respective options. For more information on the `react-select` library, click [here](https://react-select.com/home).

**OptionType**

```typescript
interface OptionType {
  label: string;
  value: string;
}
```

**Props**

Name         | Type         | Default Value | Description
------------ | ------------ | ------------- | -----------
autofocus    | boolean      | false         | Sets wether the control is focused or not when the component is mounted
className    | string       | ''            | Adds a custom class to the `<Select />` component
id           | string       | null          | Sets an id for the `<SelectContainer />`. If not specified, the name would be used instead
isDisabled   | boolean      | false         | Sets wether the `<Select />` is disabled or not
isLoading    | boolean      | false         | Sets wether the `<Select />` is loading its content (asynchronous) or not
isMulti      | boolean      | false         | Sets wether the `<Select />` allows for multiple selection or not
isSearchable | boolean      | false         | Sets wether the options can be searched or not
name         | string       | **required**  | Sets the `name` for the `<input>` element
options      | OptionType[] | **required**  | Sets the options for the `<Select />` component
placeholder  | string       | ''            | Sets the placeholder for the `<input>` element
style        | object       | {}            | Style modifier methods as described on [react-select](https://react-select.com/props) docs

### TextareaField

The TextareaField component renders a simple HTML `<textarea>`.

**Props**

Name        | Type    | Default Value | Description
----------- | ------- | ------------- | -----------
className   | string  | ''            | Adds a custom class to the `<textarea>` element
disabled    | boolean | false         | Disables the `<textarea>` element
id          | string  | null          | Sets an id for the `<textarea>` element. If not specified, the name would be used instead
name        | string  | **required**  | Sets the `name` for the `<textarea>` element
placeholder | string  | ''            | Sets the placeholder for the `<textarea>` element
style       | object  | {}            | Adds custom inline style to the `<textarea>` element

### TextField

The TextField component renders a simple HTML `<input>`.

**Props**

Name        | Type    | Default Value | Description
----------- | ------- | ------------- | -----------
className   | string  | ''            | Adds a custom class to the `<input>` element
disabled    | boolean | false         | Disables the `<input>` element
id          | string  | null          | Sets an id for the `<input>` element. If not specified, the name would be used instead
name        | string  | **required**  | Sets the `name` for the `<input>` element
placeholder | string  | ''            | Sets the placeholder for the `<input>` element
style       | object  | {}            | Adds custom inline style to the `<input>` element
type        | string  | 'text'        | HTML types: `text`, `email`, `password` and `number`
