import React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

const PortfolioItem = ({title, subtitle, text, image, imageAlt}) => {
    return (
        <Card>
            <CardImg top width="100%" src={image} alt={imageAlt} />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{subtitle}</CardSubtitle>
                <CardText>{text}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    );
};

export default PortfolioItem;