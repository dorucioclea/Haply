import React, { Component } from "react";
import PersonOutline from "@material-ui/icons/PersonOutline";
import TimelineOutlined from "@material-ui/icons/TimelineOutlined";
import AddOutlined from "@material-ui/icons/AddOutlined";
import BarChart from "@material-ui/icons/BarChart";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
import styled from "styled-components";
import { Tab } from "../../models/state";

const StyledNavBar = styled.div`
  height: 50px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  text-decoration: none;
  color: black;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  color: white;
  transform: translateY(-25px);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

type Props = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

export default class NavBar extends Component<Props> {
  render() {
    return (
      <StyledNavBar data-testid="NavBar">
        <NavItem onClick={() => this.props.setActiveTab(Tab.Profile)}>
          <PersonOutline />
        </NavItem>
        <NavItem onClick={() => this.props.setActiveTab(Tab.Entries)}>
          <TimelineOutlined />
        </NavItem>
        <NavItem>
          <Circle>
            <AddOutlined />
          </Circle>
        </NavItem>
        <NavItem onClick={() => this.props.setActiveTab(Tab.Stats)}>
          <BarChart />
        </NavItem>
        <NavItem onClick={() => this.props.setActiveTab(Tab.Settings)}>
          <SettingsOutlined />
        </NavItem>
      </StyledNavBar>
    );
  }
}
