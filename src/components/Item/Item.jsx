import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Item({ producto }) {
    if (!producto) {
        return <div>Item no disponible</div>;
    }

    const { imagen, titulo, descripcion, id } = producto;

    return (
        <Col lg={3} className='p-3'>
            <Card>
                <Card.Img 
                    variant='top' 
                    src={imagen || 'https://picsum.photos/300/200'} 
                    alt={titulo || 'Imagen no disponible'} 
                />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>{descripcion}</Card.Text>
                    <Button variant="primary" as={Link} to={`/products/${id}`}>
                        Más información
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

Item.propTypes = {
    producto: PropTypes.shape({
        imagen: PropTypes.string,
        titulo: PropTypes.string.isRequired,
        descripcion: PropTypes.string,
        id: PropTypes.string.isRequired,
    }),
};

export default Item;