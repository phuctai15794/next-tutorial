import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '~/components/Sidebar';

export default function DashboardLayout({ children }) {
	return (
		<Container>
			<Row>
				<Col xs={2}>
					<Sidebar />
				</Col>
				<Col xs={10}>{children}</Col>
			</Row>
		</Container>
	);
}
