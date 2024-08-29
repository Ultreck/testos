import PropTypes from 'prop-types';

export const ElementPropTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    rotate: PropTypes.number.isRequired,
    style: PropTypes.object,
    src: PropTypes.string,
    config: PropTypes.object,
  }),
  active: PropTypes.bool.isRequired,
  highlighted: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.number,
};