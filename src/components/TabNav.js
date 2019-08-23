import React from "react";
import { Tab, Menu, Icon, Segment } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import EpisodesList from "./EpisodesList";
import LocationsList from "./LocationsList";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    return (
        <div>
            <Menu attached='top' tabular>
                <Menu.Item>
                    <NavLink to="/">Home Page</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/characters">Characters</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/locations">Locations</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/episodes">Episodes</NavLink>
                </Menu.Item>
            </Menu>

            <Segment attached='bottom'>
                <Route exact path="/" component={WelcomePage}/>
                <Route path="/characters" component={CharacterList}/>
                <Route path="/locations" component={LocationsList}/>
                <Route path="/episodes" component={EpisodesList}/>
            </Segment>
 
        </div>
    )
};

