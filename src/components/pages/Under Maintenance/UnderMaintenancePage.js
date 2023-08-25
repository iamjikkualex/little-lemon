import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppConstants from '../../../common/constants';
import './assets/styles/UnderMaintenance.css';

const UnderMaintenancePage = () => {
    return (
        <div className={AppConstants.HTML_TEXTS.className.underMaintenancePageDiv}>
            <FontAwesomeIcon icon={faPersonDigging} size={AppConstants.SIZE.threeX} />
            <h1>{AppConstants.UNDER_MAINTENANCE_PAGE_TEXTS.get('oops').text}</h1>
            <h2>{AppConstants.UNDER_MAINTENANCE_PAGE_TEXTS.get('underMaintenance').text}</h2>
        </div>
    );
};

export default UnderMaintenancePage;