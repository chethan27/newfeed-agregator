import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../components/header';
import Home from '../components/home';
import Sidebar from '../components/sidebar';
import axios from 'axios';

class Newspage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            filter: "allCategory",
            toggleSidebar: false,
            nightMode: false,
            allCategoryToggle: true,
            sportsToggle: false,
            gamesToggle: false,
            newsToggle: false,

        };
    }
    async componentDidMount() {
        await axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.rssmix.com%2Fu%2F8291867%2Frss.xml&api_key=ilmwjmqmd2x9eqg6wk5lsa5xdkqpldmg45waoh7x&order_by=pubDate&count=100')
            .then(response => {
                this.setState({ posts: response.data.items });
                // console.log(response);
            });

        if (this.state.showCheckBarAll === true) {
            this.setState({ colorAll: '#8BC34A' });
            this.setState({ colorGames: '#000000' });
            this.setState({ colorNews: '#000000' });
            this.setState({ colorNews: '#000000' });
        }
    }
    menuBarToggle = () => {
        //alert(this.state.toggleSidebar);
        this.setState({ toggleSidebar: !this.state.toggleSidebar });
    }

    nightModeToggle = () => {

        this.setState({ nightMode: !this.state.nightMode });


        if (this.state.nightMode === true) {
            document.body.style = 'background: #ECEFF1;';
        }
        else {
            document.body.style = 'background: #383F49;';
        }
    }

    setFilter = async (fil) => {
        // alert(fil)
        await this.setState({ filter: fil })
        // alert(this.state.filter)
        this.updateFeedForCategories(this.state.filter)
    }


    updateFeedForCategories(categoryOfNews) {
        if (categoryOfNews === 'allCategory') {
            axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.rssmix.com%2Fu%2F8291867%2Frss.xml&api_key=ilmwjmqmd2x9eqg6wk5lsa5xdkqpldmg45waoh7x&order_by=pubDate&count=100')
                .then(response => {
                    this.setState({ posts: response.data.items });
                });
        }

        else if (categoryOfNews === 'games') {
            axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.rssmix.com%2Fu%2F8291850%2Frss.xml&api_key=ilmwjmqmd2x9eqg6wk5lsa5xdkqpldmg45waoh7x&order_by=pubDate&count=25')
                .then(response => {
                    this.setState({ posts: response.data.items });
                });
        }

        else if (categoryOfNews === 'news') {
            axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.rssmix.com%2Fu%2F8291849%2Frss.xml&api_key=ilmwjmqmd2x9eqg6wk5lsa5xdkqpldmg45waoh7x&order_by=pubDate&count=25')
                .then(response => {
                    this.setState({ posts: response.data.items });
                });
        }

        else if (categoryOfNews === 'sports') {
            axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.rssmix.com%2Fu%2F8291848%2Frss.xml&api_key=ilmwjmqmd2x9eqg6wk5lsa5xdkqpldmg45waoh7x&order_by=pubDate&count=25')
                .then(response => {
                    this.setState({ posts: response.data.items });
                });
        }

    }

    render() {
        return (
            <div>
                <Grid >
                    <Row
                        style={{
                            position: 'absolute',
                            left: '0px',
                            right: '0px',
                            paddingRight: '0px'
                        }}>

                        <Col lg={12} >
                            <Header clickMenuBar={this.menuBarToggle}
                                nightModeToggle={this.nightModeToggle}
                            />
                        </Col>

                    </Row>

                    <Row
                        style={{
                            position: 'absolute',
                            top: '80px'
                        }} >

                        <Col lg={12} >
                            <Home
                                nightMode={this.state.nightMode}
                                categoryOfNews={this.state.categoryOfNews}
                                posts={this.state.posts}
                            />
                        </Col>

                    </Row>

                </Grid>

                <div >

                    <Sidebar
                        sidebarToggle={this.state.toggleSidebar}
                        menuBarToggle={this.menuBarToggle}

                        currentFilter={this.state.filter}
                        setFilter={this.setFilter}
                    />

                </div>

            </div>
        );
    }
}

export default Newspage;
