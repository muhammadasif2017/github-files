import PropTypes from 'prop-types';

const FileName = ({ file }) => (
  <>
    {file.name}
  </>
);
FileName.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileName;