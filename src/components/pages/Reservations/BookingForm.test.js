import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { MemoryRouter } from "react-router-dom";

describe('Booking Form', () => {
    const availableTimes = ['17:00', '17:30'];
    const today = new Date().toISOString().split('T')[0];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

    test('Renders the BookingForm Choose Date label', () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} />
            </MemoryRouter>
        );
        const chooseDateElement = screen.getByLabelText(/Choose Date/);
        expect(chooseDateElement).toBeInTheDocument();
    });

    test('Should successfully submit the form with default values', () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={availableTimes} submitData={submitData} />
            </MemoryRouter>
        );

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(submitData).toHaveBeenCalledWith({
            bookingDate: today,
            bookingTime: availableTimes[0],
            noOfGuests: 1,
            occasion: 'Birthday',
        });
    });
});