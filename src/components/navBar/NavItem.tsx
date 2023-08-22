import React, { FC, ReactNode } from 'react';

interface INavItem{
    children: ReactNode;
    isActive: boolean;
    className?: string;
}

export const NavItem: FC<INavItem> = ({children, isActive, className}) => (
    <div className={className}>{children}</div>
)
