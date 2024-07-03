import { Metadata } from 'next';

import Auth from './Auth';

export const metadata: Metadata = {
	title: 'Авторизация',
};

export default function AuthPage() {
	return (
		<div>
			Авторизация
			<Auth />
		</div>
	);
}
