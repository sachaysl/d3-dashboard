PentagonsAndTriangles = React.createClass({

    drawTiling: function() {

	var width = 400;
	var height = 400;
	var monsterColour = "rgb(254, 111, 94)";
	var decagonColour = "rgb(176,224,230)";
	var pentagonColour = "rgb(102,153,204)";
	var pentacleColour = "rgb(255,3,62)";

	var svg = d3.select("#pentagonsandtriangles")
		.attr("width", width)
		.attr("height", height);

	svg.append("svg:polygon")
	    .attr("id", "pentacleCentre")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(6,200, 200, 25))
//	    .attr("transform", " rotate(54," + 850/2.4 + "," + 600/2.4 + ") scale(0.4,0.4) translate(240,-45)")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	    .style("fill", pentacleColour);

	svg.append("svg:polygon")
	    .attr("id", "pentacleCentre")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(6,200, 200, 25))
//	    .attr("transform", " rotate(54," + 850/2.4 + "," + 600/2.4 + ") scale(0.4,0.4) translate(240,-45)")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	    .style("fill", pentacleColour);

	svg.append("svg:polygon")
	    .attr("id", "pentacleCentre")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,100, 200, 50))
	    .attr("transform", " rotate(30,100,200)")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	    .style("fill", decagonColour);


	function calculatePolygonPoints(sides, centerX, centerY, radius) {

	    var results = "";
	    var angle = Math.PI / sides;
	    var r = radius;

	    for (var i = 0; i < sides; i++) {
		var currX = centerX + Math.cos(i * 2 * angle) * r;
		var currY = centerY + Math.sin(i * 2 * angle) *  r;

				// Our first time we simply append the coordinates
		// subsequent times we append a ", " to distinguish
		// each coordinate pair.

		if (i == 0)
		{
		    results = currX + "," + currY;
		}
		else
		{
		    results += "," + currX + "," + currY;
		}
	    }

	    return results;
	}

	



    },
    
    componentDidMount: function() {
	this.drawTiling();

    },

    svgStyle: {
	margin: 'auto',
	display: 'block',
	float: 'right',
	marginTop: '7',
	marginBottom: '25'
    },


    render: function() {

	return(
	    <svg id="pentagonsandtriangles" style = {this.svgStyle}>
	    </svg>
	);

    }
});
