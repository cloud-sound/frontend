import React from 'react';
import { companyIntroductionHeaderImage } from 'assets';
import * as S from './Header.style';
import { Outlet } from 'react-router-dom';

interface Props {
  image?: string;
}

const Header = ({ image }: Props) => {
  return (
    <>
      <S.Container image={companyIntroductionHeaderImage} />
      <Outlet />
    </>
  );
};

export default Header;
