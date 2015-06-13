'use strict';

angular.module('sandboxApp')
  .controller('BrushingCtrl', function ($scope) {

    var eventRow1Data = [
      {
        "event_id": "41039",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-26T05:59:59.000Z",
        "segment_end": "2014-03-26T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43665",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-14T05:59:59.000Z",
        "segment_end": "2014-05-14T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "45516",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-11T22:20:21.000Z",
        "segment_end": "2014-02-11T22:20:21.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "45517",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-11T22:21:15.000Z",
        "segment_end": "2014-02-11T22:21:15.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "40171",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T06:59:59.000Z",
        "segment_end": "2014-03-08T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25666",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25669",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25667",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "40967",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-25T05:59:59.000Z",
        "segment_end": "2014-03-25T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "44687",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-07T23:46:01.000Z",
        "segment_end": "2014-01-07T23:46:01.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43668",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-14T05:59:59.000Z",
        "segment_end": "2014-05-14T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "39006",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-12T06:59:59.000Z",
        "segment_end": "2014-02-12T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "4389",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-07T23:30:00.000Z",
        "segment_end": "2014-03-07T23:30:00.000Z",
        "dqlSymbol": "D",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43423",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-09T05:59:59.000Z",
        "segment_end": "2014-05-09T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "48936",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-24T06:00:00.000Z",
        "segment_end": "2014-03-24T06:00:00.000Z",
        "dqlSymbol": "S",
        "elapsed_time": 0,
        "event_block_nm": "eventTag2"
      },
      {
        "event_id": "159489",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "12798",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-07T23:30:00.000Z",
        "segment_end": "2014-03-07T23:30:00.000Z",
        "dqlSymbol": "F",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "38354",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T06:59:59.000Z",
        "segment_end": "2014-01-29T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "37552",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-08T06:59:59.000Z",
        "segment_end": "2014-01-08T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "50416",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-11T22:34:45.000Z",
        "segment_end": "2014-02-11T22:34:45.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": "eventTag1"
      },
      {
        "event_id": "12804",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "F",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "49779",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-10T18:27:55.000Z",
        "segment_end": "2014-01-10T18:27:55.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": "eventTag1"
      },
      {
        "event_id": "25665",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "44037",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-22T05:59:59.000Z",
        "segment_end": "2014-05-22T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "39007",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-12T06:59:59.000Z",
        "segment_end": "2014-02-12T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "158135",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T05:30:00.000Z",
        "segment_end": "2014-01-29T05:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "48935",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-24T06:00:00.000Z",
        "segment_end": "2014-03-24T06:00:00.000Z",
        "dqlSymbol": "S",
        "elapsed_time": 0,
        "event_block_nm": "eventTag2"
      },
      {
        "event_id": "45150",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T05:17:25.000Z",
        "segment_end": "2014-01-29T05:17:25.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "49720",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-07T23:46:02.000Z",
        "segment_end": "2014-01-07T23:46:02.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": "eventTag1"
      },
      {
        "event_id": "40966",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-25T05:59:59.000Z",
        "segment_end": "2014-03-25T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "4402",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "D",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25668",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "41040",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-26T05:59:59.000Z",
        "segment_end": "2014-03-26T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "157585",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-10T18:30:00.000Z",
        "segment_end": "2014-01-10T18:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43421",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-09T05:59:59.000Z",
        "segment_end": "2014-05-09T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "50414",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-11T22:21:15.000Z",
        "segment_end": "2014-02-11T22:21:15.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": "eventTag1"
      },
      {
        "event_id": "25670",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "158134",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T05:30:00.000Z",
        "segment_end": "2014-01-29T05:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "48048",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-08T06:50:58.000Z",
        "segment_end": "2014-05-08T06:50:58.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "41041",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-26T05:59:59.000Z",
        "segment_end": "2014-03-26T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43666",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-14T05:59:59.000Z",
        "segment_end": "2014-05-14T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "37687",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-11T06:59:59.000Z",
        "segment_end": "2014-01-11T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "44038",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-22T05:59:59.000Z",
        "segment_end": "2014-05-22T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "41147",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-28T05:59:59.000Z",
        "segment_end": "2014-03-28T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "157518",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-07T23:30:00.000Z",
        "segment_end": "2014-01-07T23:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "41146",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-28T05:59:59.000Z",
        "segment_end": "2014-03-28T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43420",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-09T05:59:59.000Z",
        "segment_end": "2014-05-09T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "270",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-25T17:08:10.000Z",
        "segment_end": "2014-03-25T17:08:10.000Z",
        "dqlSymbol": "B",
        "elapsed_time": 0,
        "event_block_nm": "eventTag3"
      },
      {
        "event_id": "43422",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-09T05:59:59.000Z",
        "segment_end": "2014-05-09T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "49257",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-13T07:00:00.000Z",
        "segment_end": "2014-02-13T07:00:00.000Z",
        "dqlSymbol": "M",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "50413",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-11T22:20:21.000Z",
        "segment_end": "2014-02-11T22:20:21.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": "eventTag1"
      },
      {
        "event_id": "40968",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-25T05:59:59.000Z",
        "segment_end": "2014-03-25T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "158136",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T05:30:00.000Z",
        "segment_end": "2014-01-29T05:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "44748",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-10T18:27:00.000Z",
        "segment_end": "2014-01-10T18:27:00.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "52662",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-08T06:51:59.000Z",
        "segment_end": "2014-05-08T06:51:59.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25643",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-07T23:30:00.000Z",
        "segment_end": "2014-03-07T23:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43667",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-14T05:59:59.000Z",
        "segment_end": "2014-05-14T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "45149",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T05:17:03.000Z",
        "segment_end": "2014-01-29T05:17:03.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "4401",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "D",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25644",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-07T23:30:00.000Z",
        "segment_end": "2014-03-07T23:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "4388",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-07T23:30:00.000Z",
        "segment_end": "2014-03-07T23:30:00.000Z",
        "dqlSymbol": "D",
        "elapsed_time": 0,
        "event_block_nm": null
      }
    ];
    var eventRow2Data = [
      {
        "event_id": "41039",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-26T05:59:59.000Z",
        "segment_end": "2014-03-26T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43665",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-14T05:59:59.000Z",
        "segment_end": "2014-05-14T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "45516",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-11T22:20:21.000Z",
        "segment_end": "2014-02-11T22:20:21.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "45517",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-11T22:21:15.000Z",
        "segment_end": "2014-02-11T22:21:15.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "40171",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T06:59:59.000Z",
        "segment_end": "2014-03-08T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25666",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25669",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25667",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "40967",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-25T05:59:59.000Z",
        "segment_end": "2014-03-25T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "44687",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-07T23:46:01.000Z",
        "segment_end": "2014-01-07T23:46:01.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43668",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-14T05:59:59.000Z",
        "segment_end": "2014-05-14T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "39006",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-12T06:59:59.000Z",
        "segment_end": "2014-02-12T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "4389",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-07T23:30:00.000Z",
        "segment_end": "2014-03-07T23:30:00.000Z",
        "dqlSymbol": "D",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43423",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-09T05:59:59.000Z",
        "segment_end": "2014-05-09T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "48936",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-24T06:00:00.000Z",
        "segment_end": "2014-03-24T06:00:00.000Z",
        "dqlSymbol": "S",
        "elapsed_time": 0,
        "event_block_nm": "eventTag2"
      },
      {
        "event_id": "159489",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "12798",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-07T23:30:00.000Z",
        "segment_end": "2014-03-07T23:30:00.000Z",
        "dqlSymbol": "F",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "38354",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T06:59:59.000Z",
        "segment_end": "2014-01-29T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "37552",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-08T06:59:59.000Z",
        "segment_end": "2014-01-08T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "50416",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-11T22:34:45.000Z",
        "segment_end": "2014-02-11T22:34:45.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": "eventTag1"
      },
      {
        "event_id": "12804",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "F",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "49779",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-10T18:27:55.000Z",
        "segment_end": "2014-01-10T18:27:55.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": "eventTag1"
      },
      {
        "event_id": "25665",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "44037",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-22T05:59:59.000Z",
        "segment_end": "2014-05-22T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "39007",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-12T06:59:59.000Z",
        "segment_end": "2014-02-12T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "158135",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T05:30:00.000Z",
        "segment_end": "2014-01-29T05:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "48935",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-24T06:00:00.000Z",
        "segment_end": "2014-03-24T06:00:00.000Z",
        "dqlSymbol": "S",
        "elapsed_time": 0,
        "event_block_nm": "eventTag2"
      },
      {
        "event_id": "45150",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T05:17:25.000Z",
        "segment_end": "2014-01-29T05:17:25.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "49720",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-07T23:46:02.000Z",
        "segment_end": "2014-01-07T23:46:02.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": "eventTag1"
      },
      {
        "event_id": "40966",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-25T05:59:59.000Z",
        "segment_end": "2014-03-25T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "4402",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "D",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25668",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "41040",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-26T05:59:59.000Z",
        "segment_end": "2014-03-26T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "157585",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-10T18:30:00.000Z",
        "segment_end": "2014-01-10T18:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43421",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-09T05:59:59.000Z",
        "segment_end": "2014-05-09T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "50414",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-11T22:21:15.000Z",
        "segment_end": "2014-02-11T22:21:15.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": "eventTag1"
      },
      {
        "event_id": "25670",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "158134",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T05:30:00.000Z",
        "segment_end": "2014-01-29T05:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "48048",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-08T06:50:58.000Z",
        "segment_end": "2014-05-08T06:50:58.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "41041",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-26T05:59:59.000Z",
        "segment_end": "2014-03-26T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43666",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-14T05:59:59.000Z",
        "segment_end": "2014-05-14T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "37687",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-11T06:59:59.000Z",
        "segment_end": "2014-01-11T06:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "44038",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-22T05:59:59.000Z",
        "segment_end": "2014-05-22T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "41147",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-28T05:59:59.000Z",
        "segment_end": "2014-03-28T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "157518",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-07T23:30:00.000Z",
        "segment_end": "2014-01-07T23:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "41146",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-28T05:59:59.000Z",
        "segment_end": "2014-03-28T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43420",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-09T05:59:59.000Z",
        "segment_end": "2014-05-09T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "270",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-25T17:08:10.000Z",
        "segment_end": "2014-03-25T17:08:10.000Z",
        "dqlSymbol": "B",
        "elapsed_time": 0,
        "event_block_nm": "eventTag3"
      },
      {
        "event_id": "43422",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-09T05:59:59.000Z",
        "segment_end": "2014-05-09T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "49257",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-13T07:00:00.000Z",
        "segment_end": "2014-02-13T07:00:00.000Z",
        "dqlSymbol": "M",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "50413",
        "masterAccountId": "110000396548",
        "segment_start": "2014-02-11T22:20:21.000Z",
        "segment_end": "2014-02-11T22:20:21.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": "eventTag1"
      },
      {
        "event_id": "40968",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-25T05:59:59.000Z",
        "segment_end": "2014-03-25T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "158136",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T05:30:00.000Z",
        "segment_end": "2014-01-29T05:30:00.000Z",
        "dqlSymbol": "Y",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "44748",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-10T18:27:00.000Z",
        "segment_end": "2014-01-10T18:27:00.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "52662",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-08T06:51:59.000Z",
        "segment_end": "2014-05-08T06:51:59.000Z",
        "dqlSymbol": "T",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25643",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-07T23:30:00.000Z",
        "segment_end": "2014-03-07T23:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "43667",
        "masterAccountId": "110000396548",
        "segment_start": "2014-05-14T05:59:59.000Z",
        "segment_end": "2014-05-14T05:59:59.000Z",
        "dqlSymbol": "O",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "45149",
        "masterAccountId": "110000396548",
        "segment_start": "2014-01-29T05:17:03.000Z",
        "segment_end": "2014-01-29T05:17:03.000Z",
        "dqlSymbol": "R",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "4401",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-08T01:30:00.000Z",
        "segment_end": "2014-03-08T01:30:00.000Z",
        "dqlSymbol": "D",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "25644",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-07T23:30:00.000Z",
        "segment_end": "2014-03-07T23:30:00.000Z",
        "dqlSymbol": "G",
        "elapsed_time": 0,
        "event_block_nm": null
      },
      {
        "event_id": "4388",
        "masterAccountId": "110000396548",
        "segment_start": "2014-03-07T23:30:00.000Z",
        "segment_end": "2014-03-07T23:30:00.000Z",
        "dqlSymbol": "D",
        "elapsed_time": 0,
        "event_block_nm": null
      }
    ];
    $scope.data = [];
    $scope.data.push(
      _.chain(eventRow1Data)
        .sortBy("segment_start")
        .map(function (row) {
          row.segment_start = moment(row.segment_start);
          row.segment_end = moment(row.segment_end);
          return row;
        })
        .value()
    );
    $scope.data.push(
      _.chain(eventRow2Data)
        .sortBy("segment_start")
        .map(function (row) {
          row.segment_start = moment(row.segment_start);
          row.segment_end = moment(row.segment_end);
          return row;
        })
        .value()
    );

    $scope.flattenedData = _.flatten($scope.data, true);

    $scope.minDomainStart = d3.min($scope.flattenedData, function(d) { return moment(d.segment_start); });
    $scope.minDomainStart.subtract(1, 'months');
    $scope.minDomainEnd = moment($scope.minDomainStart).add(7, 'months');

    $scope.domainStart = $scope.minDomainStart;
    $scope.domainEnd = $scope.minDomainEnd;

    $scope.unit = 'days';

    $scope.domainStartDown = function () {
      $scope.domainStart.subtract(1, $scope.unit);
    };
    $scope.domainStartUp = function () {
      $scope.domainStart.add(1, $scope.unit);
    };


    $scope.domainEndDown = function () {
      $scope.domainEnd.subtract(1, $scope.unit);
    };
    $scope.domainEndUp = function () {
      $scope.domainEnd.add(1, $scope.unit);
    };


    function getOrigin () {
      return d3.mean($scope.flattenedData, function (d) {
        return d.segment_start;
      });
    }

    $scope.domainToDefault = function () {
      $scope.domainStart = $scope.minDomainStart;
      $scope.domainEnd = $scope.minDomainEnd;
    };

    $scope.domainToYears = function () {
      var origin = getOrigin();
      $scope.domainStart = moment(origin).subtract(3.5, 'years');
      $scope.domainEnd = moment(origin).add(3.5, 'years');
    };

    $scope.domainToMonths = function () {
      var origin = getOrigin();
      $scope.domainStart = moment(origin).subtract(6, 'months');
      $scope.domainEnd = moment(origin).add(6, 'months');
    };

    $scope.domainToWeeks = function () {
      var origin = getOrigin();
      $scope.domainStart = moment(origin).subtract(10, 'weeks');
      $scope.domainEnd = moment(origin).add(10, 'weeks');
    };

    $scope.domainToDays = function () {
      var origin = getOrigin();
      $scope.domainStart = moment(origin).subtract(7, 'days');
      $scope.domainEnd = moment(origin).add(7, 'days');
    };


  });
