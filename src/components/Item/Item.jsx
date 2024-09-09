import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Item({ item }) {
    if (!item) {
        return <div>Item no disponible</div>
    }

    const { image, name, description, id } = item

    return (
        <Col lg={3} className='p-3'>
            <Card>
                {/* Añade una verificación para la imagen */}
                {image ? (
                    <Card.Img variant='top' src={image} alt={name} />
                ) : (
                    <Card.Img variant='top' src='path/to/default-image.jpg' alt='Imagen no disponible' />
                )}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary" as={Link} to={`/product/${id}`}>
                        Más información
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        id: PropTypes.string.isRequired,
    }),
}

export default Item