/*
 * React-reveal Wrap Helper
 *
 * Copyright © Roman Nosov 2018
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import RevealBase from '../RevealBase';

export default function wrap(props, inEffect, outEffect, children, checksum = false) {
  if ('in' in props)
    props.when = props.in;
  if (React.Children.count(children) === 1)
    return  <RevealBase {...props} inEffect={inEffect} outEffect={outEffect} children={children} checksum={checksum} />
  children = React.Children.map(children, child =>
    <RevealBase {...props} inEffect={inEffect} outEffect={outEffect} children={child} checksum={checksum} />
  );
  return 'Fragment' in React ? <React.Fragment>{children}</React.Fragment> : <span>{children}</span>;
}
