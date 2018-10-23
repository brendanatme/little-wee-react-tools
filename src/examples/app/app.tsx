import * as React from 'react';
import './app.scss';
import { IWithIsMobileProps, WithIsMobile } from '~/with-is-mobile';
import { EditToggle } from '../edit-toggle';

class AppClass extends React.Component<IWithIsMobileProps> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <h2>is mobile: {this.props.isMobile.toString()}</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/app.tsx</code> and save to reload.
        </p>
        <EditToggle truth={true} />
      </div>
    );
  }
}

export const App = WithIsMobile<IWithIsMobileProps>(AppClass);
