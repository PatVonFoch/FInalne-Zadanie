Feature: New Member on Coders Guru App

  Scenario Outline: Creating an account on a CodersGuru page
    Given an open CodersGuru page
    When email entered "<email>", click załóż konto, sup-page opens
    And user fills first name <firstName>
    And user fills last name "<surname>"
    And user fills password "<pass1>"
    And user fills again password "<pass2>"
    And user fills ciry "<city>"
    And user fills zipcode "<zip code>"
    And user fills street "<street>"
    And user fills house number "<HouseNo>"
    And user ticks bylaw box
    Then user submits by clicking zarejestruj
    And user is logged in as a member and his name is <firstName>

  Examples:
    |email|firstName|surname|pass1|pass2|city|zip code|street|HouseNo|
    |ninocha@mail.com|Ninogniew|Olcha|78ui90|78ui90|Montpelier|83-254|Sieja|12|



