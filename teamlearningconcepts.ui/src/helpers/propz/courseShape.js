import PropTypes from 'prop-types';

const courseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  photoUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  courseTypeId: PropTypes.number.isRequired,
  isDeleted: PropTypes.bool.isRequired,
});

export default { courseShape };
