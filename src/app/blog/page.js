'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Page() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await fetch('https://dummyjson.com/posts')
				.then((res) => res.json())
				.then((data) => data);
			setBlogs(data.posts);
		})();
	}, []);

	return (
		<ListGroup>
			{blogs.map((item) => {
				return (
					<ListGroup.Item key={item.id}>
						<Link href={`/blog/${item.id}`}>{item.title}</Link>
					</ListGroup.Item>
				);
			})}
		</ListGroup>
	);
}
