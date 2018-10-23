
# Ts-React-Tools

A collection of re-usable react components and utilities. Available in JS and TypeScript

## Requirements

- Node.js v10.6+ (tested and working)

## Installation

- run `npm install --save ts-react-tools`

## Usage

### TypeScript

#### WithIsMobile

```typescript
import * as React from 'react';
import { IWithIsMobileProps, WithIsMobile } from 'ts-react-tools';

interface IMyComponentProps extends IWithIsMobileProps {
  // ... component props here ...
}

const MyComponent: React.SFC<IMyComponentProps> = (props: IMyComponentProps) => (
  <div>{props.isMobile}</div>
);

export const MyExport = WithIsMobile<IMyComponentProps>(MyComponent);
```

#### WithEditToggle

```typescript
import * as React from 'react';
import { IWithEditToggleProps, WithEditToggle } from 'ts-react-tools';

interface IMyComponentProps extends IWithEditToggleProps {
  // ... component props here ...
}

const MyComponent: React.SFC<IMyComponentProps> = (props: IMyComponentProps) => (
 <div>
   <p>Is Editing: {props.isEditing}</p>
   <button onClick={props.startEditing}>Start Editing</button>
   <button onClick={props.quitEditing}>Quit Editing</button>
   <button onClick={props.toggleEdit}>Toggle Edit</button>
 </div>
);

export const MyExport = WithEditToggle<IMyComponentProps>({
  clickToEdit: true, // default
  clickoff: true, // default
})(MyComponent);
```
