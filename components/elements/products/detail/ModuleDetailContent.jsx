import React, { useState } from 'react';
import ModuleDetailDescription from '~/components/elements/products/detail/ModuleDetailDescription';
import TableProductSize from '~/components/shared/tables/TableProductSize';
import SubModuleDetailComment from '~/components/elements/products/detail/modules/SubModuleDetailComment';

const ModuleDetailContent = () => {
    const tabItems = [
        { id: 1, text: 'description' },
        { id: 2, text: 'Addition Information' },
        { id: 3, text: 'review' },
    ];
    const [currentTab, setCurrentTab] = useState(tabItems[0]);
    function handleSetCurrentTab(e, item) {
        e.preventDefault();
        setCurrentTab(item);
    }

    // Views
    let tabContentView, tabListView;
    tabListView = tabItems.map((item) => (
        <li className={currentTab.id === item.id ? 'active' : ''} key={item.id}>
            <a
                href="#"
                className="text-capitalize"
                onClick={(e) => handleSetCurrentTab(e, item)}>
                {item.text}
            </a>
        </li>
    ));
    if (currentTab.id === 1) {
        tabContentView = <ModuleDetailDescription />;
    }
    if (currentTab.id === 2) {
        tabContentView = <TableProductSize />;
    }
    if (currentTab.id === 3) {
        tabContentView = <SubModuleDetailComment />;
    }

    return (
        <div className="ps-product__content ps-tab-root">
            <div className="container">
                <ul className="ps-tab-list">{tabListView}</ul>
                <div className="ps-tabs">{tabContentView}</div>
            </div>
        </div>
    );
};

export default ModuleDetailContent;
