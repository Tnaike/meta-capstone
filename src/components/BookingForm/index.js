import React, { useState } from 'react';
import './BookingForm.css';
import { fetchAPI } from '../../data/bookingsAPI';
import Button from '../button';

function BookingForm({ dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [preferences, setPreferences] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_DATE', date: date });
    dispatch({ type: 'UPDATE_TIME', time: time });
    submitForm(date, time, guests, occasion);
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('');
    setPreferences('');
  };

  return (
    <>
      <section>
        <div className='page-header'>
          <h1 className='page-title'>Reserve a table</h1>
        </div>
      </section>
      <section className='form-wrapper'>
        <form className='booking-form' onSubmit={handleSubmit}>
          <h4 className='sub-title'>Find a table for any occasion</h4>

          <div className='field-group'>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              id='date'
              name='date'
              value={date}
              onSubmit={(e) =>
                dispatch({ type: 'UPDATE_DATE', date: e.target.value })
              }
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className='field-group'>
            <label htmlFor='time'>Time</label>
            <select
              type='time'
              id='time'
              name='time'
              value={time}
              onSubmit={(e) =>
                dispatch({ type: 'UPDATE_TIME', time: e.target.value })
              }
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value=''>Select a time</option>
              {fetchAPI(date).map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className='field-group'>
            <label htmlFor='guests'>Number of guests</label>
            <input
              type='number'
              id='guests'
              name='guests'
              value={guests}
              placeholder='Maximum 10'
              min='1'
              max='10'
              required
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className='field-group'>
            <label htmlFor='occasion'>Occasion</label>
            <select
              id='occasion'
              name='occasion'
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value=''>Select occasion</option>
              <option value='Birthday'>Birthday</option>
              <option value='Anniversary'>Anniversary</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <div className='field-group'>
            <label htmlFor='preferences'>Seating preferences</label>
            <select
              id='preferences'
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
            >
              <option value=''>None</option>
              <option value='Standard'>Standard</option>
              <option value='Inside'>Inside</option>
              <option value='Outdoor'>Outdoor</option>
            </select>
          </div>

          <div className='button-wrapper'>
            <Button
              type='submit'
              label='Submit reservation'
              fullWidth
              disabled={!date || !time || !guests || !occasion || !preferences}
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default BookingForm;
