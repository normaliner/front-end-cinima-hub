'use client';

import { usePathname } from 'next/navigation';

import { ADMIN_URL } from '@/config/url.config';

import Menu from './Menu';
import { adminMenu, userMenu } from './menu.data';

const MenuContainer = () => {
	const pathnane = usePathname();
	const isAdminPage = pathnane?.includes(ADMIN_URL.root());
	return (
		<div className='flex flex-col w-full flex-1'>
			<Menu menu={isAdminPage ? adminMenu : userMenu} />
		</div>
	);
};

export default MenuContainer;
