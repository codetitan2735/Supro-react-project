import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { changeShopGridView, toggleShopFilter } from '~/store/shop/action';

const ModuleShopActions = ({ isGridView, total = 0 }) => {
    const dispatch = useDispatch();

    function handleChangeViewMode(e) {
        e.preventDefault();
        dispatch(changeShopGridView(!isGridView));
    }

    function handleOpenDrawerFilter(e) {
        e.preventDefault();
        dispatch(toggleShopFilter(true));
    }

    return (
        <div className="ps-shop__right">
            <p>
                <strong>{total}</strong> {total > 1 ? 'Products' : 'Product'}{' '}
                Found
            </p>
            <div className="ps-shop__actions">
                <div className="ps-shop__filter">
                    <a
                        className="ps-shop__filter-toggle"
                        href="#"
                        onClick={(e) => handleOpenDrawerFilter(e)}>
                        Filter
                        <i className="fa fa-angle-down"></i>
                    </a>
                </div>
                <div className="ps-shop__sorting">
                    <span>Sortby</span>
                    <select className="ps-select form-control">
                        <option value="1">Default</option>
                        <option value="2">Avarage rating</option>
                        <option value="3">Newest</option>
                        <option value="4">Oldest</option>
                    </select>
                </div>
                <div className="ps-shop__layouts">
                    <a
                        className={isGridView ? 'active' : ''}
                        href="#"
                        onClick={(e) => handleChangeViewMode(e)}>
                        <i className="icon-icons2"></i>
                    </a>
                    <a
                        className={!isGridView ? 'active' : ''}
                        href="#"
                        onClick={(e) => handleChangeViewMode(e)}>
                        <i className="icon-list4"></i>
                    </a>
                </div>
                <a
                    className="ps-shop__filter-toggle--mobile ps-shop__filter-toggle"
                    href="#">
                    <i className="icon-equalizer"></i>
                </a>
            </div>
        </div>
    );
};

export default connect((state) => state.shop)(ModuleShopActions);
