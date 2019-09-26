$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BookingFlightPHPTravel.feature");
formatter.feature({
  "line": 1,
  "name": "Booking Flight",
  "description": "",
  "id": "booking-flight",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "booking flight and creating an invoice",
  "description": "",
  "id": "booking-flight;booking-flight-and-creating-an-invoice",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "an open PHP Travels page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "main page opened user clicks flights menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters location from \"WAW\", location to \"JFK\",",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "clicks ROUND TRIP,",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "departure date \"2019-11-17\" and Return date \"2019-12-06\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user chosses \"2\" passangers, and clicks done",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "begin search",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User chosses 2nd option of flights",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "decides to book as a guest",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user chooses title, fills out \"Name\" and \"Surname\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user fills out \"email\". \"phone number\". \"bitrht date\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user provides \"ID number\", \"exp date\" and \"nationality\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "filss second adult title, fills out \"Name\" and \"Surname\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user fills out \"email\". \"phone number\". \"bitrht date\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user provides \"ID number\", \"exp date\" and \"nationality\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User fills out Payment informatiion by providing CC type and \"number\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User fills \"exp month\", \"exp year\", \"CVV number\"",
  "keyword": "And "
});
formatter.match({
  "location": "BookingFlightsPHPStepsDefinition.anOpenPHPTravelsPage()"
});
formatter.result({
  "duration": 1287887301,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class ZadanieFinalne.BookingFlightsPHPStepsDefinition\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 31 more\nCaused by: java.lang.NullPointerException\n\tat java.base/java.util.Objects.requireNonNull(Objects.java:221)\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:106)\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:85)\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:45)\n\tat ZadanieFinalne.BookingFlightsPHPStepsDefinition.\u003cinit\u003e(BookingFlightsPHPStepsDefinition.java:19)\n\t... 36 more\n",
  "status": "failed"
});
formatter.match({
  "location": "BookingFlightsPHPStepsDefinition.mainPageOpenedUserClicksFlightsMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "WAW",
      "offset": 27
    },
    {
      "val": "JFK",
      "offset": 46
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.userEntersLocationFromLocationTo(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingFlightsPHPStepsDefinition.clicksROUNDTRIP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2019-11-17",
      "offset": 16
    },
    {
      "val": "2019-12-06",
      "offset": 45
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.departureDateAndReturnDate(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 14
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.userChossesPassangersAndClicksDone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingFlightsPHPStepsDefinition.beginSearch()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.userChossesNdOptionOfFlights(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingFlightsPHPStepsDefinition.decidesToBookAsAGuest()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name",
      "offset": 31
    },
    {
      "val": "Surname",
      "offset": 42
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.userChoosesTitleFillsOutAnd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 16
    },
    {
      "val": "phone number",
      "offset": 25
    },
    {
      "val": "bitrht date",
      "offset": 41
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.userFillsOut(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ID number",
      "offset": 15
    },
    {
      "val": "exp date",
      "offset": 28
    },
    {
      "val": "nationality",
      "offset": 43
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.userProvidesAnd(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name",
      "offset": 37
    },
    {
      "val": "Surname",
      "offset": 48
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.filssSecondAdultTitleFillsOutAnd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 16
    },
    {
      "val": "phone number",
      "offset": 25
    },
    {
      "val": "bitrht date",
      "offset": 41
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.userFillsOut(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ID number",
      "offset": 15
    },
    {
      "val": "exp date",
      "offset": 28
    },
    {
      "val": "nationality",
      "offset": 43
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.userProvidesAnd(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 62
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.userFillsOutPaymentInformatiionByProvidingCCTypeAnd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "exp month",
      "offset": 12
    },
    {
      "val": "exp year",
      "offset": 25
    },
    {
      "val": "CVV number",
      "offset": 37
    }
  ],
  "location": "BookingFlightsPHPStepsDefinition.userFills(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("RegistrationCodersGuru.feature");
formatter.feature({
  "line": 1,
  "name": "New Member on Coders Guru App",
  "description": "",
  "id": "new-member-on-coders-guru-app",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Creating an account on a CodersGuru page",
  "description": "",
  "id": "new-member-on-coders-guru-app;creating-an-account-on-a-codersguru-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "an open CodersGuru page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "email entered \"\u003cemail\u003e\", click załóż konto, sup-page opens",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user fills first name \u003cfirstName\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user fills last name \"\u003csurname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user fills password \"\u003cpass1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user fills again password \"\u003cpass2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills ciry \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills zipcode \"\u003czip code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills street \"\u003cstreet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills house number \"\u003cHouseNo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user ticks bylaw box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user submits by clicking zarejestruj",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user is logged in as a member and his name is \u003cfirstName\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "new-member-on-coders-guru-app;creating-an-account-on-a-codersguru-page;",
  "rows": [
    {
      "cells": [
        "email",
        "firstName",
        "surname",
        "pass1",
        "pass2",
        "city",
        "zip code",
        "street",
        "HouseNo"
      ],
      "line": 19,
      "id": "new-member-on-coders-guru-app;creating-an-account-on-a-codersguru-page;;1"
    },
    {
      "cells": [
        "ninocha@mail.com",
        "Ninogniew",
        "Olcha",
        "78ui90",
        "78ui90",
        "Montpelier",
        "83-254",
        "Sieja",
        "12"
      ],
      "line": 20,
      "id": "new-member-on-coders-guru-app;creating-an-account-on-a-codersguru-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Creating an account on a CodersGuru page",
  "description": "",
  "id": "new-member-on-coders-guru-app;creating-an-account-on-a-codersguru-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "an open CodersGuru page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "email entered \"ninocha@mail.com\", click załóż konto, sup-page opens",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user fills first name Ninogniew",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user fills last name \"Olcha\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user fills password \"78ui90\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user fills again password \"78ui90\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user fills ciry \"Montpelier\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fills zipcode \"83-254\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user fills street \"Sieja\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user fills house number \"12\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user ticks bylaw box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user submits by clicking zarejestruj",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user is logged in as a member and his name is Ninogniew",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CodersGuruStepsDefinition.openCodersGuruPage()"
});
formatter.result({
  "duration": 98069622090,
  "error_message": "org.openqa.selenium.WebDriverException: connection refused\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027patvonfoch-Lenovo-ideapad-320-15IKB\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.0.0-29-generic\u0027, java.version: \u002711.0.4\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: \n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\n\tat ZadanieFinalne.CodersGuruStepsDefinition.openCodersGuruPage(CodersGuruStepsDefinition.java:23)\n\tat ✽.Given an open CodersGuru page(RegistrationCodersGuru.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ninocha@mail.com",
      "offset": 15
    }
  ],
  "location": "CodersGuruStepsDefinition.emailEnteredClickSupPageOpens(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ninogniew",
      "offset": 22
    }
  ],
  "location": "CodersGuruStepsDefinition.userFillsFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Olcha",
      "offset": 22
    }
  ],
  "location": "CodersGuruStepsDefinition.userFillsLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "78ui90",
      "offset": 21
    }
  ],
  "location": "CodersGuruStepsDefinition.userFillsPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "78ui90",
      "offset": 27
    }
  ],
  "location": "CodersGuruStepsDefinition.userFillsAgainPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Montpelier",
      "offset": 17
    }
  ],
  "location": "CodersGuruStepsDefinition.userFillsCiry(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "83-254",
      "offset": 20
    }
  ],
  "location": "CodersGuruStepsDefinition.userFillsZipcode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sieja",
      "offset": 19
    }
  ],
  "location": "CodersGuruStepsDefinition.userFillsStreet(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 25
    }
  ],
  "location": "CodersGuruStepsDefinition.userFillsHouseNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CodersGuruStepsDefinition.userTicksBylawBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CodersGuruStepsDefinition.userSubmitsByClickingZarejestruj()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ninogniew",
      "offset": 46
    }
  ],
  "location": "CodersGuruStepsDefinition.userIsLoggedInAsAMember(String)"
});
formatter.result({
  "status": "skipped"
});
});