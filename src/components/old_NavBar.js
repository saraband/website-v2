import React, { Fragment } from 'react';
import styled from 'styled-components';

const LIGHT_GREY = '#282923';
const GREY = '#1d1d19';
const WHITE = '#f8f9f6';
const DARK_WHITE = '#b8b6b8';

const StyledBar = styled.nav`
  height: 100vh;
  width: 200px;
  background-color: #464c4f;
  color: ${WHITE};
  top: 0;
  left: 0;
  position: sticky;
  z-index: 500;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
`;

const Section = styled.h3`
  font-family: 'Roboto';
  font-weight: normal;
  position: relative;
  font-size: 20px;
  color: ${WHITE};
  padding: 10px;
  margin-left: 20px;
  border-left: 1px solid ${DARK_WHITE};
  padding-left: 15px;
  transition: all 0.3s ease-in-out;
  background-color: ${p => p.selected
    ? 'rgba(255, 255, 255, 0.1)'
    : 'transparent'  
  };

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    ${p => p.selected
      ? 'width: 8px; height: 8px; transform: rotate(45deg);'
      : 'width: 4px; height: 4px; transform: rotate(0deg);'
    };
    background-color: ${p => p.selected ? WHITE : DARK_WHITE};
    top: ${p => p.selected ? '17px' : '19px'};
    left: ${p => p.selected ? '-4px' : '-2.5px'};
  }
`;

const Subsection = styled(Section)`
  font-weight: lighter;
  font-size: 17px;
  color: ${WHITE};
`;

const sections = [
  {
    name: 'AboutSection',
    subsections: [
      {
        name: 'SkillsSection & interests',
        anchor: 'skills-and-interests'
      },
      {
        name: 'ExperienceSection',
        anchor: 'experience'
      }
    ]
  },
  {
    name: 'ProjectsSection',
    subsections: [
      {
        name: 'Hotbox',
        anchor: 'hotbox'
      },
      {
        name: 'Nuage',
        anchor: 'nuage'
      }
    ]
  },
  {
    name: 'Contact',
    subsections: [
      {
        name: 'Github',
        anchor: 'https://www.github.com/saraband'
      },
      {
        name: 'StackOverflow',
        anchor: 'https://www.stackoverflow.com/saraband'
      }
    ]
  }
];

const Blank = styled.div`
  margin-left: 20px;
  border-left: 1px solid ${DARK_WHITE};
  flex-grow: 1;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);

    this.sectionRefs = new Array(sections.length).fill(React.createRef());
    this.tick = false;
    this.state = {
      currentSection: 0
    };
  }

  /**
   * Watch the resize and scroll event so we can update
   * and display the nav bar
   */
  componentDidMount() {
    document.addEventListener('scroll', this.watchScrollAndResize);
    window.addEventListener('resize', this.watchScrollAndResize);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.watchScrollAndResize);
    window.removeEventListener('resize', this.watchScrollAndResize);
  }

  /**
   * Check what section we're in and update the navbar
   */
  computeCurrentSection = () => {
    const {
      pageXOffset,
      pageYOffset,
      innerHeight,
      innerWidth
    } = window;

    this.tick = false;

    this.setState({
      currentSection: 'Hotbox'
    })
  }

  watchScrollAndResize = () => {
    if (!this.tick) {
      this.tick = true;
      window.requestAnimationFrame(this.computeCurrentSection);
    }
  }

  render () {
    const {
      currentSection
    } = this.state;

    return null;
    return (
      <StyledBar>
        <Blank />
        {sections.map(({
          name,
          subsections
        }, index) => (
          <Fragment key={name}>
            <Section selected={currentSection === name}>
              {name}
            </Section>
            {subsections.map(sub => (
              <Subsection
                key={sub.name}
                selected={currentSection === sub.name}
                >
                {sub.name}
              </Subsection>
            ))}
          </Fragment>
        ))}
        <Blank />
      </StyledBar>
    );
  }
};
