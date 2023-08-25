import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe('Booking Form', () => {
    const availableTimes = ['17:00', '17:30'];
    const today = new Date().toISOString().split('T')[0];
    const dispatchOnDateChange = jest.fn();
    const submitForm = jest.fn();

    test('Renders the BookingForm Choose Date label', () => {
        render(
            <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} />
        );
        const chooseDateElement = screen.getByLabelText(/Choose Date/);
        expect(chooseDateElement).toBeInTheDocument();
    });

    test('Should successfully submit the form with default values', () => {
        render(
            <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
        );

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(submitForm).toHaveBeenCalledWith({
            bookingDate: today,
            bookingTime: availableTimes[0],
            noOfGuests: 1,
            occasion: 'Birthday',
        });
    });

    test('Renders all fields and their default values', async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
        );

        const chooseDate = screen.getByLabelText(/Choose Date/);
        const chooseTime = screen.getByLabelText(/Choose Time/);
        const bookingTimeOptions = await screen.findAllByTestId('booking-time-option');
        const noOfGuests = screen.getByLabelText(/Number of Guests/);
        const occasion = screen.getByLabelText(/Occasion/);
        const occasionOptions = await screen.findAllByTestId('booking-occasion-option');
        const submitButton = screen.getByRole('button');

        expect(chooseDate).toBeInTheDocument();
        expect(chooseDate).toHaveAttribute('id', 'res-date');
        expect(chooseDate).toHaveAttribute('type', 'date');
        expect(chooseDate).toHaveValue(today);

        expect(chooseTime).toBeInTheDocument();
        expect(chooseTime).toHaveAttribute('id', 'res-time');

        expect(bookingTimeOptions.length).toBe(2);

        expect(noOfGuests).toBeInTheDocument();
        expect(noOfGuests).toHaveAttribute('id', 'guests');
        expect(noOfGuests).toHaveAttribute('type', 'number');
        expect(noOfGuests).toHaveValue(1);

        expect(occasion).toBeInTheDocument();
        expect(occasion).toHaveAttribute('id', 'occasion');
        expect(occasionOptions.length).toBe(2);

        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute('type', 'submit');
        expect(submitButton).toBeEnabled();
    });

    test('Should display an error message and disable submit button when Choose Date field is empty', () => {
        render(
            <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitForm={submitForm} />
        );

        const chooseDate = screen.getByLabelText(/Choose Date/);
        fireEvent.change(chooseDate, {target: {value: ''}});
        fireEvent.blur(chooseDate);

        const errorMsg = screen.getByTestId('date-error-msg');
        const submitButton = screen.getByRole('button');

        expect(errorMsg).toBeInTheDocument();
        expect(errorMsg).toHaveTextContent('Please choose a valid date within six months');

        expect(submitButton).toBeDisabled();
    });

    test('Should display an error message and disable submit button when Choose Time field is empty', () => {
        render(
            <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitForm={submitForm} />
        );

        const chooseTime = screen.getByLabelText(/Choose Time/);
        fireEvent.change(chooseTime, {target: {value: ''}});
        fireEvent.blur(chooseTime);

        const errorMsg = screen.getByTestId('time-error-msg');
        const submitButton = screen.getByRole('button');

        expect(errorMsg).toBeInTheDocument();
        expect(errorMsg).toHaveTextContent('Please choose a valid time');

        expect(submitButton).toBeDisabled();
    });

    test('Should display an error message and disable submit button when Number of Guests field is empty', () => {
        render(
            <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitForm={submitForm} />
        );

        const noOfGuests = screen.getByLabelText(/Number of Guests/);
        fireEvent.change(noOfGuests, {target: {value: ''}});
        fireEvent.blur(noOfGuests);

        const errorMsg = screen.getByTestId('guests-error-msg');
        const submitButton = screen.getByRole('button');

        expect(errorMsg).toBeInTheDocument();
        expect(errorMsg).toHaveTextContent('Please enter a number between 1 and 10');

        expect(submitButton).toBeDisabled();
    });

    test('Should display an error message and disable submit button when Occasion field is empty', () => {
        render(
            <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitForm={submitForm} />
        );

        const occasion = screen.getByLabelText(/Occasion/);
        fireEvent.change(occasion, {target: {value: ''}});
        fireEvent.blur(occasion);

        const errorMsg = screen.getByTestId('occasion-error-msg');
        const submitButton = screen.getByRole('button');

        expect(errorMsg).toBeInTheDocument();
        expect(errorMsg).toHaveTextContent('Please choose a valid occasion');

        expect(submitButton).toBeDisabled();
    });
});