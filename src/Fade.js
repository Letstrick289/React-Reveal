/*
 * Fade React Component
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { bool } from 'prop-types';
import Base from './Base';
import { animation } from './lib/globals';

const
  propTypes = {
    left: bool,
    right: bool,
    top: bool,
    bottom: bool,
    big: bool,
  },
  defaultProps = {
    
  };

function Fade({ left, right, up, down, top, bottom, big, ...props }) {
	const 
		dist = big ? '2000px' : '100%', 
		effect=`from { opacity: 0;${left||right||up||down||top||bottom ? ` transform: translate3d(${left?`-${dist}`:(right?dist:'0')}, ${down||top?`-${dist}`:(up||bottom?dist:'0')}, 0);` : ''}}`;
  return <Base {...props} animation={animation(effect)} />;
}


Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;
export default Fade;