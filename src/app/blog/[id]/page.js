export default function PageDetail({ params }) {
	console.log(params);
	return <div>Blog detail</div>;
}

export async function generateStaticParams(props) {
	const data = await fetch('https://dummyjson.com/posts')
		.then((res) => res.json())
		.then((data) => data);

	return data.posts.map((post) => ({
		id: post.id,
		title: post.title,
		body: post.body
	}));
}
