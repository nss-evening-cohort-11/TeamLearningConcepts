import React from 'react';
import PropTypes from 'prop-types';

import './SearchResults.scss';
import SingleCourseCard from '../../shared/SingleCourseCard/SingleCourseCard';

class SearchResults extends React.Component {
    static propTypes = {
        filteredCourses: PropTypes.array.isRequired,
    }
    render() {
        const courses = this.props.filteredCourses;

        const buildCourseCards = courses.map(course => (
            <SingleCourseCard key={course.courseId} course={course} />
          ));

        return(
            <div className="SearchResults">
                <h1 id="search-results-title">Search Results</h1>
                {buildCourseCards}
            </div>
        )
    }
}

export default SearchResults;