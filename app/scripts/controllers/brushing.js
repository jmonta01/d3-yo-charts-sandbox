'use strict';

angular.module('sandboxApp')
  .controller('BrushingCtrl', function ($scope) {

    var rawData = [
      {
        "date": "Jan 2000",
        "price": "1394.46"
      },
      {
        "date": "Feb 2000",
        "price": "1366.42"
      },
      {
        "date": "Mar 2000",
        "price": "1498.58"
      },
      {
        "date": "Apr 2000",
        "price": "1452.43"
      },
      {
        "date": "May 2000",
        "price": "1420.6"
      },
      {
        "date": "Jun 2000",
        "price": "1454.6"
      },
      {
        "date": "Jul 2000",
        "price": "1430.83"
      },
      {
        "date": "Aug 2000",
        "price": "1517.68"
      },
      {
        "date": "Sep 2000",
        "price": "1436.51"
      },
      {
        "date": "Oct 2000",
        "price": "1429.4"
      },
      {
        "date": "Nov 2000",
        "price": "1314.95"
      },
      {
        "date": "Dec 2000",
        "price": "1320.28"
      },
      {
        "date": "Jan 2001",
        "price": "1366.01"
      },
      {
        "date": "Feb 2001",
        "price": "1239.94"
      },
      {
        "date": "Mar 2001",
        "price": "1160.33"
      },
      {
        "date": "Apr 2001",
        "price": "1249.46"
      },
      {
        "date": "May 2001",
        "price": "1255.82"
      },
      {
        "date": "Jun 2001",
        "price": "1224.38"
      },
      {
        "date": "Jul 2001",
        "price": "1211.23"
      },
      {
        "date": "Aug 2001",
        "price": "1133.58"
      },
      {
        "date": "Sep 2001",
        "price": "1040.94"
      },
      {
        "date": "Oct 2001",
        "price": "1059.78"
      },
      {
        "date": "Nov 2001",
        "price": "1139.45"
      },
      {
        "date": "Dec 2001",
        "price": "1148.08"
      },
      {
        "date": "Jan 2002",
        "price": "1130.2"
      },
      {
        "date": "Feb 2002",
        "price": "1106.73"
      },
      {
        "date": "Mar 2002",
        "price": "1147.39"
      },
      {
        "date": "Apr 2002",
        "price": "1076.92"
      },
      {
        "date": "May 2002",
        "price": "1067.14"
      },
      {
        "date": "Jun 2002",
        "price": "989.82"
      },
      {
        "date": "Jul 2002",
        "price": "911.62"
      },
      {
        "date": "Aug 2002",
        "price": "916.07"
      },
      {
        "date": "Sep 2002",
        "price": "815.28"
      },
      {
        "date": "Oct 2002",
        "price": "885.76"
      },
      {
        "date": "Nov 2002",
        "price": "936.31"
      },
      {
        "date": "Dec 2002",
        "price": "879.82"
      },
      {
        "date": "Jan 2003",
        "price": "855.7"
      },
      {
        "date": "Feb 2003",
        "price": "841.15"
      },
      {
        "date": "Mar 2003",
        "price": "848.18"
      },
      {
        "date": "Apr 2003",
        "price": "916.92"
      },
      {
        "date": "May 2003",
        "price": "963.59"
      },
      {
        "date": "Jun 2003",
        "price": "974.5"
      },
      {
        "date": "Jul 2003",
        "price": "990.31"
      },
      {
        "date": "Aug 2003",
        "price": "1008.01"
      },
      {
        "date": "Sep 2003",
        "price": "995.97"
      },
      {
        "date": "Oct 2003",
        "price": "1050.71"
      },
      {
        "date": "Nov 2003",
        "price": "1058.2"
      },
      {
        "date": "Dec 2003",
        "price": "1111.92"
      },
      {
        "date": "Jan 2004",
        "price": "1131.13"
      },
      {
        "date": "Feb 2004",
        "price": "1144.94"
      },
      {
        "date": "Mar 2004",
        "price": "1126.21"
      },
      {
        "date": "Apr 2004",
        "price": "1107.3"
      },
      {
        "date": "May 2004",
        "price": "1120.68"
      },
      {
        "date": "Jun 2004",
        "price": "1140.84"
      },
      {
        "date": "Jul 2004",
        "price": "1101.72"
      },
      {
        "date": "Aug 2004",
        "price": "1104.24"
      },
      {
        "date": "Sep 2004",
        "price": "1114.58"
      },
      {
        "date": "Oct 2004",
        "price": "1130.2"
      },
      {
        "date": "Nov 2004",
        "price": "1173.82"
      },
      {
        "date": "Dec 2004",
        "price": "1211.92"
      },
      {
        "date": "Jan 2005",
        "price": "1181.27"
      },
      {
        "date": "Feb 2005",
        "price": "1203.6"
      },
      {
        "date": "Mar 2005",
        "price": "1180.59"
      },
      {
        "date": "Apr 2005",
        "price": "1156.85"
      },
      {
        "date": "May 2005",
        "price": "1191.5"
      },
      {
        "date": "Jun 2005",
        "price": "1191.33"
      },
      {
        "date": "Jul 2005",
        "price": "1234.18"
      },
      {
        "date": "Aug 2005",
        "price": "1220.33"
      },
      {
        "date": "Sep 2005",
        "price": "1228.81"
      },
      {
        "date": "Oct 2005",
        "price": "1207.01"
      },
      {
        "date": "Nov 2005",
        "price": "1249.48"
      },
      {
        "date": "Dec 2005",
        "price": "1248.29"
      },
      {
        "date": "Jan 2006",
        "price": "1280.08"
      },
      {
        "date": "Feb 2006",
        "price": "1280.66"
      },
      {
        "date": "Mar 2006",
        "price": "1294.87"
      },
      {
        "date": "Apr 2006",
        "price": "1310.61"
      },
      {
        "date": "May 2006",
        "price": "1270.09"
      },
      {
        "date": "Jun 2006",
        "price": "1270.2"
      },
      {
        "date": "Jul 2006",
        "price": "1276.66"
      },
      {
        "date": "Aug 2006",
        "price": "1303.82"
      },
      {
        "date": "Sep 2006",
        "price": "1335.85"
      },
      {
        "date": "Oct 2006",
        "price": "1377.94"
      },
      {
        "date": "Nov 2006",
        "price": "1400.63"
      },
      {
        "date": "Dec 2006",
        "price": "1418.3"
      },
      {
        "date": "Jan 2007",
        "price": "1438.24"
      },
      {
        "date": "Feb 2007",
        "price": "1406.82"
      },
      {
        "date": "Mar 2007",
        "price": "1420.86"
      },
      {
        "date": "Apr 2007",
        "price": "1482.37"
      },
      {
        "date": "May 2007",
        "price": "1530.62"
      },
      {
        "date": "Jun 2007",
        "price": "1503.35"
      },
      {
        "date": "Jul 2007",
        "price": "1455.27"
      },
      {
        "date": "Aug 2007",
        "price": "1473.99"
      },
      {
        "date": "Sep 2007",
        "price": "1526.75"
      },
      {
        "date": "Oct 2007",
        "price": "1549.38"
      },
      {
        "date": "Nov 2007",
        "price": "1481.14"
      },
      {
        "date": "Dec 2007",
        "price": "1468.36"
      },
      {
        "date": "Jan 2008",
        "price": "1378.55"
      },
      {
        "date": "Feb 2008",
        "price": "1330.63"
      },
      {
        "date": "Mar 2008",
        "price": "1322.7"
      },
      {
        "date": "Apr 2008",
        "price": "1385.59"
      },
      {
        "date": "May 2008",
        "price": "1400.38"
      },
      {
        "date": "Jun 2008",
        "price": "1280"
      },
      {
        "date": "Jul 2008",
        "price": "1267.38"
      },
      {
        "date": "Aug 2008",
        "price": "1282.83"
      },
      {
        "date": "Sep 2008",
        "price": "1166.36"
      },
      {
        "date": "Oct 2008",
        "price": "968.75"
      },
      {
        "date": "Nov 2008",
        "price": "896.24"
      },
      {
        "date": "Dec 2008",
        "price": "903.25"
      },
      {
        "date": "Jan 2009",
        "price": "825.88"
      },
      {
        "date": "Feb 2009",
        "price": "735.09"
      },
      {
        "date": "Mar 2009",
        "price": "797.87"
      },
      {
        "date": "Apr 2009",
        "price": "872.81"
      },
      {
        "date": "May 2009",
        "price": "919.14"
      },
      {
        "date": "Jun 2009",
        "price": "919.32"
      },
      {
        "date": "Jul 2009",
        "price": "987.48"
      },
      {
        "date": "Aug 2009",
        "price": "1020.62"
      },
      {
        "date": "Sep 2009",
        "price": "1057.08"
      },
      {
        "date": "Oct 2009",
        "price": "1036.19"
      },
      {
        "date": "Nov 2009",
        "price": "1095.63"
      },
      {
        "date": "Dec 2009",
        "price": "1115.1"
      },
      {
        "date": "Jan 2010",
        "price": "1073.87"
      },
      {
        "date": "Feb 2010",
        "price": "1104.49"
      },
      {
        "date": "Mar 2010",
        "price": "1140.45"
      }
    ];

    /*
    $scope.data = _.map(rawData2, function (row) {
      return {
        date: moment(row.date, 'MMM YYYY'),
        price: parseFloat(row.price)
      }
    });
    */

    var rawData2 = [
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

    $scope.data = _.chain(rawData2)
      .sortBy("segment_start")
      .map(function (row) {
        row.segment_start = moment(row.segment_start);
        row.segment_end = moment(row.segment_end);
        return row;
      })
      .value();

    $scope.minDomainStart = d3.min($scope.data, function(d) { return moment(d.segment_start); });
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
      return d3.mean($scope.data, function (d) {
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
