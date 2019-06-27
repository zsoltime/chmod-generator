import React from 'react';

import { Lead, Wrapper } from './Common.style';

const Description = () => (
  <section>
    <Wrapper>
      <Lead>
        <code>chmod</code> is a Unix command that lets you tell the
        system how much (or little) access it should permit to a file
        or directory. The name is an abbreviation of change mode.
      </Lead>
    </Wrapper>
  </section>
);

export default Description;
