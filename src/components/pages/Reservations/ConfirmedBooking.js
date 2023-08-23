import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConfirmedBooking = () => {
    return (
        <div className="container confirmed-booking">
            <FontAwesomeIcon icon={faCircleCheck} size="3x" />
            <h2>Reservation has been confirmed</h2>
            <p>You will receive reservation details shortly</p>
        </div>
    );
};

export default ConfirmedBooking;