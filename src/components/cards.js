import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { LargeTextStyle, SmallTextStyle1 } from '../assets/styles';

function stripTitle(content) {
    let striptags = require('striptags');
    let html = content;
    let str1 = striptags(html);
    let str2 = str1.slice(0, 40);
    return str2.concat('...');
}

function stripTags(content) {
    let striptags = require('striptags');
    let html = content;
    let str1 = striptags(html);
    let str2 = str1.slice(0, 135);
    return str2.concat('...');
}

function formatdate(date) {
    return date.split(' ')[0];
}

const Cards = (props) => {
    var res= props.link.match(/^(?:https?:\/\/)?(?:www\.)?([^:\/\n]+)/im);
    return (
        <div>

            <Card
                style={{
                    width: '247px',
                    height: '342px',
                    backgroundColor: props.nightMode ? '#272C32' : '#FFFFFF',
                    borderRadius: '8px',

                    zIndex: '300',
                    boxShadow: '0px 3px 6px rgba(0,0,0,0.16)'
                }} >

                <CardImg top src={props.thumbnail}
                    style={{
                        width: '247px',
                        height: '160px',
                        borderRadius: '8px 8px 0px 0px'
                    }}
                    alt="Card"
                   />

                <CardBody
                    style={{
                        width: '247px',
                        height: '182px',
                        display: 'flex',
                        flex: '1',
                        flexDirection: 'column'
                    }} id='cardBody' >

                    <div style={{ flex: '1', margin: '16px' }}>

                        <div
                            style={{
                                width: '215',
                                height: '40px',
                                paddingBottom: '8px',
                                color: props.nightMode ? '#FFFFFF' : '#000000'
                            }}  >
                            <CardTitle style={{ ...LargeTextStyle }}  >
                                {stripTitle(props.title)}</CardTitle>
                        </div>

                        <div
                            style={{
                                width: '215',
                                height: '72px',
                                paddingBottom: '16px',
                                color: props.nightMode ? '#FFFFFF' : '#000000'
                            }}>
                            <CardText style={{ ...SmallTextStyle1 }} >
                                {stripTags(props.content)}</CardText>
                        </div>

                        <div style={{display:'flex',paddingTop:'10px'}} >
                            <div
                                style={{
                                    width: '105',
                                    height: '14px',
                                    color: props.nightMode ? '#FFFFFF' : '#000000',
                                    flex:'70%',
                                }}>
                                <CardText  >
                                    <a href={props.link} target="_blank"
                                        style={{
                                            ...SmallTextStyle1,
                                            color: props.nightMode ? '#FFFFFF' : '#000000',
                                            paddingTop:'8px',
                                            textDecoration:'none'
                                        }} >
                                        {res[1]}</a></CardText>
                            </div>

                            <div
                                style={{
                                    width: '66',
                                    height: '14px',
                                    paddingTop:'4px',
                                    color: props.nightMode ? '#FFFFFF' : '#000000'
                                }}>
                                <CardText style={{ fontSize: '12px' }} >
                                    {formatdate(props.publishDate)}
                                </CardText>
                            </div>
                        </div>


                    </div>

                </CardBody>

            </Card>
        </div>
    );
}

export default Cards;