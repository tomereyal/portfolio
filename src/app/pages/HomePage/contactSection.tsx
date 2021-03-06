import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInbox, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
//@ts-ignore
import tomersResume from "../../../assests/tomerResumeFinal.pdf";

const COLOR_CONFIG = { animationColor: `#fa9eaa` };

const InfoContainer = styled.div`
  ${tw`
  flex
  flex-row
  items-center
  justify-between
`}
`;

const InfoItem = styled.div`
  /* color: #328037; */

  font-weight: 700;

  ${tw`
  text-sm
    m-3
    p-3
    rounded-md
    cursor-pointer
  text-white
`}
  background-color: #272323dc;
  background-image: linear-gradient(
      90deg,
      ${COLOR_CONFIG.animationColor} 50%,
      transparent 50%
    ),
    linear-gradient(90deg, ${COLOR_CONFIG.animationColor} 50%, transparent 50%),
    linear-gradient(0deg, ${COLOR_CONFIG.animationColor} 50%, transparent 50%),
    linear-gradient(0deg, ${COLOR_CONFIG.animationColor} 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 15px 2px, 15px 2px, 2px 15px, 2px 15px;
  background-position: left top, right bottom, left bottom, right top;
  animation: border-dance 1s infinite linear;
  transition: transform linear 300ms;
  &:hover {
    transform: scale(1.1);
  }
  @keyframes border-dance {
    0% {
      background-position: left top, right bottom, left bottom, right top;
    }
    100% {
      background-position: left 15px top, right 15px bottom, left bottom 15px,
        right top 15px;
    }
  }
`;

const InfoText = styled.span`
  padding: 0px 6px;
  ${tw`
    md:w-20
    md:inline
    hidden
    `}
`;

const Icon = styled.span`
  ${tw`
  md:w-24
  md:h-24
  p-2
  rounded-full
  border
  border-solid
  
`}

  border-color: #0080004c
`;

const ImageContainer = styled.img`
  /* height: 15em; */
  border: 2px solid #fffffff7;

  ${tw`
  inline-block
h-5
w-5
md:h-9
md:w-9
rounded-full
`}
  min-width: 20px;
`;

export default function ContactSection() {
  const sendMail = () => {
    const mailto: string =
      "mailto:tomereyal93@gmail.com?subject=Test subject&body=Body content";
    window.location.href = mailto;
  };

  const sendWhatsapp = () => {
    const whatsappUrl =
      "https://wa.me/972506871440?text=I%20just%20checked%20out%20your%20portfolio%20.%20How%20are%20you%20?";
    window.open(whatsappUrl, "_blank");
  };
  const openPDF = () => {
    window.open(tomersResume, "_blank");
  };

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <InfoContainer>
        <InfoItem onClick={onOpenModal}>
          <Icon>
            <FontAwesomeIcon icon={faPhoneVolume} />
          </Icon>

          <InfoText>050-687-1440</InfoText>
        </InfoItem>
        <InfoItem onClick={sendWhatsapp}>
          <Icon>
            <FontAwesomeIcon icon={faWhatsapp} />
          </Icon>
          <InfoText>Whatsapp</InfoText>
        </InfoItem>
        <InfoItem onClick={sendMail}>
          <Icon>
            <FontAwesomeIcon icon={faInbox} />
          </Icon>
          <InfoText>Tomereyal93@gmail.com</InfoText>
        </InfoItem>
        <InfoItem onClick={openPDF}>
          <ImageContainer
            src={"https://i.ibb.co/84D3T67/tomerPic.png"}
          ></ImageContainer>
          <InfoText>Resume</InfoText>
        </InfoItem>
      </InfoContainer>

      <Modal open={open} onClose={onCloseModal} center>
        <InfoItem>050-687-1440</InfoItem>
      </Modal>
    </>
  );
}
