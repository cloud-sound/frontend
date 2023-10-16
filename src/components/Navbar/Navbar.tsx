import { cloudsoundLogo } from 'assets';
import * as S from './Navbar.style';
import React from 'react';

const NavbarButton = ({ title }: { title: string }) => {
  return <S.ButtonContainer>{title}</S.ButtonContainer>;
};

const Navbar = () => {
  return (
    <S.Container>
      <S.NavigationContentWrapper>
        <S.LogoWrapper href="/">
          <S.LogoImg src={cloudsoundLogo} />
          <S.LogoTitle>CLOUD SOUND</S.LogoTitle>
        </S.LogoWrapper>
        <NavbarButton title="회사 소개" />
        <NavbarButton title="제품 소개" />
        <NavbarButton title="구매 절차" />
        <NavbarButton title="설치 사례" />
        <S.QuestionButton>질문 / 답변</S.QuestionButton>
        <S.EstimateRequestButton>견적 의뢰</S.EstimateRequestButton>
      </S.NavigationContentWrapper>
    </S.Container>
  );
};

export default Navbar;
