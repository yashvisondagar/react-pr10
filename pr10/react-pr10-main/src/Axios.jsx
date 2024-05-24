import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';

const Axios = () => {
    const [data, setData] = useState([])
    const productView = async () => {
        try {
            const { data } = await axios(`https://dummyjson.com/posts`)
            setData(data.posts)
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
                            const { id, title, body, tags, reactions } = item
                            return (
                                <div key={id} className='col-6 my-3 text-center'>
                                    <Card style={{ height: "100%" }}>
                                        <Card.Body>
                                            <h3>{title}</h3>
                                            <Card.Text> {body} </Card.Text>
                                            <ul className='d-flex justify-content-center p-0 m-0'>
                                                {
                                                    tags.map((tag,i) => {
                                                        return (
                                                            <li key={i} className='mx-4'>{tag}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <Card.Text className='mt-3'> Likes : <b style={{color : "red"}}> {reactions}</b> </Card.Text>
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

export default Axios