import React from 'react';

import Link from 'next/link';

const MegaColumn = ({ menu }) => {
    if (menu.megaContent) {
        return menu.megaContent.map((item) => (
            <div className="mega-menu__column" key={item.heading}>
                <h4>{item.heading}</h4>
                <ul className="sub-menu--mega">
                    {item.megaItems.map((subItem) => (
                        <li key={subItem.text}>
                            <Link href={subItem.url}>
                                <a>{subItem.text}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ));
    }
};
const MegaMenu = ({ menuData }) => {
    return (
        <li
            className={
                menuData.megaContent
                    ? 'menu-item-has-children has-mega-menu'
                    : ''
            }>
            <Link href={menuData.url} as={menuData.url}>
                <a>{menuData.text}</a>
            </Link>
            <div className="mega-menu">
                <MegaColumn menu={menuData} />
            </div>
        </li>
    );
};

export default MegaMenu;
