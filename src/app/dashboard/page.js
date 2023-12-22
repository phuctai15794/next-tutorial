import Link from 'next/link';

export default function Dashboard() {
	return (
		<div>
			<h1>Dashboard page</h1>
			<p>
				<Link href="/dashboard/settings">go to Settings</Link>
			</p>
			<Link href="/dashboard/analytics">go to Analytics</Link>
		</div>
	);
}
