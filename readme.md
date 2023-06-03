# API Icons

Easily render API icons in your React app. Either directly use an icon by importing it from the `@trigger.dev/api-icons` package or use the `ApiIcon` component to render any icon by name.

This library was created for use in [Trigger.dev](https://trigger.dev) to render API icons.

Please note that the copyright and trademarks of all icons belong to their respective companies. Please use them responsibly and ensure you follow the terms of use of each company. We're not responsible for any misuse. You're on your own kids.

## Installation

Install using your favorite package manager, e.g. npm:

```
npm install @trigger.dev/api-icons
```

## Usage

DIrectly import a specific icon from the library and use them in your React components.

```tsx
import React from "react";
import { AirtableIcon, AsanaIcon } from "@trigger.dev/api-icons";

function App() {
  return (
    <div>
      {/* Style using classes, including Tailwind */}
      <AirtableIcon className="w-4 h-4" />
      {/* Or style */}
      <AsanaIcon style={{ width: "16px", height: "16px" }} />
    </div>
  );
}

export default App;
```

Or use the `ApiIcon` component to render any icon by name. This allows you to render API icons at runtime based on the name.

```tsx
import React from "react";
import { ApiIcon } from "@trigger.dev/api-icons";

function App() {
  return (
    <div>
      <ApiIcon name="airtable" className="w-4 h-4" />
      <ApiIcon name="asana" style={{ width: "16px", height: "16px" }} />
    </div>
  );
}
```

## Icons

The following icons are available:

- airtable
- asana

## Contributing

We welcome new icon contributions and fixes. Please follow the steps below to contribute.

### Steps

- Clone the repository to your local machine.
- Install the dependencies using `npm install`.
- View the components in the browser using `npm run storybook`.
- Make your changes, and ensure that:
  - icons are inline svgs
  - icons have the width and height removed and have a valid viewBox
  - icons have a title element with the name of the icon
  - the icon fills the viewbox, but isn't stretched
- Check your changes look correct in Storybook in your browser.
- Create a pull request to the main repository with a good description.

## License

This library is licensed under the [MIT License](https://github.com/triggerdotdev/api-icons/blob/main/license).

## Trigger.dev

[Trigger.dev](https://trigger.dev) is a background Jobs framework. It makes it easy to create long-running jobs directly in your codebase with features like API integrations, webhooks, scheduling and delays.
