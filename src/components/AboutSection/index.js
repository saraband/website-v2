import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import { BoxShadow, NoSelect } from '../../misc/styles'
import ella from '../../images/ella.jpg'
import Colors from '../../constants/Colors'
import { Tag, TagsList } from '../ProjectsSection/Project'
import StackOverflowSVG from '../../images/stackoverflow.svg'
import GithubSVG from '../../images/github.svg'
import PaperclipSVG from '../../images/paperclip.svg'

const AboutTags = [
  'React',
  'GraphQL',
  'NodeJS',
  'Apollo',
  'Redux',
  'PostgreSQL',
  'Express',
  'VueJS'
];

const Image = styled.div`
  width: 30%;
  flex-grow: 1;
  flex-shrink: 0;
  min-width: 250px;
  margin-left: -30px;
  transform: translate3d(-20px, 0, 0);
  background-image: url(${ella});
  background-size: cover;
  background-position: center;
  ${BoxShadow}
`;

const LinksContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const LinkLogo = styled.img`
  height: ${FontSizes.MEDIUM};
  margin: 0;
  margin-right: 10px;
  ${NoSelect}
`;

const ExternalLink = styled.a.attrs({
  target: '_blank'
})`
  font-size: ${FontSizes.MEDIUM};
  display: flex;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 0;
  background-color: ${Colors.LIGHT_TURQUOISE};
  color: ${Colors.GREY};
  margin-right: 20px;
  padding: 15px;
  transition: all 0.15s ease-in-out;
  filter: grayscale(100%);
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    filter: grayscale(0%);
    ${BoxShadow}
  }
  
  &:last-child {
    margin-right: unset;
  }
`;

const Content = styled.div`
  background-color: white;
  margin-left: 30px;
  padding: 20px;
  display: flex;
  flex-direction: row;
`;

const Right = styled.div`
  flex-grow: 1;
`;

const Title = styled.h3`
  color: ${Colors.LIGHT_GREY};
  font-size: ${FontSizes.LARGE};
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section
        title='About'
        anchor='about'
        position='right'
        >
        <Content>
          <Image>f</Image>
          <Right>
            Self taught javascript developper, I’m passionate about new technologies.
            Constantly on the lookout for new challenges, I like to constantly push my
            limits and thrive outside my comfort zone.
            <Title>The stacks I like to work with</Title>
            <TagsList>{AboutTags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</TagsList>
            <LinksContainer>
              <ExternalLink href='/CV.png'>
                <LinkLogo src={PaperclipSVG} alt='Curriculum'/>
                Curriculum
              </ExternalLink>
              <ExternalLink href='https://github.com/saraband'>
                <LinkLogo src={GithubSVG} alt='Github'/>
                Github
              </ExternalLink>
              <ExternalLink href='https://stackoverflow.com/users/1419590/saraband'>
                <LinkLogo src={StackOverflowSVG} alt='Stackoverflow'/>
                StackOverflow
              </ExternalLink>
            </LinksContainer>
          </Right>
        </Content>
      </Section>
    );
  }
};
