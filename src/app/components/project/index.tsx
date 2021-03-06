import React from "react";
//----myCOMPONENTS-------------------------------
import Button from "../button";
//----INSTALLED-COMPONENTS-----------------------
import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";
import { IProject } from "../../../typings/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SCREENS } from "../responsive";
//-----------------------------------------------
import blueSphere from "../../../assests/images/blueSphere.png";
import { useHistory } from "react-router-dom";

export interface IPropsProject extends IProject {
  inViewport?: boolean;
  index?: number;
}

//=============ANIMATIONS===========================
const bouncing = keyframes` 

  50% {transform: translateY(-15px)}
  `;

const resizeShadow = keyframes` 
 50% {
      background-size: 50%;}
  `;

const bounceAndResizeShadow = keyframes` 
50% {
    transform: translateY(-5px);
    background-size: 40%;}
`;
const stacksMover = keyframes`
  0%{
    transform: translateX(-150%);
  }
  
  100%{
    transform: translateX(150%);
  }
`;
//=====================================

interface IMainContainer {
  inViewport?: boolean;
}

const MainContainer = styled.div<IMainContainer>`
  width: 15.5em;
  min-height: 25em;
  max-height: 25em;
  ${tw`
    sm:m-2
    md:m-6
  `};
  @media (min-width: ${SCREENS.md}) {
    width: 18.5em;
  }
`;

interface IProjectContainer {
  index?: number;
  inViewport?: boolean;
}

const ProjectContainer = styled.div<IProjectContainer>`
  ${tw`
   w-full
   h-full
   flex
    flex-col
    items-center
    p-3
    pb-4
    rounded-md
    m-1
    cursor-move
  `};
`;

interface IShadowContainer {
  index?: number;
  inViewport?: boolean;
}

interface IOvalProject {
  index?: number;
  inViewport?: boolean;
  size?: number;
  color?: string;
}
const OvalProject = styled.div<IOvalProject>`
  animation: ${({ inViewport }) => (inViewport ? bouncing : "")}
    ${({ index = 0 }) => 3 + index}s ease-in-out 0.4s infinite;

  ${tw`
    flex
    flex-col
    items-center
    w-full
    p-3
    pb-4
    rounded-md
    m-1
    sm:m-3
    md:m-6
    overflow-hidden
    cursor-pointer
  `};
  height: ${({ size = 20 }) => size}em;
  width: ${({ size = 20 }) => size}em;
  box-shadow: inset 0 0 4px 2px rgba(146, 144, 144, 0.801),
    0 0 2px 2px rgba(53, 53, 53, 0.801);
  /* background-image: url(${blueSphere});
  background-position: 60% 35%; */
  border-radius: 50%;
  background-size: 125%;
  background-color: ${({ color }) => color};
  background-blend-mode: multiply;
  &&:hover {
    background-color: rgba(249, 240, 255, 0.5);
    box-shadow: 0 1.3px 20px -2px rgba(252, 249, 249, 0.883);
  }
`;

const ProjectThumbnail = styled.div`
  width: 60%;
  height: 40%;
  margin: 0 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    ${tw`
    mt-5
    
    
    `}
  }
`;

const ProjectTitle = styled.h3`
  ${tw`
    text-base
    font-bold
    text-white
    mt-6
    mb-1
    font-mono
  `};
`;

export const Separator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-400
    mt-2
    mb-2
  `};
`;

export const StacksContainer = styled.div<{ index?: number }>`
  animation: ${stacksMover} ${({ index = 0 }) => 9 + index}s linear infinite;
  ${tw`
    w-full
    flex
    justify-center
    items-center
    
  `};
`;

export const Stack = styled.p`
  ${tw`
  text-gray-300
    text-xs
    font-bold
    ml-2
    mr-2
  `};
`;

const ProjectDescription = styled.div`
  ${tw`
text-gray-200
px-7
text-center

`}
`;

export default function Project(props: IPropsProject) {
  const {
    title,
    description,
    stacks,
    thumbnail,
    link,
    slogan,
    path,
    inViewport,
    index = 0,
  } = props;

  const history = useHistory();
  const colorArr = [
    "rgba(207, 183, 223, 0.5)",
    "rgba(110, 246, 239, 0.5)",
    "rgba(233, 145, 145, 0.5)",
  ];

  const onButtonClick = (url: string) => {
    return () => {
      window.open(url);
    };
  };
  const goToProject = () => {
    if (path) history.push(path);
  };

  return (
    <MainContainer inViewport={inViewport}>
      <ProjectContainer index={index} inViewport={inViewport}>
        {/* <ShadowContainer></ShadowContainer> */}
        <OvalProject
          index={index}
          inViewport={inViewport}
          size={18}
          color={colorArr[index]}
          onClick={goToProject}
        >
          <ProjectThumbnail>
            <img src={thumbnail} alt="website" />
          </ProjectThumbnail>
          <ProjectTitle>{title}</ProjectTitle>
          <StacksContainer index={index}>
            {stacks && stacks.length
              ? stacks.map((stack) => <Stack>{stack}</Stack>)
              : ""}
          </StacksContainer>
          <Separator />

          <ProjectDescription>
            {slogan ? slogan : "Not available"}
          </ProjectDescription>
        </OvalProject>
      </ProjectContainer>
    </MainContainer>
  );
}

/* 

            
            <StacksContainer>
              {stacks && stacks.length
                ? stacks.map((stack) => <Stack>{stack}</Stack>)
                : ""}
            </StacksContainer>
            <Seperator />

            <ProjectDescription>
              {description ? description : "Not available"}
            </ProjectDescription>

            <ButtonsContainer>
              <Button
                onClick={onButtonClick("https://www.github.com")}
                shape="circle"
                theme="filled"
                bgc="green"
                text="Code"
              />
              <Button
                shape="circle"
                text="App"
                onClick={onButtonClick("https://www.facebook.com")}
              />
            </ButtonsContainer> */
