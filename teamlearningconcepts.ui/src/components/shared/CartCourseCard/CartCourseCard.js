import React from 'react';

import courseShape from '../../../helpers/propz/courseShape';

import './CartCourseCard.scss';

class CartCourseCard extends React.Component {
    static propTypes = {
        course: courseShape.courseShape
    }
    render() {
        const { course } = this.props;

        return(
            <div className="CartCourseCard d-flex flex-wrap">
                <img className="cart-course-img" src={course.photoUrl} alt={course.description}/>
                <div className="cart-course-details">
                <p className="cart-course-title">{course.title}</p>
                <p className="cart-course-price">${course.price}.00</p>
                </div>

            </div>
        )
    }
}

export default CartCourseCard;
