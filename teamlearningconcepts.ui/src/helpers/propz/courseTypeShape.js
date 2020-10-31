import PropTypes from 'prop-types';

const courseTypeShape = PropTypes.shape({
  courseTypeId: PropTypes.number.isRequired,
  courseTypeName: PropTypes.string.isRequired,
});

export default { courseTypeShape };
