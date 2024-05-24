import React, { useEffect, useState } from 'react'
import Header from './Header'
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';

const Fetch = () => {

    const [data, setData] = useState([])
    const productView = async () => {
        try {
            const all = await fetch(`https://dummyjson.com/products`,{
                method: "GET",
                headers : {
                    "Content-type" : "application/json"
                }
            })
            let record = await all.json()
            setData(record.products)
        } catch (err) {
            console.log(err);
            return false
        }
    }

    useEffect(() => {
        productView()
    }, [])
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    {
                        data.map((item) => {
                            const { id, title, description, price, rating, stock, brand, thumbnail, images } = item
                            return (
                                <div key={id} className='col-3 my-3 text-center'>
                                    <Card style={{ height: "100%" }}>
                                        <Card.Img variant="top" src={thumbnail} height={250} />
                                        <Card.Body>
                                            <Card.Title>{title}</Card.Title>
                                            <Card.Text> {description} </Card.Text>
                                            <div className='d-flex my-3 flex-wrap justify-content-around'>
                                                <Card.Text className='col-6 m-0'>Price : <b>{price}</b> </Card.Text>
                                                <Card.Text className='col-6 m-0'>Rating : <b>{rating}</b> </Card.Text>
                                                <Card.Text className='col-6 m-0'>Stock : <b>{stock}</b> </Card.Text>
                                            </div>
                                            <Card.Text>Brand : <b>{brand}</b> </Card.Text>
                                            <div>
                                                {
                                                    images.map((val) => {
                                                        return (
                                                            <img key={val} src={val} alt={title} width={30} height={30} className='mx-2' />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Fetch