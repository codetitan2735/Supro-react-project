import React, { useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawer } from '~/store/app/action';
import ModuleDrawerMenuSidebar from '~/components/shared/drawers/modules/ModuleDrawerMenuSidebar';

const DrawerDefault = ({ isDrawerShow }) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    function handleClose() {
        dispatch(toggleDrawer(false));
    }

    return (
        <div className={`ps-drawer ${isDrawerShow ? 'active' : ''}`} ref={ref}>
            <div className="ps-drawer__header">
                <button
                    className="ps-drawer__close"
                    onClick={(e) => handleClose()}>
                    <i className="icon-cross"></i>
                </button>
            </div>
            <div className="ps-drawer__wrapper">
                <ModuleDrawerMenuSidebar />
            </div>
        </div>
    );
};

export default connect((state) => state.app)(DrawerDefault);
