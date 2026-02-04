import { test, expect } from '@playwright/test';

import { formatAPIRequest } from '../../src/utils/APIHelper';

import path from 'path';
import fs from 'fs';

test.use({
    baseURL: process.env.API_URL
});


test('Creating POST API  using dynamic Request ', async ({  request }) => {

    //reading json template file

    const dynamicRequestPath = path.join(__dirname,'../../test-data/api_requests/DYNAMIC_POST_API.json');
    const jsonTemplate = fs.readFileSync(dynamicRequestPath, 'utf-8');
    const values = ['Santiago', 'Cifuentes',1000]

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
    expect(jsonResponse.booking).toHaveProperty('firstname', 'Santiago');
    expect(jsonResponse.booking).toHaveProperty('lastname', 'Cifuentes');

    expect(jsonResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonResponse.booking.bookingdates).toHaveProperty('checkout');

    //validating the entire response body
    expect(jsonResponse.booking).toEqual({
        firstname: 'Santiago',
        lastname: 'Cifuentes',
        totalprice: 1000,
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
    expect(jsonResponse.booking.firstname).toBe('Santiago');// data means where we are sending the request body

 

});