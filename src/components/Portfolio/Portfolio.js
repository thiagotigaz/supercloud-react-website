import React from 'react';
import {CardColumns, Container} from 'reactstrap';
import PortfolioItem from "./PortfolioItem";

import portfolios from "./portfolios.json";

const Portfolio = (props) => {
    return (
        <Container className={'py-3'}>
            <h1 className={'text-center mb-3'}>Portfolio</h1>
            <CardColumns>
                {
                    portfolios.map((portfolio, index) => <PortfolioItem {...portfolio} key={portfolio.title}/>)
                }
            </CardColumns>
        </Container>
    );
};

export default Portfolio;