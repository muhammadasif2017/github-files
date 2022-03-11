import PropTypes from 'prop-types';
import Time from './Time';
import CommitMessage from './CommitMessage';
import FileName from './FileName';
import FileIcon from './FileIcon';

const FileListItem = ({ file }) => (
  <tr className='file-list-item'>
    <td className='file-icon'><FileIcon file={file} /></td>
    <td className='file-name'><FileName file={file} /></td>
    <td className='commit'><CommitMessage commit={file.latestCommit} /></td>
    <td><Time time={file.updated_at} /></td>
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};

export default FileListItem;