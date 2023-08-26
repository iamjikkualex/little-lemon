import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppConstants from '../../../common/constants';
import './assets/styles/UnderMaintenance.css';

const HTML_TEXTS = AppConstants.HTML_TEXTS;
const UNDER_MAINTENANCE_PAGE_TEXTS = AppConstants.UNDER_MAINTENANCE_PAGE_TEXTS;

const UnderMaintenancePage = () => {
    return (
        <div className={HTML_TEXTS.className.underMaintenancePageDiv}>
            <FontAwesomeIcon icon={faPersonDigging} size={AppConstants.SIZE.threeX} />
            <h1>{UNDER_MAINTENANCE_PAGE_TEXTS.get('oops').text}</h1>
            <h2>{UNDER_MAINTENANCE_PAGE_TEXTS.get('underMaintenance').text}</h2>
        </div>
    );
};

export default UnderMaintenancePage;