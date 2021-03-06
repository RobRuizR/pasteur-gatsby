import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import urgencia from './icons/urgencia.png';
import domicilioIcon from './icons/domicilio.png';
import ubicacionSVG from './icons/ubicacion.svg';
import { device } from '../../utilities/device';

const Section = styled.section`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Compromise = styled.div`
  display: flex;

  ${device.tablet} {
    flex-direction: column;
  }
`;

const TextBlock = styled(Link)`
  color: white;
  background: ${props => props.backgroundcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-grow: 1;
  text-decoration: none;
  font-size: 1.8rem;
  font-family: ${props => props.theme.fontFamily.main};
  text-align: center;
  height: 25vw;
  box-sizing: border-box;

  ${device.tablet} {
    min-height: 6em;
  }
`;

const HideableTextBlock = TextBlock.extend`
  ${device.tablet} {
    display: none;
  }
`;

const ExternalLink = styled.a`
  color: white;
  background: ${props => props.backgroundcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-grow: 1;
  text-decoration: none;
  font-size: 1.8rem;
  box-sizing: border-box;
  font-family: ${props => props.theme.fontFamily.main};
  text-align: center;
  height: 25vw;

  ${device.tablet} {
    min-height: 6em;
  }
`;

const Healthcare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

const SectionHeader = styled.h2`
  font-family: ${props => props.theme.fontFamily.main};
  color: #959698;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.2rem;
  padding-bottom: 1em;
  text-align: center;

  ${device.tablet} {
    width: 90%;
    padding-bottom: 2.5rem;
  }
`;

const SectionSubheader = styled.p`
  font-family: ${props => props.theme.fontFamily.secondary};
  color: #959698;
  font-weight: 1.5em;
  line-height: 1.5rem;
  width: 60%;
  font-style: italic;
  text-align: center;

  ${device.tablet} {
    width: 90%;
  }
`;

const ValueProposition = styled.div`
  width: 39em;
  display: flex;
  justify-content: space-between;
  margin-top: 2em;

  ${device.tablet} {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const ValueCard = styled.div`
  width: 11em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${device.tablet} {
    padding: 1em 0;
  }
`;

const ValuCardIconContainer = styled.div`
  width: 120px;
  height: 120px;
  max-width: 120px;
  max-height: 120px;
  background: ${({ theme }) => theme.color.lightBlue};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ValueCardImage = styled.img`
  width: 70%;
  height: 70%;
`;

const ValueCardIcon = styled.img`
  width: 100%;
  max-width: 120px;
  height: 120px;
  background: ${({ theme }) => theme.color.lightBlue};
  border-radius: 100%;
`;

const ValueCardSupportText = styled.div`
  color: #1995c9;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily.main};
  text-transform: uppercase;
  text-align: center;
  padding-top: 1em;
`;

const Intro = () => (
  <Section>
    <Compromise>
      <HideableTextBlock to="/nosotros" backgroundcolor="#2c4486">
        Compromiso con
        <br />
        nuestros pacientes
      </HideableTextBlock>
      <TextBlock to="/servicios" backgroundcolor="#1995c9">
        Consulta nuestra
        <br />
        lista de servicios
      </TextBlock>
      <ExternalLink
        target="_blank"
        href="http://pasteurlab.fortiddns.com:38080/EclipseWebStandard/login"
        backgroundcolor="#2c4486"
      >
        Consulta de
        <br />
        resultados
      </ExternalLink>
    </Compromise>
    <Healthcare>
      <SectionHeader>siempre juntos, cuidándonos</SectionHeader>
      <SectionSubheader>
        Nuestro filosofía de trabajo es mantenernos en constante cambio,
        adaptando nuestros servicios al estilo de vida de nuestros diferentes
        pacientes.
      </SectionSubheader>
      <ValueProposition>
        <ValueCard>
          <ValuCardIconContainer>
            <ValueCardImage src={urgencia} />
          </ValuCardIconContainer>
          <ValueCardSupportText>
            Servicio
            <br />
            de urgencia
          </ValueCardSupportText>
        </ValueCard>
        <ValueCard>
          <ValueCardIcon src={ubicacionSVG} />
          <ValueCardSupportText>
            Siempre
            <br />
            cerca de ti
          </ValueCardSupportText>
        </ValueCard>
        <ValueCard>
          <ValuCardIconContainer>
            <ValueCardImage src={domicilioIcon} />
          </ValuCardIconContainer>
          <ValueCardSupportText>
            Servicio
            <br />a domicilio
          </ValueCardSupportText>
        </ValueCard>
      </ValueProposition>
    </Healthcare>
  </Section>
);

export default Intro;
