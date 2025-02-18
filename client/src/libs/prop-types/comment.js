import { imageType } from 'libs/prop-types/image';
import PropTypes from 'prop-types';

const commentType = PropTypes.exact({
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  user: PropTypes.exact({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    imageId: PropTypes.number,
    image: imageType
  }).isRequired
});

export { commentType };
