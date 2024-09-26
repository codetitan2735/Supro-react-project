import React from 'react';
import { Drawer } from 'antd';
import { toggleDrawer } from '~/store/app/action';
import { connect, useDispatch } from 'react-redux';
import MenuAccordion from '~/components/shared/menus/MenuAccordion';
import { main_menu } from '~/public/static/data/menu.json';

const DrawerSidebar = (props) => {
    const dispatch = useDispatch();

    function handleClose() {
        dispatch(toggleDrawer(false));
    }

    return (
        <Drawer
            className="ps-drawer"
            placement="right"
            closable={false}
            onClose={false}
            width={350}
            visible={props.isDrawerShow}>
            <div className="ps-panel--sidebar active" id="navigation-mobile">
                <div className="ps-panel__header">
                    <a
                        className="ps-panel__close"
                        href="#"
                        onClick={handleClose}>
                        <i className="icon-cross"></i>
                    </a>
                </div>
                <div className="ps-panel__content">
                    <div className="ps-panel__menu">
                        <MenuAccordion
                            data={main_menu}
                            classes="menu menu--accordion"
                        />
                    </div>

                    <figure className="ps-panel__bottom">
                        <figcaption>Contact Us</figcaption>
                        <p>
                            69 Halsey St, Ny 10002, New York, United States
                            support.center@unero.co (0091) 8547 632521
                        </p>
                    </figure>
                </div>
            </div>
        </Drawer>
    );
};

export default connect((state) => state.app)(DrawerSidebar);
