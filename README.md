
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

export interface IMyComponentProps {
  // ... component props here ...
}

interface IInternalMyComponentProps extends IWithIsMobileProps {
  // ... component props here ...
}

const MyComponent: React.SFC<IInternalMyComponentProps> = (props: IInternalMyComponentProps) => (
  <div>{props.isMobile}</div>
);

export const MyExport = WithIsMobile<IInternalMyComponentProps>(MyComponent);
```

#### WithEditToggle

```typescript
import * as React from 'react';
import { IWithEditToggleProps, WithEditToggle } from 'ts-react-tools';

export interface IMyComponentProps {
  // ... component props here ...
}

interface IInternalMyComponentProps extends IWithIsMobileProps {
  // ... component props here ...
}

const MyComponent: React.SFC<IInternalMyComponentProps> = (props: IInternalMyComponentProps) => (
 <div>
   <p>Is Editing: {props.isEditing}</p>
   <button onClick={props.startEditing}>Start Editing</button>
   <button onClick={props.quitEditing}>Quit Editing</button>
   <button onClick={props.toggleEdit}>Toggle Edit</button>
 </div>
);

export const MyExport = WithEditToggle<IInternalMyComponentProps>({
  clickToEdit: true, // default
  clickoff: true, // default
})(MyComponent);
```
