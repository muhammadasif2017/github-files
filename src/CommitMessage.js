import PropTypes from 'prop-types';

function CommitMessage({ commit }) {
  return (
    <>
      {commit.message}
    </>
  );
}
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};

export default CommitMessage;