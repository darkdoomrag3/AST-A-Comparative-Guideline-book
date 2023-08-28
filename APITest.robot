*** Settings ***
Documentation   API testing
Library         SeleniumLibrary
Library         Collections
Test Teardown   Close Browser
Resource        resource.robot
Library         RequestsLibrary
Library         OperatingSystem

*** Variables ***
${base_url}    https://app.snapp-box.com

${auth_token}     eyJhbGciOiJIUzUxMiJ9.eyJjaWQiOjI0Njk5NzQ3LCJjcmlkIjoiNDE5NzQ0MjYiLCJlIjoiZW1hZGRleW1AZ21haWwuY29tIiwid2UiOmZhbHNlLCJzdWIiOiIwOTM3NjY4MTg1NiIsImF1dGgiOiJST0xFX0NVU1RPTUVSIiwidHlwZSI6ImN1c3RvbWVyIn0.CFRH8o4qccBjmBbGq9WEFOT_jtuZSKldcIuehE3f-OOvaUD-uIMmb-Z8-YlYcwoOlp-IBFLBTwi3vS8bbJd21g


&{json_data}    city=tehran
...    deliveryCategory=bike-without-box
...    terminals=${terminals}

@{terminals}    &{terminal1}    &{terminal2}

&{terminal1}    address=بزرگراه شهید حقانی، گاندی شمالی، محمد صانعی
...    plate=
...    sequenceNumber=1
...    unit=
...    latitude=35.75842340059014
...    longitude=51.41138076782227
...    type=pickup

&{terminal2}    address=بزرگراه شهید حقانی، گاندی شمالی، محمد صانعی
...    sequenceNumber=2
...    latitude=35.75842340059014
...    longitude=51.41232490539551
...    type=drop
...    collectCash=no
...    paymentType=prepaid



&{Missing_json_data}

...    terminals=${terminals_Miss}

@{terminals_Miss}    &{terminal1_Miss}    &{terminal2_Miss}

&{terminal1_Miss}    address=New york


&{terminal2_Miss}
...    sequenceNumber=2





&{Wrong_Data}    city=tehran
...    deliveryCategory=bike-without-box
...    terminals=${terminals_Wrong}

@{terminals_Wrong}    &{terminal1_Wrong}    &{terminal2_Wrong}

&{terminal1_Wrong}    address=بزرگراه شهید حقانی، گاندی شمالی، محمد صانعی
...    plate=
...    sequenceNumber=1
...    unit=
...    latitude=0000
...    longitude=00000
...    type=2

&{terminal2_Wrong}    address=بزرگراه شهید حقانی، گاندی شمالی، محمد صانعی
...    sequenceNumber=2
...    latitude=35.75842340059014
...    longitude=51.41232490539551
...    type=2
...    collectCash=no
...    paymentType=prepaid






*** Test Cases ***



Test API Endpoint - Pricing with Authorization Token


    Create Session    API    ${base_url}


    # Define request headers with Authorization token and defective data
    ${headers}=    Create Dictionary    Content-Type=application/json    Authorization=${auth_token}


    ${response}=    Post Request    API    /api/v1/customer/order/pricing    json=${json_data}   headers=${headers}

    Should Be Equal As Strings    ${response.status_code}    200


Test API Endpoint - Pricing with Authorization Token and sending defective data

    Create Session    API    ${base_url}


    # Define request headers with unAuthorization token and defective data
    ${headers}=    Create Dictionary    Content-Type=application/json     Authorization=${auth_token}


    ${response}=    Post Request    API    /api/v1/customer/order/pricing    json=${Missing_json_data}   headers=${headers}

    Should Be Equal As Strings    ${response.status_code}    500



Test API Endpoint - Pricing with unAuthorization Token

   Create Session    API    ${base_url}

    # Define request headers with unAuthorization token
    ${headers}=    Create Dictionary    Content-Type=application/json


    ${response}=    Post Request    API    /api/v1/customer/order/pricing    json=${json_data}    headers=${headers}

    Should Be Equal As Strings    ${response.status_code}    401
    Log    ${response.json()}


Test API Endpoint - Pricing with Authorization Token and missing data

    Create Session    API    ${base_url}

    # Define request headers with Authorization token and missing data
    ${headers}=    Create Dictionary    Content-Type=application/json    Authorization=${auth_token}


    ${response}=    Post Request    API    /api/v1/customer/order/pricing    json=${Missing_json_data}   headers=${headers}

    Should Be Equal As Strings    ${response.status_code}    500

Test API Endpoint - Pricing with Authorized Token and empty data

    Create Session    API    ${base_url}

    # Define request headers with Authorization token and wrong data
    ${headers}=    Create Dictionary    Content-Type=application/json   Authorization=${auth_token}


    ${response}=    Post Request    API    /api/v1/customer/order/pricing      headers=${headers}

    Should Be Equal As Strings    ${response.status_code}    400


