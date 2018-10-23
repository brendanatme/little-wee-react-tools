/**
 * edit-toggle.container
 */
import * as React from 'react';
import { IEditToggleProps, EditToggleComponent } from './edit-toggle.component';

export class EditToggle extends React.Component<IEditToggleProps> {
  public render() {
    return (
      <EditToggleComponent {...this.props} />
    );
  }
}
