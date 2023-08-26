import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppConstants from "../../../common/constants";

const HTML_TEXTS = AppConstants.HTML_TEXTS;
const CONFIRMED_BOOKING_TEXTS = AppConstants.CONFIRMED_BOOKING_TEXTS;

const ConfirmedBooking = () => {
    return (
        <div className={HTML_TEXTS.className.confirmedBookingDiv}>
            <FontAwesomeIcon icon={faCircleCheck} size={AppConstants.SIZE.threeX} />
            <h2>{CONFIRMED_BOOKING_TEXTS.get('reservationConfirmed').text}</h2>
            <p>{CONFIRMED_BOOKING_TEXTS.get('confirmationDesc').text}</p>
        </div>
    );
};

export default ConfirmedBooking;