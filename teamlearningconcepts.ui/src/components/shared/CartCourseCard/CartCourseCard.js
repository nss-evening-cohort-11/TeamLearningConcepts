import React from 'react';
import PropTypes from 'prop-types';

import courseShape from '../../../helpers/propz/courseShape';

import './CartCourseCard.scss';

class CartCourseCard extends React.Component {
    static propTypes = {
        course: courseShape.courseShape,
        removeCourseFromCart: PropTypes.func.isRequired,
    }
    render() {
        const { course, removeCourseFromCart } = this.props;

        return(
            <div className="CartCourseCard d-flex">
                <img className="cart-course-img" src={course.photoUrl} alt={course.description}/>
                <div className="cart-course-details">
                <p className="cart-course-title">{course.title}</p>
                <p className="cart-course-price">${course.price}.00</p>
                </div>
                <button className="btn btn-dark-blue btn-sm ml-auto" onClick={() => removeCourseFromCart(course.courseId)}>X</button>
            </div>
        )
    }
}

export default CartCourseCard;
