// 'use client';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';

async function getPostDetail(id) {
	const data = await fetch(`https://dummyjson.com/posts/${id}`)
		.then((res) => res.json())
		.then((data) => data);
	return data;
}

export default async function PageDetail({ params }) {
	const { id } = params;
	const blogDetail = await getPostDetail(id);

	return (
		<Container>
			<Link href="/blog">Back</Link>
			<h1>{blogDetail.title}</h1>
			{blogDetail.body}
		</Container>
	);
}

export async function generateStaticParams() {
	const data = await fetch('https://dummyjson.com/posts')
		.then((res) => res.json())
		.then((data) => data);

	return data.posts.map((post) => ({
		id: post.id.toString(),
		title: post.title,
		body: post.body
	}));
}
