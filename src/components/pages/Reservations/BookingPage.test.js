import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";
import { MemoryRouter } from "react-router-dom";

describe('Booking Page', () => {
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    test('Should have initialized with one or more available booking times', async () => {
        render(
            <MemoryRouter>
                <BookingPage />
            </MemoryRouter>
        );

        const bookingTimeOptions = await screen.findAllByTestId("booking-time-option");

        expect(bookingTimeOptions.length).toBeGreaterThanOrEqual(1);
        bookingTimeOptions.forEach(bookingTimeOption => expect(bookingTimeOption.value).toMatch(timeFormat));
    });

    test('Should update available booking times based on selected booking date', async () => {
        render(
            <MemoryRouter>
                <BookingPage />
            </MemoryRouter>
        );

        const bookingDate = '2023-08-28';
        const chooseDateInput = screen.getByLabelText(/Choose Date/);
        const initialBookingTimeOptions = await screen.findAllByTestId("booking-time-option");
        fireEvent.change(chooseDateInput, {target: {value: bookingDate}});
        fireEvent.blur(chooseDateInput);
        const updatedBookingTimeOptions = await screen.findAllByTestId("booking-time-option");

        expect(chooseDateInput).toHaveValue(bookingDate);
        initialBookingTimeOptions.forEach(bookingTimeOption => expect(bookingTimeOption.value).toMatch(timeFormat));
        updatedBookingTimeOptions.forEach(bookingTimeOption => expect(bookingTimeOption.value).toMatch(timeFormat));
        expect(initialBookingTimeOptions.length).not.toBe(updatedBookingTimeOptions.length);
    });
});