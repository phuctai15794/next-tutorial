import Link from 'next/link';
import Container from 'react-bootstrap/Container';

export default function Home() {
	return (
		<Container>
			<h1>Home page</h1>
			<Link href="/dashboard">Dashboard</Link>
		</Container>
	);
}
