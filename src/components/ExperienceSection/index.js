import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import Colors from '../../constants/Colors'

const Content = styled.div`
  background-color: ${Colors.WHITE};
`;

const ExperienceList = styled.ul`
  list-style-type: none;
  margin: 0;
`;

const Experience = styled.li`
  border-left: 1px solid ${Colors.TURQUOISE_2};
  margin-left: 30%;
  margin-bottom: 0;
  position: relative;
  padding-top: 30px;
  padding-left: 20px;
  
  &:last-child {
    padding-bottom: 30px;
  }
  
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 9px;
    height: 9px;
    background-color: ${Colors.TURQUOISE_2};
    transform: translate3d(-50%, 0, 0) rotate(45deg);
    top: 42px;
    left: 0;
  }
`;

const ExperienceDate = styled.h4`
  position: absolute;
  top: 35px;
  left: -20px;
  transform: translate3d(-100%, 0, 0);
  color: ${Colors.LIGHT_GREY};
`;

const ExperienceTitle = styled.h3`
  margin-bottom: 10px;
`;

const ExperienceCompany = styled.h4`
  color: ${Colors.TURQUOISE_2};
  font-weight: normal;
  margin-bottom: 20px;
`;

const ExperienceDescription = styled.p`
  font-size: ${FontSizes.SMALL};
  margin-bottom: 5px;
  padding-right: 40px;
`;
const ExperienceExternalLink = styled.a`
  text-decoration: none;
  color: ${Colors.DARK_TURQUOISE};
  font-size: ${FontSizes.SMALL};
  
  &:hover {
    color: ${Colors.TURQUOISE_2};
  }
`;

const HighLight = styled.strong`
  color: ${Colors.DARK_TURQUOISE}
  font-weight: normal;
  background-color: ${Colors.LIGHT_TURQUOISE};
`;

const ExperiencesData = [
  {
    date: 'July 2018 - Now',
    title: 'Front-end Developper',
    company: 'AudioValley, Shoutcast',
    link: 'https://shoutcast.com/',
    description: (
      <ExperienceDescription>
        Currently working on several commercial projects including the Shoutcast Radiomanager, AudioValley and an internal manager tool.
        Using recent front-end frameworks and javascript such as <HighLight>React</HighLight>, <HighLight>VueJS</HighLight>, <HighLight>Vuex</HighLight>
        , <HighLight>Nuxt</HighLight> and <HighLight>Redux</HighLight>.
      </ExperienceDescription>
    )
  },
  {
    date: 'Feb. 2018 - Now',
    title: 'Design & full stack development',
    company: 'Personal projects',
    link: '#projects',
    description: (
      <ExperienceDescription>
        Development of a few personal projects in my spare time. Those include a fictional Food delivery application and
        a image upload platform. Mainly using <HighLight>React</HighLight>, <HighLight>Apollo</HighLight> and <HighLight>GraphQL</HighLight>.
        For more information, see you in the <HighLight>#Projects</HighLight> section !
      </ExperienceDescription>
    )
  },
  {
    date: 'Sept - Dec. 2015',
    title: 'Visual identity design',
    company: 'Jeux du Golfe 2017 - Dubai',
    link: 'http://lfigp.org/project/jeux-du-golfe-2017/',
    description: (
      <ExperienceDescription>
        Visual identity research and design for a sport event of the French Highschool of Dubai.
        Conception of a logo, t-shirts and posters related to the event.
        Technologies used: <HighLight>Photoshop</HighLight>, <HighLight>Illustrator</HighLight>, <HighLight>InDesign</HighLight>.
      </ExperienceDescription>
    )
  },
  {
    date: 'March - June 2014',
    title: 'Motion design & web design',
    company: 'AG Conseil - Barcelona',
    link: 'https://vimeo.com/user32855252',
    description: (
      <ExperienceDescription>
        Conception and production of several motion design ad video for AG Conseil.
        Technologies used: <HighLight>Premiere</HighLight>, <HighLight>After Effects</HighLight>, <HighLight>Illustrator</HighLight>.
      </ExperienceDescription>
    )
  }
];

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section
        title='Experience'
        anchor='experience'
        position='right'
        >
        <Content>
          <ExperienceList>
            {ExperiencesData.map(({
              date,
              title,
              description,
              link,
              company
            }, index) => (
              <Experience key={index}>
                <ExperienceDate>{date}</ExperienceDate>
                <ExperienceTitle>{title}</ExperienceTitle>
                <ExperienceCompany>{company}</ExperienceCompany>
                {description}
                <ExperienceExternalLink href={link} target='_blank'>{link}</ExperienceExternalLink>
              </Experience>
            ))}
          </ExperienceList>
        </Content>
      </Section>
    );
  }
};
