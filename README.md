# Formik TypeScript UI

[![NPM](https://img.shields.io/npm/v/formik_typescript_ui.svg)](https://www.npmjs.com/package/formik_typescript_ui)
[![license](https://img.shields.io/npm/l/formik_typescript_ui.svg)](https://github.com/RominaManzano/formik_typescript_ui/blob/master/LICENSE)

## Overview

Formik TypeScript UI, contains simple HTML form fields wrapped with Formik and written in TypeScript.

## Installation

```sh
npm install --save formik_typescript_ui
```

## Change Log

### [2.0.4] - 2019-12-12

This release contains breaking changes from the previous version.

#### Changed

- `index.ts` components export
- `HandleChange` type on `TagsInputField` was renamed to `HandleTagsChange`

#### Fixed

- React scripts dependencies
- Dependencies vulnerabilities

## Components

### CheckboxField

The CheckboxField component renders a simple HTML `<input>` of the type `checkbox` and its respective `<label>`.

**Props**

Name           | Type    | Default Value | Description
-------------- | ------- | ------------- | -----------
className      | string  | null          | Adds a custom class to the `<input>` element
classNameLabel | string  | null          | Adds a custom class to the `<label>` element
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
className      | string            | null          | Adds a custom class to each `<input>` element
classNameLabel | string            | null          | Adds a custom class to each `<label>` element
labelStyle     | object            | {}            | Adds custom inline style to each `<label>` element
options        | CheckOptionType[] | **required**  | Sets the required props for the `<CheckboxField />` components
style          | object            | {}            | Adds custom inline style to each `<input>` element

### DatePickerField

The DatePickerField component renders a simple HTML `<input>` of the type `date`.

**Props**

Name      | Type    | Default Value | Description
--------- | ------- | ------------- | -----------
className | string  | null          | Adds a custom class to the `<input>` element
disabled  | boolean | false         | Disables the `<input>` element
id        | string  | null          | Sets an id for the `<input>` element. If not specified, the name would be used instead
maxDate   | string  | null          | Sets the maximun date that can be selected. If not in the correct format `AAAA-MM-DD`, this validation won't have any effects
minDate   | string  | null          | Sets the minimun date that can be selected. If not in the correct formar `AAAA-MM-DD`, this validation won't have any effects
name      | string  | **required**  | Sets the name of the `<input>` element
style     | object  | {}            | Adds custom inline style to the `<input>` element

### RadioButtonField

The RadioButtonField component renders a simple HTML `<input>` of the type `radio` and its respective `<label>`.

**Props**

Name           | Type    | Default Value | Description
-------------- | ------- | ------------- | -----------
className      | string  | null          | Adds a custom class to the `<input>` element
classNameLabel | string  | null          | Adds a custom class to the `<label>` element
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
className      | string            | null          | Adds a custom class to each `<input>` element
classNameLabel | string            | null          | Adds a custom class to each `<label>` element
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
className    | string       | null          | Adds a custom class to the `<Select />` component
id           | string       | null          | Sets an id for the `<SelectContainer />`. If not specified, the name would be used instead
isDisabled   | boolean      | false         | Sets wether the `<Select />` is disabled or not
isLoading    | boolean      | false         | Sets wether the `<Select />` is loading its content (asynchronous) or not
isMulti      | boolean      | false         | Sets wether the `<Select />` allows for multiple selection or not
isSearchable | boolean      | false         | Sets wether the options can be searched or not
name         | string       | **required**  | Sets the `name` for the `<input>` element
options      | OptionType[] | **required**  | Sets the options for the `<Select />` component
placeholder  | string       | null          | Sets the placeholder for the `<input>` element
style        | object       | {}            | Style modifier methods as described on [react-select](https://react-select.com/props) docs

### TagsInputField

The TagsInputField component uses `react-tagsinput` to render the `input` element and it's respective tags. For more information on the `react-tagsinput` library, click [here](https://github.com/olahol/react-tagsinput).

**InputProps**

The `InputProps`, can be exported from the `react-tagsinput` library or defined as follows:

```typescript
interface InputProps {
  className: string;
  placeholder: string;
}
```

Default values for `inputProps`:

```typescript
const defaultInputProps: InputProps = {
  className: 'react-tagsinput-input',
  placeholder: 'Add a tag',
}
```

**PasteSplit**

The `PasteSplit` type, can be defined as follows:

```typescript
  type PasteSplit = (text: string) => string[];
```

```typescript
  const defaultPasteSplit: PasteSplit = (text: string) => (
    text.split(' ').map(word => word.trim());
  );
```

**TagProps**

The `TagProps`, can be exported from the `react-tagsinput` library or defined as follows:

```typescript
interface TagProps {
  className: string;
  classNameRemove: string;
}
```

Default values for `tagProps`:

```typescript
const defaultTagProps: TagProps = {
  className: 'react-tagsinput-tag',
  classNameRemove: 'react-tagsinput-remove',
}
```

**Props**

Name             | Type       | Default Value              | Description
---------------- | ---------- | -------------------------- | -----------
addOnBlur        | boolean    | false                      | Adds a tag on the `input` blur event
addOnPaste       | boolean    | false                      | Adds a tag on HTML5 paste
className        | string     | `react-tagsinput`          | Adds a custom class to the component's wrapper
disabled         | boolean    | false                      | Disables the `<input>` element
focusedClassName | string     | `react-tagsinput--focused` | Adds a custom class to the component's wrapper when it's focused
inputProps       | InputProps | `defaultInputProps`        | Props passed down to the `<input>` element
maxTags          | number     | `-1`                       | Sets a maximum amount of tags. Use `-1` for infinite tags
name             | string     | **required**               | Sets the `name` for the component
pasteSplit       | PasteSplit | `defaultPasteSplit`        | Function that splits the pasted text
tagProps         | TagProps   | `defaultTagProps`          | Props passed down to every `tag` component

### TextareaField

The TextareaField component renders a simple HTML `<textarea>`.

**Props**

Name        | Type    | Default Value | Description
----------- | ------- | ------------- | -----------
className   | string  | null          | Adds a custom class to the `<textarea>` element
disabled    | boolean | false         | Disables the `<textarea>` element
id          | string  | null          | Sets an id for the `<textarea>` element. If not specified, the name would be used instead
name        | string  | **required**  | Sets the `name` for the `<textarea>` element
placeholder | string  | null          | Sets the placeholder for the `<textarea>` element
style       | object  | {}            | Adds custom inline style to the `<textarea>` element

### TextField

The TextField component renders a simple HTML `<input>`.

**Props**

```typescript
type OnChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
type OnInput = (event: React.ChangeEvent<HTMLInputElement>) => void;
type RefType = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
```

Name        | Type      | Default Value | Description
----------- | --------- | ------------- | -----------
className   | string    | null          | Adds a custom class to the `<input>` element
disabled    | boolean   | false         | Disables the `<input>` element
forwardRef  | RefType   | undefined     | Sets a ref for the `<input>` element.
id          | string    | null          | Sets an id for the `<input>` element. If not specified, the name would be used instead
name        | string    | **required**  | Sets the `name` for the `<input>` element
max         | number    | undefined     | Sets the `max` for the `<input>` element
maxLength   | number    | undefined     | Sets the `maxLength` for the `<input>`
min         | number    | undefined     | Sets the `min` for the `<input>` element
minLength   | number    | undefined     | Sets the `minLength` for the `<input>` element
onChange    | OnChange  | undefined     | Sets the `onChange` function for the `<input>` element. When `undefined`, it takes the formik field default `onChange` function.
onInput     | OnInput   | undefined     | Sets the `onInput` function for the `<input>` element
onKeyDown   | OnKeyDown | undefined     | Sets the `onKeyDown` function for the `<input>` element
pattern     | string    | undefined     | Sets the `pattern` for the `<input>` element
placeholder | string    | null          | Sets the placeholder for the `<input>` element
style       | object    | {}            | Adds custom inline style to the `<input>` element
type        | string    | 'text'        | HTML types: `text`, `email`, `password` and `number`

### License

MIT © [Romina Manzano](https://github.com/RominaManzano)
