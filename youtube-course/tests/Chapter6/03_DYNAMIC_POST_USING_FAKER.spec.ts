import { test, expect } from '@playwright/test';
import {faker, fi} from '@faker-js/faker';
import { formatAPIRequest } from '../../src/utils/APIHelper';

import path from 'path';
import fs from 'fs';

test.use({
    baseURL: process.env.API_URL
});


test('Creating POST API  using dynamic Request  and faker dependencie', async ({  request }) => {

    //reading json template file

    const dynamicRequestPath = path.join(__dirname,'../../test-data/api_requests/DYNAMIC_POST_API.json');
    const jsonTemplate = fs.readFileSync(dynamicRequestPath, 'utf-8');

   const firstName = faker.person.firstName();
   const lastName = faker.person.lastName();
   const totalprice = faker.number.int({min: 100, max: 1000});
   const values = [firstName, lastName,totalprice]

    //updating json template with dynamic values
    const formattedRequest = await formatAPIRequest(jsonTemplate, values);

    //sending post api request
    const postResponse = await request.post(`/booking`, {data : JSON.parse(formattedRequest)})
    
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

 

});