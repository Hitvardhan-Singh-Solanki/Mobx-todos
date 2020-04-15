import React, { useEffect } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default withRouter((props) => {
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    props.history.push(`/${activeItem}`);
  }, []);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    props.history.push(`/${name}`);
  };

  return (
    <div className={'navbar-container'}>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="add-todo"
          active={activeItem === 'add-todo'}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Header as="h3" color="green">
              TODOS-APP
            </Header>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
});
