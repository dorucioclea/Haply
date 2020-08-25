import React, { Component } from "react";
import styled from "styled-components";

import Profile from "./Profile";
import Entries from "./Entries";
import Stats from "./Stats";
import Settings from "./Settings";
import { Tab } from "../../models/state";
import { NOTFOUND } from "dns";

const StyledTabs = styled.div`
  height: 100%;
  width: 100%;
`;

type Props = {
  activeTab: Tab;
};

export default class Tabs extends Component<Props> {
  render() {
    let activeTab;
    if (this.props.activeTab === Tab.Profile) activeTab = <Profile />;
    else if (this.props.activeTab === Tab.Entries) activeTab = <Entries />;
    else if (this.props.activeTab === Tab.Stats) activeTab = <Stats />;
    else if (this.props.activeTab === Tab.Settings) activeTab = <Settings />;
    else throw NOTFOUND;

    return <StyledTabs data-testid="Tabs">{activeTab}</StyledTabs>;
  }
}
