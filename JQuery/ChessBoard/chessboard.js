var i;
var j;
$(document)
		.ready(
				function() {
					for (i = 1; i < 9; i++) {
						$(".board").append('<div class="row"></div>');
						for (j = 1; j < 9; j++) {
							if (i === 1) {
								if (j === 1 || j === 8) {
									$("div.row:last")
											.append(
													'<div class="cell"><img src="file:///home/heresy/Documents/KARTHEEK/chess%20icons/Rook.png" title="ROOK"></div>');
								} else if (j === 2 || j === 7) {
									$("div.row:last")
											.append(
													'<div class="cell"><img src="file:///home/heresy/Documents/KARTHEEK/chess%20icons/knight.png" title="KNIGHT"></div>');
								} else if (j === 3 || j === 6) {
									$("div.row:last")
											.append(
													'<div class="cell"><img src="file:///home/heresy/Documents/KARTHEEK/chess%20icons/Bishop.jpg" title="BISHOP"></div>');
								} else if (j === 4) {
									$("div.row:last")
											.append(
													'<div class="cell"><img src="file:///home/heresy/Documents/KARTHEEK/chess%20icons/Queen.png" title="QUEEN"></div>');
								} else {
									$("div.row:last")
											.append(
													'<div class="cell"><img src="file:///home/heresy/Documents/KARTHEEK/chess%20icons/King.jpg" title="KING"></div>');
								}
							} else if (i === 2) {
								$("div.row:last")
										.append(
												'<div class="cell"><img src="file:///home/heresy/Documents/KARTHEEK/chess%20icons/Pawn.jpg" title="PAWN"></div>');
							} else if (i === 7) {
								$("div.row:last")
										.append(
												'<div class="cell"><img src="file:///home/heresy/Documents/KARTHEEK/chess%20icons/Pawn.png" title="PAWN"></div>');
							} else if (i === 8) {
								if (j === 1 || j === 8) {
									$("div.row:last")
											.append(
													'<div class="cell"><img src="" title="ROOK"></div>');
								} else if (j === 2 || j === 7) {
									$("div.row:last")
											.append(
													'<div class="cell"><img src="" title="KNIGHT"></div>');
								} else if (j === 3 || j === 6) {
									$("div.row:last")
											.append(
													'<div class="cell"><img src="file:///home/heresy/Documents/KARTHEEK/chess%20icons/Bishop_w.jpg" title="BISHOP"></div>');
								} else if (j === 4) {
									$("div.row:last")
											.append(
													'<div class="cell"><img src="" title="KING"></div>');
								} else {
									$("div.row:last")
											.append(
													'<div class="cell"><img src="" title="QUEEN"></div>');
								}
							} else {
								$("div.row:last").append('<div class="cell">');
							}
						}
					}
				});