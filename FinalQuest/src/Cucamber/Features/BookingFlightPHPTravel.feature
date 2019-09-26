Feature: Booking Flight
  Scenario: booking flight and creating an invoice
    Given an open PHP Travels page

    When main page opened user clicks flights menu
    And user enters location from "WAW", location to "JFK",
    And clicks ROUND TRIP,
    And departure date "2019-11-17" and Return date "2019-12-06"
    And user chosses "2" passangers, and clicks done
    And begin search
    Then User chosses 2nd option of flights
    And decides to book as a guest
    And user chooses title, fills out "Name" and "Surname"
    And user fills out "email". "phone number". "bitrht date"
    And user provides "ID number", "exp date" and "nationality"
    And filss second adult title, fills out "Name" and "Surname"
    And user fills out "email". "phone number". "bitrht date"
    And user provides "ID number", "exp date" and "nationality"
    And User fills out Payment informatiion by providing CC type and "number"
    And User fills "exp month", "exp year", "CVV number"
