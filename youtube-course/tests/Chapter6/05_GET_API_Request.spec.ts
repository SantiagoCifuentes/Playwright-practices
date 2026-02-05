import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
import { formatAPIRequest, getRequestBody } from '../../src/utils/APIHelper';



test.use({
    baseURL: process.env.API_URL
});


test('Creating GET API  using dynamic Request  and faker dependencie', async ({  request }) => {

    //reading json template file

 

   const firstName = faker.person.firstName();
   const lastName = faker.person.lastName();
   const totalprice = faker.number.int({min: 100, max: 1000});
  

   const requestBody = await getRequestBody(firstName, lastName, totalprice, true, "super bowls", "2026-03-02", "2026-06-01");
   



    //sending post api request
    const postResponse = await request.post(`/booking`, {data : requestBody})
    
    const jsonResponse = await postResponse.json();
    console.log('POST API Response is: ', jsonResponse);

    //validating api response status code and status text
    expect(postResponse.status()).toBe(200);
    expect(postResponse.statusText()).toBe('OK');
    
    //validating specific key  or properties 
    expect(jsonResponse.booking).toHaveProperty('firstname', firstName);
    expect(jsonResponse.booking).toHaveProperty('lastname', lastName);

    expect(jsonResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonResponse.booking.bookingdates).toHaveProperty('checkout');

    //validating the entire response body
    expect(jsonResponse.booking).toEqual({
        firstname: firstName,
        lastname: lastName,
        totalprice: totalprice,
        depositpaid: true,
        bookingdates: {
            checkin: '2026-03-02',
            checkout: '2026-06-01'
        },
        additionalneeds: 'super bowls'
    });

    expect(jsonResponse.bookingid).toBeGreaterThan(0);
    expect(typeof jsonResponse.bookingid).toBe('number');
    expect(jsonResponse.bookingid % 1).toBe(0); // to check if it's an integer
    expect(jsonResponse.booking.firstname).toBe(firstName);// data means where we are sending the request body

    //GET API Request
    const bookingID = jsonResponse.bookingid;
    console.log('Booking ID for GET Request: ', bookingID);

    const getResponse = await request.get(`/booking/${bookingID}`);

    //Validate satus code, status text
    expect(getResponse.status()).toBe(200);
    expect(getResponse.statusText()).toBe('OK');
    const getResponseBody = await getResponse.json();
    console.log('GET API Response Body: ', getResponseBody);

 

});