function publishDate(publishDate) {
    var date = new Date(publishDate);
    var milliseconds = date.getTime();
    return (Date.now() - milliseconds) / 60000;
}

<CardText style={{ width: '66px', height: '14px' }}>{publishDate(props.publish)}</CardText>