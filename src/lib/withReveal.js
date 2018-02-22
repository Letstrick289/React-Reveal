/*
 * withReveal Auxiliary Function For Making react-reveal Higher Order Components
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

function withReveal(WrappedComponent, effect) {
  return function(props) {

    function reveal(node, params) {
      return <effect.type {...effect.props} {...props} {...params}>{node}</effect.type>;
    }

    return (
      <WrappedComponent
        reveal={reveal}
        {...props}
      />
    );
  }

}

export default withReveal;
