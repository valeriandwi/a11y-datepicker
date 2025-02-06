# a11y-datepicker-react

[![Npm package version](https://badgen.net/npm/v/a11y-datepicker-react)](https://npmjs.com/package/a11y-datepicker-react)
![repo size](https://img.shields.io/github/repo-size/valeriandwi/a11y-datepicker)

`a11y-datepicker-react` is a lightweight, accessible, and customizable date picker component for React. Built with accessibility in mind, it provides seamless keyboard navigation and screen reader support.

## Features

- Customizable date formats
- Lightweight and easy to integrate
- Supports "click" or "hover" trigger actions
- Built-in styling with the flexibility to override styles

## Keyboard Accessible

When the calendar is opened, focus is set on the current date

- Press `← / →` arrow keys to moves focus to the previous or next day
- Press `↑ / ↓` arrow keys to moves focus to the same day of previous or next week
- Press `( Ctrl + → )` key to change to the next month
- Press `( Ctrl + ← )` key to change to previous month
- Press `( Shift + → )` key to change to the next year
- Press `( Shift + ← )` key to change to previous year
- Press `↵ Enter` key to activate the selected date
- Press `Esc` key to close the dialog modal

## Usage

```tsx
import React from "react";
import DatePicker from "a11y-datepicker-react";

const App = () => {
  const handleDateChange = (date) => {
    console.log("Selected date:", date.format("DD-MM-YYYY"));
  };

  return (
    <DatePicker
      placeholder="Select a date"
      format="DD-MM-YYYY"
      onChange={handleDateChange}
    />
  );
};

export default App;
```

## Props

### DatePicker Props

### DatePicker Props

| **Prop**         | **Type**                | **Default**         | **Description**                                                                |
| ---------------- | ----------------------- | ------------------- | ------------------------------------------------------------------------------ |
| `placeholder`    | `string`                | `format` value      | Placeholder text for the input field.                                          |
| `format`         | `string`                | `"DD-MM-YYYY"`      | Format in which the selected date is displayed.                                |
| `inputClassName` | `string`                | `undefined`         | Additional CSS class names for styling the input field.                        |
| `trigger`        | `click`                 | `hover`             | Determines how the date picker popover is triggered.                           |
| `onChange`       | `(date: Dayjs) => void` | `undefined`         | Callback function triggered when a date is selected. Returns a `Dayjs` object. |
| `defaultValue`   | `Dayjs`                 | `dayjs(Date.now())` | The default date value for the date selector.                                  |

## Styling

The date picker comes with minimal built-in styles to provide a good base. You can extend or override these styles by passing custom class names via the inputClassName prop or using CSS.

Example:

```css
.custom-input {
  border: 2px solid #4caf50;
  border-radius: 8px;
  padding: 10px;
}
```

```tsx
<DatePicker placeholder="Select a date" inputClassName="custom-input" />
```

## Accessibility

This component is designed to be accessible out of the box:

- Uses ARIA attributes for screen reader support.
- Fully keyboard-navigable.

## Development

To contribute or modify the library locally:

Clone the repository.
Install dependencies using npm install.
Start the development server using npm run dev.

---

Feel free to report issues or contribute to this project!

## Author

Developed by Valerian Dwi Purnomo. Feedback and contributions are always welcome!
