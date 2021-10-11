import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
          Hi,<br/>
          I'm Vishnu Mohan
      </SectionTitle>
      <SectionText>
       a Javascript developer, working on the front-end.
      </SectionText>
      {/* <Button onClick={()=>window.location = "https://google.com"}>
        Learn more
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;