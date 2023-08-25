import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppConstants from '../../../common/constants';
import './assets/styles/NotFound.css';

const NotFoundPage = () => {
    return (
        <div className={AppConstants.HTML_TEXTS.className.notFoundPageDiv}>
            <FontAwesomeIcon icon={faTriangleExclamation} size={AppConstants.SIZE.threeX} />
            <h1>{AppConstants.NOT_FOUND_PAGE_TEXTS.get('oops').text}</h1>
            <h2>{AppConstants.NOT_FOUND_PAGE_TEXTS.get('notFound').text}</h2>
        </div>
    );
};

export default NotFoundPage;