import Link from 'next/link';

export default function Settings() {
	return (
		<div>
			<h1>Dashboard - Settings</h1>
			<Link href="/dashboard/analytics">go to Analytics</Link>
		</div>
	);
}
