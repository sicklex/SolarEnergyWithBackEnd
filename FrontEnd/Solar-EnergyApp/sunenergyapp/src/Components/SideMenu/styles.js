import styled from "styled-components";
import { FaChartPie } from "react-icons/fa";
import { RiPulseFill } from "react-icons/ri";
import { GoGear } from "react-icons/go";

export const Container = styled.div`
  width: 100%;
  display: flex;

  img {
    width: 60%;
    margin-top: 50px;
  }
`;

export const Sidebar = styled.div`
  background-color: #fff;
  width: 345px;

  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #374557;
    margin-top: 20px;
    font-family: Poppins, sans-serif;
    line-height: 54px;
    background-color: #fff;
    height: 120px;
  }
`;

export const Li = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 250px;
  height: 50px;

  border-radius: 20px;
  &:hover {
    background-color: #4cbc9a;
    border-radius: 20px;
    cursor: pointer;
    padding: 16px, 24px, 16px, 24px;
  }

  &:hover {
    .graphic-icon,
    .gear-icon {
      color: #fff;
    }
  }

  &:hover {
    .unity-icon {
      background-color: #fff;
      color: #4cbc9a;
    }
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    color: #a098ae;
    width: 50%;
    font-family: Poppins, sans-serif;
  }
`;

export const GraphicIcon = styled(FaChartPie)`
  color: #a098ae;
  font-size: 25px;
`;

export const UnityIcon = styled(RiPulseFill)`
  background: #a098ae;
  color: white;
  border-radius: 5px;
  padding: 5px;
`;

export const GearIcon = styled(GoGear)`
  color: #a098ae;
  font-size: 30px;
`;
