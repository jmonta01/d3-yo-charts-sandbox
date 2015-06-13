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
      },
      template: "<div></div>",
      link: function(scope, element, attrs) {

        var inited = false,
            processedData, dataMean,
            svg, brush,
            chartContainer, chartXAxis,
            brushContainer, brushXAxis,
            tickHeight = 20, tickWidth = 5, tickYSpacer = 2,
            miniTickHeight = 5, miniTickWidth = 2, miniTickYSpacer = 1;

        //ticks area
        var chartConfig = {
          margin: {top: 10, right: 10, bottom: 30, left: 10},
          width: 960,
          height: 60,
          axisHeight: 20
        } ;
        chartConfig.xScale = d3.time.scale().range([0, chartConfig.width]);

        //brush area
        var brushConfig = {
          margin: {top: 100, right: 10, bottom: 10, left: 10},
          width: 960,
          height: 30,
          axisHeight: 20
        };
        brushConfig.xScale = d3.time.scale().range([0, brushConfig.width]);

        function init (data) {
          inited = true;

          chartConfig.height = data.length * tickHeight + data.length * tickYSpacer;
          brushConfig.height = data.length * miniTickHeight + data.length * miniTickYSpacer;
          brushConfig.margin.top = chartConfig.height + chartConfig.margin.top + chartConfig.margin.bottom + chartConfig.axisHeight;

          var totalWidth = chartConfig.width + chartConfig.margin.left + chartConfig.margin.right;
          var totalHeight = brushConfig.margin.top + brushConfig.height + brushConfig.margin.bottom + brushConfig.axisHeight;

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
            .attr("transform", "translate(0," + chartConfig.height + ")")
            .call(chartXAxis);

          brushContainer = svg.append("g")
            .attr("class", "brush-container")
            .attr("transform", "translate(" + brushConfig.margin.left + "," + brushConfig.margin.top + ")");

          brushXAxis = d3.svg.axis().scale(brushConfig.xScale).orient("bottom");
          brushContainer.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + brushConfig.height + ")")
            .call(brushXAxis);

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
        }

        function render (data) {
          brushContainer.selectAll("g.x.brush")
            .call(brush)
            .selectAll("rect")
            .attr("y", -6)
            .attr("height", brushConfig.height + 7);

          brushContainer.selectAll("g.track").remove();
          brushContainer.selectAll("g.track")
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


          chartContainer.selectAll("g.track").remove();
          chartContainer.selectAll("g.track")
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
                .attr("height", tickHeight);
        }

        function brushed() {
          redraw(processedData, true);
        }

        scope.$watch('minDomainStart', function () {
          redraw(processedData);
        }, true);

        scope.$watch('minDomainEnd', function () {
          redraw(processedData);
        }, true);

        scope.$watch('domainStart', function () {
          console.log('domainStart:changed');
          redraw(processedData);
        }, true);

        scope.$watch('domainEnd', function () {
          console.log('domainEnd:changed');
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
