/**
 * with-edit-toggle
 * 
 * enable/disable an editable state
 * on a component
 * and provide imperative methods
 * to start/quit editing
 * 
 * usage:
 * import { IWithEditToggleProps, WithEditToggle } from 'react-tools/with-edit-toggle';
 * 
 * interface IMyComponentProps extends IWithEditToggleProps {
 *   // ... component props here ...
 * }
 * 
 * const MyComponent: React.SFC<IMyComponentProps> = (props: IMyComponentProps) => (
 *  <div>
 *    <p>Is Editing: {props.isEditing}</p>
 *    <button onClick={props.startEditing}>Start Editing</button>
 *    <button onClick={props.quitEditing}>Quit Editing</button>
 *    <button onClick={props.toggleEdit}>Toggle Edit</button>
 *  </div>
 * );
 * 
 * export const MyExport = WithEditToggle<IMyComponentProps>()(MyComponent);
 */
import * as React from 'react';
import * as enhanceWithClickOutside from 'react-click-outside';
import { Subtract } from '../types';

export interface IWithEditToggleOptions {
  clickToEdit: boolean;
  clickoff: boolean;
}

export interface IWithEditToggleState {
  isEditing: boolean;
}

export interface IWithEditToggleProps {
  isEditing: boolean;
  quitEditing: () => void;
  startEditing: () => void;
  toggleEdit: () => void;
}

export function WithEditToggle<P extends IWithEditToggleProps>(
  options: IWithEditToggleOptions = { clickToEdit: true, clickoff: true },
) {
  return (Composed: React.ComponentType<P>): React.ComponentType<
    Subtract<P, IWithEditToggleProps>
  > => {
    class EditToggle extends React.Component<
      Subtract<P, IWithEditToggleProps>,
      IWithEditToggleState
    > {
      public state: IWithEditToggleState = {
        isEditing: false,
      };

      /**
       * toggleEdit
       * 
       * provide composed component with method
       * to call imperatively if required
       */
      public toggleEdit = () => {
        this.state.isEditing
          ? this.quitEditing()
          : this.startEditing();
      }

      /**
       * handleClickOutside
       * 
       * method called by enhanceWithClickOutside
       */
      public handleClickOutside = () => { // e
        this.quitEditing();
      }

      private handleClick = () => {
        if (!this.state.isEditing) {
          this.startEditing();
        }
      }

      private startEditing = () => {
        this.setState({ isEditing: true });
      }

      private quitEditing = () => {
        if (this.state.isEditing) {
          this.setState({ isEditing: false });
        }
      }

      public render() {
        return (
          <span
            className="rt-edit-toggle"
            onClick={options.clickToEdit ? this.handleClick : undefined}
          >
            <Composed
              isEditing={this.state.isEditing}
              quitEditing={this.quitEditing}
              startEditing={this.startEditing}
              toggleEdit={this.toggleEdit}
              {...this.props}
            />
          </span>
        );
      }
    }

    return options.clickoff
      ? enhanceWithClickOutside(EditToggle)
      : EditToggle;
  };
}
