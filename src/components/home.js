import React, { Component } from 'react';
import Cards from './cards';
import { Col, Row } from 'react-bootstrap';


class Home extends Component {

    constructor(props) {
        super(props);
    }

    returnPosts = () => {
        if (this.props.posts.length > 0) {
            return this.props.posts.map(post => {
                return (<Col lg={3} md={4} sm={6} xs={12} style={{ paddingBottom: '40px'  }} >
                    <Cards
                        title={post.title}
                        thumbnail={post.enclosure.link ? post.enclosure.link : post.thumbnail}
                        content={post.content}
                        link={post.link}
                        publishDate={post.pubDate}
                        key={Math.random()}
                        nightMode={this.props.nightMode} />
                </Col>);
            })
        }
        else {
            return null
        }

    }

    render() {
        return (
            <div>
                <Row>
                    <div >
                        <Col lg={12} >
                            {this.returnPosts()}
                        </Col>
                    </div>
                </Row>
            </div >
        );
    }
}

export default Home;
