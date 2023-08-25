import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppConstants from "../../../common/constants";

const ConfirmedBooking = () => {
    return (
        <div className={AppConstants.HTML_TEXTS.className.confirmedBookingDiv}>
            <FontAwesomeIcon icon={faCircleCheck} size={AppConstants.SIZE.threeX} />
            <h2>{AppConstants.CONFIRMED_BOOKING_TEXTS.get('reservationConfirmed').text}</h2>
            <p>{AppConstants.CONFIRMED_BOOKING_TEXTS.get('confirmationDesc').text}</p>
        </div>
    );
};

export default ConfirmedBooking;