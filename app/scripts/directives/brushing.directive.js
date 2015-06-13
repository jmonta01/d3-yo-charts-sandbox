'use strict';

/**
 * @ngdoc function
 * @name sandboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sandboxApp
 */
angular.module('sandboxApp')
  .directive('brushingChart', function () {

    return {
      restrict: 'E',
      replace: true,
      scope: {
        data: '=',
        minDomainStart: '=',
        domainStart: '=',
        minDomainEnd: '=',
        domainEnd: '=',
        getColorFromDqlSymbol: '&'
      },
      template: "<div></div>",
      link: function(scope, element, attrs) {

        var inited = false,
            w = element.parent().width(),
            processedData, dataMean,
            svg, brush,
            chartContainer, chartEventHeaders, chartEventsContainer, chartXAxis,
            brushContainer, brushEventsContainer, brushXAxis,
            tickHeight = 58, minTickWidth = 10, tickWidth = minTickWidth, tickYSpacer = 2,
            miniTickHeight = 5, miniTickWidth = 2, miniTickYSpacer = 1;

        //ticks area
        var chartConfig = {
          margin: {top: 10, right: 100, bottom: 10, left: 100},
          height: 60,
          axisHeight: 20
        } ;
        chartConfig.width = w - chartConfig.margin.left - chartConfig.margin.right;
        chartConfig.xScale = d3.time.scale().range([0, chartConfig.width]);

        var tickHeaderConfig = {
          margin: {top: 0, right: 20, bottom: 0, left: 0},
          width: 68
        };

        //brush area
        var brushConfig = {
          margin: {top: 10, right: 100, bottom: 10, left: 100},
          height: 30,
          axisHeight: 20
        };
        brushConfig.width = w - brushConfig.margin.left - brushConfig.margin.right;
        brushConfig.xScale = d3.time.scale().range([0, brushConfig.width]);

        function init (data) {
          inited = true;

          brushConfig.height = data.length * miniTickHeight + data.length * miniTickYSpacer;
          chartConfig.height = data.length * tickHeight + data.length * tickYSpacer;
          chartConfig.margin.top = brushConfig.height + brushConfig.margin.top + brushConfig.margin.bottom;

          var totalWidth = chartConfig.width + chartConfig.margin.left + chartConfig.margin.right;
          var totalHeight = chartConfig.margin.top + chartConfig.height + chartConfig.margin.bottom + chartConfig.axisHeight;

          svg = d3.select(element[0]).append("svg")
            .attr("width",  totalWidth)
            .attr("height", totalHeight);

          svg.append("defs").append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", totalWidth)
            .attr("height", totalHeight);

          chartContainer = svg.append("g")
            .attr("class", "chart-container")
            .attr("transform", "translate(" + chartConfig.margin.left + "," + chartConfig.margin.top + ")");

          chartXAxis = d3.svg.axis().scale(chartConfig.xScale).orient("bottom");
          chartContainer.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(" + 0 + "," + chartConfig.height + ")")
            .call(chartXAxis);

          chartEventHeaders = chartContainer.append("g")
            .attr("class", "chart-event-headers")
            .attr("transform", "translate(" + -(tickHeaderConfig.width + tickHeaderConfig.margin.left + tickHeaderConfig.margin.right) + ",0)");

          chartEventsContainer = chartContainer.append("g")
            .attr("class", "chart-events-container");

          brushContainer = svg.append("g")
            .attr("class", "brush-container")
            .attr("transform", "translate(" + brushConfig.margin.left + "," + brushConfig.margin.top + ")");

          brushXAxis = d3.svg.axis().scale(brushConfig.xScale).orient("bottom");
          brushContainer.append("g")
            .attr("class", "x axis hidden")
            .attr("transform", "translate(0," + brushConfig.height + ")")
            .call(brushXAxis);

          brushEventsContainer = brushContainer.append("g")
            .attr("class", "brush-events-container")

          brushContainer.append("g")
            .attr("class", "x brush");

          brush = d3.svg.brush()
            .x(brushConfig.xScale)
            .on("brush", brushed);
        }

        function redraw (data, brushing) {
          if (!processedData || !scope.minDomainStart || !scope.minDomainEnd || !scope.domainStart || !scope.domainEnd ) return;
          if (!inited) init(data);
          configure(brushing);
          render(data);
        }

        function calculateTickWidth () {
          var focusStart = moment(chartConfig.xScale.domain()[0]);
          var focusEnd = moment(chartConfig.xScale.domain()[1]);
          var focusDiff = focusEnd.diff(focusStart, "seconds");

          var brushStart = moment(brushConfig.xScale.domain()[0]);
          var brushEnd = moment(brushConfig.xScale.domain()[1]);
          var brushDiff = brushEnd.diff(brushStart, "seconds");

          tickWidth = Math.max(parseInt(brushDiff / focusDiff), minTickWidth);
        }

        function configure (brushing) {
          if (!brushing) {
            if (scope.domainStart.isBefore(scope.minDomainStart) && scope.domainEnd.isAfter(scope.minDomainEnd)) {
              chartConfig.xScale.domain([scope.domainStart, scope.domainEnd]);
              brushConfig.xScale.domain([scope.domainStart, scope.domainEnd]);
            } else {
              chartConfig.xScale.domain([scope.domainStart, scope.domainEnd]);
              brushConfig.xScale.domain([scope.minDomainStart, scope.minDomainEnd]);
            }

            brush.extent([scope.domainStart, scope.domainEnd]);

            brushContainer.select("g.x.axis").call(brushXAxis);
            chartContainer.select("g.x.axis").call(chartXAxis);

          } else {
            chartConfig.xScale.domain(brush.empty() ? brushConfig.xScale.domain() : brush.extent());
            chartContainer.select("g.x.axis").call(chartXAxis);
          }
          calculateTickWidth();
        }

        function render (data) {
          brushContainer.selectAll("g.x.brush")
            .call(brush)
            .selectAll("rect")
            .attr("y", -6)
            .attr("height", brushConfig.height + 7);

          brushEventsContainer.selectAll("g.track").remove();
          brushEventsContainer.selectAll("g.track")
            .data(data).enter()
            .append("g")
            .attr("class", "track")
              .selectAll("rect.event")
                .data(function(d) { return d; }).enter()
                .append("rect")
                  .attr('class', 'event')
                  .attr("y", function (d, i, j) {
                    return j * miniTickHeight + (j > 0 ? miniTickYSpacer : 0);
                  })
                  .attr("x", function (d) {
                    return brushConfig.xScale(moment(d.segment_start));
                  })
                  .attr("width", miniTickWidth)
                  .attr("height", miniTickHeight);


          chartEventHeaders.selectAll("rect.event-header").remove();
          chartEventHeaders.selectAll("rect.event-header")
            .data(data).enter()
            .append("rect")
              .attr("class", "event-header")
              .attr("width", tickHeaderConfig.width)
              .attr("height", tickHeight)
              .style("fill", "#ff0000")
              .attr("x", tickHeaderConfig.margin.left)
              .attr("y", function (d, i) {
                return i * tickHeight + (i > 0 ? tickYSpacer : 0);
              });

          chartEventsContainer.selectAll("g.track").remove();
          chartEventsContainer.selectAll("g.track")
            .data(data).enter()
            .append("g")
              .attr("class", "track")
              .selectAll("rect.event")
              .data(function(d) { return d; }).enter()
              .append("rect")
                .filter(function(d) {
                  return moment(d.segment_start).isBetween(moment(chartConfig.xScale.domain()[0]), moment(chartConfig.xScale.domain()[1]));
                })
                .attr("class", function (d) {
                  if (d["event_block_nm"]) {
                    return "event moveable sequence-matched tooltip-me";
                  } else {
                    return "event moveable tooltip-me";
                  }
                })
                .style("fill", function(d) {
                  return scope.getColorFromDqlSymbol(d.dqlSymbol)
                })
                .attr("title", function (d) {
                        return ''; //'<p><span>Event Type:</span> ' + scope.dqlSymbolEventMap[d.dqlSymbol].object_name + '</p>' + '<p><span>Start:</span> ' + d.segment_start + '</p>' + '<p><span>End:</span> ' + d.segment_end + '</p>';
                      })
                .attr("y", function (d, i, j) {
                  return j * tickHeight + (j > 0 ? tickYSpacer : 0);
                })
                .attr("x", function (d) {
                  return chartConfig.xScale(moment(d.segment_start));
                })
                .attr("width", tickWidth)
                .attr("height", tickHeight)
                .on("mouseenter", function (){
                  $(this).tooltip("show");
                })
              .on("mouseout", function (event){
                $(this).tooltip("hide")
              })
              .on("click", timelineEventClick)
              //.call(drag)
              //.call(zoom);

          $(".tooltip-me").tooltip({
            html: true,
            placement: 'top',
            container: '.timeline-widget'
          })

        }

        function timelineEventClick (d) {
          console.log('event click', d)
          var eventModalInstance;
          /*
          eventModalInstance = $modal.open({
            templateUrl: "views/content/timeline/timeline-journey-event-info-modal.html",
            controller: "timelineJourneyEventInfoModalCtrl",
            backdrop: 'static',
            keyboard: false,
            resolve: {
              visualizationEvent: function() {
                return d;
              },
              eventName: function() {
                return scope.getEventNameFromDqlSymbol(d.dqlSymbol);
              },
              dqlEventTypeName: function() {
                return scope.getDqlEventTypeFromDqlSymbol(d.dqlSymbol);
              },
              eventIcon: function() {
                return scope.getEventIconFromDqlSymbol(d.dqlSymbol);
              },
              timelineIntegrationTypes: function() {
                return scope.getTimelineIntegrationTypesFromDqlSymbol(d.dqlSymbol);
              },
              attributes: function() {
                return scope.getAttributesFromDqlSymbol(d.dqlSymbol);
              },
              dqlSymbol: function() {
                return d.dqlSymbol;
              }
            }
          });
          return eventModalInstance.result.then(function(response) {}, function(error) {
            if (error !== 'cancel') {
              return console.warn(error);
            }
          });
          */
        };

        function brushed() {
          redraw(processedData, true);
        }

        //scope.$watchCollection('[minDomainStart, minDomainEnd, domainStart, domainEnd]', function () {
        //  redraw(processedData);
        //}, true);

        scope.$watchGroup(["minDomainStart", "minDomainEnd", "domainStart", "domainEnd"], function () {
          redraw(processedData);
        }, true);

        scope.$watch('data', function (data) {
          inited = false;
          processedData = data;
          dataMean = d3.mean( _.flatten(processedData, true), function (d) {
            return d.segment_start;
          });
          redraw(processedData);
        });

      }
    };
  });
