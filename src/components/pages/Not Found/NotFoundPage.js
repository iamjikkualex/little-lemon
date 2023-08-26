import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppConstants from '../../../common/constants';
import './assets/styles/NotFound.css';

const HTML_TEXTS = AppConstants.HTML_TEXTS;
const NOT_FOUND_PAGE_TEXTS = AppConstants.NOT_FOUND_PAGE_TEXTS;

const NotFoundPage = () => {
    return (
        <div className={HTML_TEXTS.className.notFoundPageDiv}>
            <FontAwesomeIcon icon={faTriangleExclamation} size={AppConstants.SIZE.threeX} />
            <h1>{NOT_FOUND_PAGE_TEXTS.get('oops').text}</h1>
            <h2>{NOT_FOUND_PAGE_TEXTS.get('notFound').text}</h2>
        </div>
    );
};

export default NotFoundPage;