import React from 'react';

import { push as Menu } from 'react-burger-menu'

const Sidebar = (props) => {

  var styles = {

    bmMenu: {
      background: '#ffffff',
      paddingLeft: '24px',
      fontSize: '14px',
    },
    bmItemList: {
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block',
      color: 'black',
    },
  }

  return (
    < div >
      <Menu
        customBurgerIcon={false}
        customCrossIcon={false}
        isOpen={props.sidebarToggle}
        onStateChange={(mstate) => { !mstate.isOpen ? props.menuBarToggle() : null }}
        width={'189px'}
        styles={styles}
        style={{
          position: 'absolute',
          height: '100%',
          backgroundColor: props.nightMode ? '#212121' : '#FFFFFF',
          zIndex: '200'
        }}
      >
        <div>

          <p style={{
            position: 'absolute',
            top: '16px',
            fontSize: '24px',
            color: '#212121'
          }} >Fruit
        <span style={{ color: '#8BC34A' }}>News</span></p>

          <div style={{
            display: 'flex',
            position: 'relative',
            top: '70px',
            flexDirection: 'column'
          }} >


            <div style={{ paddingBottom: '32px' }}
            >
              <a className="menu-item"
                style={{ color: props.currentFilter === "allCategory" ? "#8BC34A" : "#000000" ,
                          fontSize:'20px',
                          textDecoration:'none'}}
                onClick={() => { props.setFilter("allCategory") }}  >
                All Categories</a>
            </div>

            <div style={{ paddingBottom: '32px' }}
            >
              <a className="menu-item"
                style={{ color: props.currentFilter === "games" ? "#8BC34A" : "#000000",
                fontSize:'20px',
                          textDecoration:'none' }}
                onClick={() => { props.setFilter("games") }} >
                Games</a>
            </div>

            <div style={{ paddingBottom: '32px' }}
            >
              <a className="menu-item"
                style={{ color: props.currentFilter === "news" ? "#8BC34A" : "#000000" ,
                fontSize:'20px',
                         textDecoration:'none'}}
                onClick={() => { props.setFilter("news") }} >
                News</a>
            </div>

            <div style={{ paddingBottom: '32px' }}
            >
              <a className="menu-item"
                style={{ color: props.currentFilter === "sports" ? "#8BC34A" : "#000000",
                fontSize:'20px',
                         textDecoration:'none' }}
                onClick={() => { props.setFilter("sports") }} >
                Sports</a>
            </div>

          </div>

        </div>


      </Menu>
    </div >

  );

}
export default Sidebar;