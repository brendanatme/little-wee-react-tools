/**
 * with-is-mobile
 * 
 * inject an isMobile variable into a component
 * 
 * usage:
 * 
 * ```
 * import { IWithIsMobileProps, WithIsMobile } from 'react-tools/with-is-mobile';
 * 
 * interface IMyComponentProps extends IWithIsMobileProps {
 *   // ... component props here ...
 * }
 * 
 * const MyComponent: React.SFC<IMyComponentProps> = (props: IMyComponentProps) => (<div>{props.isMobile}</div>);
 * 
 * export const MyExport = WithIsMobile<IMyComponentProps>(MyComponent);
 * ```
 */
import * as React from 'react';

export interface IWithIsMobileProps {
  isMobile: boolean;
}

/**
 * set the isMobile value
 * 
 * this code might be running in an environment
 * without a 'window' object
 * so safely handle that case
 */
let isMobile: boolean = false;
try {
  const ua = navigator.userAgent;
  isMobile = !!(ua.match(/Android/i)
    || ua.match(/webOS/i)
    || ua.match(/iPhone/i)
    || ua.match(/iPad/i)
    || ua.match(/iPod/i)
    || ua.match(/BlackBerry/i)
    || ua.match(/Windows Phone/i));
} catch (e) {
  console.warn('react-tools/with-is-mobile: `window` object not found, cannot determine isMobile value. Defaulting to `false`'); // tslint:disable-line
}

export function WithIsMobile<P extends IWithIsMobileProps>(
  Composed: React.ComponentType<P>
) {
  type ComposedProps = Subtract<P, IWithIsMobileProps>;

  const withIsMobile: React.SFC<ComposedProps> = (props: ComposedProps) => {
    return (
      <span className="rt-with-is-mobile">
        <Composed
          isMobile={isMobile}
          {...props}
        />
      </span>
    );
  };

  return withIsMobile;
}
