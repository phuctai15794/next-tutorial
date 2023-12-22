import Link from 'next/link';

export default function Analytics() {
	return (
		<div>
			<h1>Dashboard - Analytics</h1>
			<Link href="/dashboard/settings">go to Settings</Link>
		</div>
	);
}
