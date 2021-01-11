import { TElement, TReactChildren } from '../types';

import { Link } from 'react-router-dom';

const Layout = ({ children }: TReactChildren): TElement => {
	return (
		<div>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/details'>Details</Link>
			</nav>
			{children}
		</div>
	);
};

export default Layout;
