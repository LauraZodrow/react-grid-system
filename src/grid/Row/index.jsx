import React from 'react';
import getStyle from './style.css';
import ClearFix from '../../utilities/ClearFix';

export default class Row extends React.Component {
  static propTypes = {
    /**
     * Content of the element
     */
    children: React.PropTypes.node.isRequired,
    /**
     * Optional styling
     */
    style: React.PropTypes.objectOf(
       React.PropTypes.oneOfType([
         React.PropTypes.number,
         React.PropTypes.string,
       ]),
     ),
  };

  static defaultProps = {
    style: {},
  }

  static contextTypes = {
    gutterWidth: React.PropTypes.number,
  };

  render = () => {
    const { children, style, ...otherProps } = this.props;
    const theStyle = getStyle({
      gutterWidth: this.context.gutterWidth,
      moreStyle: style,
    });
    return (
      <div style={theStyle} {...otherProps}>
        {children}
        <ClearFix xs sm md lg xl />
      </div>
    );
  }
}
