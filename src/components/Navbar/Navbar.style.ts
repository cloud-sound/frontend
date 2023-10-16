import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  flex-shrink: 0;
  justify-content: center;
  border-bottom: 1px solid #d9d9d9;
`;

export const NavigationContentWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  height: 93;
  text-decoration: none;
  padding: 0 20px;
  cursor: pointer;
`;

export const LogoTitle = styled.div`
  color: #007fad;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LogoImg = styled.img`
  width: 108px;
  height: 108px;
  flex-shrink: 0;
`;

export const ButtonContainer = styled.button`
  width: 149px;
  height: 93px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 7.5px;
  margin-right: 7.5px;
  background-color: #fff;
  &:hover {
    background-color: #d9d9d9;
    color: #007fad;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const QuestionButton = styled.button`
  width: 178px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #007fad;
  background: rgba(217, 217, 217, 0);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const EstimateRequestButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 178px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(0, 127, 173, 0.9);
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 13px;
`;
