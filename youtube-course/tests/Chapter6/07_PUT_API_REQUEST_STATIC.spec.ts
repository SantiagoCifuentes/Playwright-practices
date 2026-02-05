import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { getRequestBody } from '../../src/utils/APIHelper';
import tokenAPIRequest from '../../test-data/api_requests/Token_API_REQUEST.json';
import putAPIRequest from '../../test-data/api_requests/PUT_API_REQUEST.json';



test.use({
    baseURL: process.env.API_URL
});



test('Create PUT API ', async ({ request }) => {

    //reading json template file



    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalprice = faker.number.int({ min: 100, max: 1000 });


    const requestBody = await getRequestBody(firstName, lastName, totalprice, true, "super bowls", "2026-03-02", "2026-06-01");


    //sending post api request
    const postResponse = await request.post(`/booking`, { data: requestBody })

    const jsonResponse = await postResponse.json();
    console.log('POST API Response is: ', jsonResponse);



    //GET API Request using query parameters
    const bookingID = jsonResponse.bookingid;
    console.log('Booking ID for GET Request: ', bookingID);

    const getResponse = await request.get(`/booking/${bookingID}`, {
        params: {
            firstname: firstName,
            lastname: lastName
        }
    });

    //Validate satus code, status text
    expect(getResponse.status()).toBe(200);
    expect(getResponse.statusText()).toBe('OK');
    const getResponseBody = await getResponse.json();
    console.log('GET API Response Body: ', getResponseBody);


    //generate token
    const tokenResponse = await request.post('/auth', { data: tokenAPIRequest });

    const tokenJson = await tokenResponse.json();
    console.log('Token Response: ', tokenJson);
    expect(tokenResponse.status()).toBe(200);
    expect(tokenResponse.statusText()).toBe('OK');

    //create put api request

    const putResponse = await request.put(`/booking/${bookingID}`, {
        data: putAPIRequest,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Cookie": `token=${tokenJson.token}`
        }
    });
     expect(putResponse.status()).toBe(200);
    expect(putResponse.statusText()).toBe('OK');
    console.log('PUT API Response: ', await putResponse.json());

});