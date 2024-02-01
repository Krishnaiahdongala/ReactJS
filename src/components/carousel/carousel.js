import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                
                <div>
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
        )
    }
}
export default DemoCarousel