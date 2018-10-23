/**
 * edit-toggle.component
 */
import * as React from 'react';
import { IWithEditToggleProps, WithEditToggle } from '~/with-edit-toggle';
import './edit-toggle.component.scss';

export interface IEditToggleProps {
  truth: boolean;
}

export interface IInternalEditToggleProps extends IWithEditToggleProps {
  truth: boolean;
}

export const EditToggleC: React.SFC<IInternalEditToggleProps> = (props: IInternalEditToggleProps) => {
  return (
    <div className="edit-toggle">
      EditToggle
      <p>truth: &nbsp; {props.truth.toString()}</p>
    </div>
  );
};

export const EditToggleComponent = WithEditToggle<IInternalEditToggleProps>()(EditToggleC);
