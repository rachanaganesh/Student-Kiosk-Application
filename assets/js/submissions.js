const STATUS_NEW = "0";
const STATUS_IN_PROGRESS = "1";
const STATUS_COMPLETED = "2";

$().ready(function () {
	$('.toast').toast({
		delay: 5000
	});

		var submissionsTableRows = $('#submissions tbody');
	var filterSelect = $('#filter');
	var rowsPerPage = 10;
	var pagination = $('#pagination');
	var paginationOptions = {
		hideOnlyOnePage: true
	};

	pagination.twbsPagination(paginationOptions);
	filterSelect.change(function (e) {

		e.stopPropagation();

		getSubmissions(getFilterDate($(this).val()));

	});

	filterSelect.change();

	function getFilterDate(val) {
		switch (val) {
			case 'this week':
				return moment().startOf('week').format('YYYY-MM-DD');
			case 'today':
				return moment().format('YYYY-MM-DD');
			case 'this month':
				return moment().startOf('month').format('YYYY-MM-DD');
			case 'this year':
				return moment().startOf('year').format('YYYY-MM-DD');
			case 'past three months':
				return moment().subtract(3, 'months').format('YYYY-MM-DD');
			case 'past six months':
				return moment().subtract(6, 'months').format('YYYY-MM-DD');
			default:
				return 'all';
		}
	}

	function getSubmissions(filterDate) {
		$.getJSON('view.php', { filter: filterDate }, function (data, textStatus, jqXHR) {
			pagination.twbsPagination('destroy');

			pagination.twbsPagination($.extend({}, paginationOptions, {
				totalPages: Object.keys(data).length ? Math.ceil(Object.keys(data).length / rowsPerPage) : 1,
				onPageClick: function (ev, pg) {
					ev.stopPropagation();
					getRows(data, pg);
				}
			}));

			getRows(data, 1);


		});
	}

	function addTableEventListeners() {
		$(".editable").on('change keydown', function (event) {
			var id = event.target.id.split('-')[1];
			$("#save-" + id).prop('disabled', false);
		});

		$(".table-button").on('click', function (event) {
			var id = event.target.id.split('-')[1];
			var submissionId = $(this).attr("data-submission-id");
			if(submissionId) {
				saveRow(submissionId, 'rs');
			} else {
				saveRow(id, 'usu');
			}
		});
	}

	function saveRow(id, source) {
		var notes = $("#notes-" + id).val();
		var status = $("#status-" + id).find(":selected").val();

		$.ajax({
			url: 'view.php',
			type: 'PUT',
			data: {
				id: id,
				source: source,
				notes: notes,
				status: status
			},
			success: function (data) {
				showToast(true);
				$("#save-" + id).prop('disabled', true);
				updateStatusIcon(id, status);
			},
			error: function (data) {
				showToast(false);
				$("#error-toast").toast('show');
			}
		})
	}

	function updateStatusIcon(id, status){
		$(`.status-icon-${id}`).html(getStatusIcon(status));
	} 

	function getRows(data, pg) {
		submissionsTableRows.empty();
		var rows = [];
		var startPos = rowsPerPage * (pg - 1);
		var endPos = (startPos + rowsPerPage < Object.keys(data).length) ? startPos + rowsPerPage : Object.keys(data).length;
		for (var i = startPos; i < endPos; i++) {
			let rowId = "row-" + Math.random().toString(36).substr(2, 9);
			rows.push(
				`<tr data-toggle="collapse" data-target="#${rowId}" class="accordion-toggle">
					<td class="status-icon-${data[i].id}">${getStatusIcon(data[i].status)}</td>
					<td>${moment(data[i].submittedOn).format('lll')}</td>
					<td>${(data[i].commentType ? data[i].commentType : '')}</td>
					<td>${(data[i].firstName ? data[i].firstName : '')}</td>
					<td>${(data[i].lastName ? data[i].lastName : '')}</td>
					<td>${(data[i].email ? data[i].email : '')}</td>
					<td>${([data[i].customerType] ? [data[i].customerType] : '')}</td>
					<td>${(data[i].about ? data[i].about.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : '')}</td>
					<td>${(data[i].department ? data[i].department.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : '')}</td>
					<td>${(data[i].followUp ? data[i].followUp : '')}</td>
					<td>${(data[i].phoneNumber ? data[i].phoneNumber : '')}</td>
					<td><i class="fas fa-chevron-down"></i></td>
				</tr>
				<tr>
					<td class="hiddenRow" colspan="12">
						<div id="${rowId}" class="accordian-body collapse row">
							<div class="collapsible-item col-sm-5">
								<h6>Comment</h6>
								${(data[i].comment ? data[i].comment : '')}
							</div>
							<div class="collapsible-item col-sm-4">
								<h6>Notes</h6>
								<textarea name="notes" id="notes-${data[i].id}" class="form-control table-notes editable">${(data[i].notes ? data[i].notes : '')}</textarea>
							</div>
							<div class="collapsible-item col-sm-2">
								<h6>Status</h6>
								${buildStatusElement(data[i])}
							</div>
							<div class="collapsible-item col-sm-1">
								<button class="table-button btn btn-primary" data-submission-id="${(data[i].submissionId ? data[i].submissionId : "")}" id="save-${data[i].id}" disabled>Save</button>
							</div>
						</div>
					</td>
				</tr>`
			);
		}

		submissionsTableRows.append(rows);
		addTableEventListeners();

		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		})
	}

	function getStatusIcon(status) {
		switch(status) {
			case STATUS_NEW:
				return `<span class="badge badge-secondary">New</span>`;
			case STATUS_IN_PROGRESS:
				return `<span class="badge badge-secondary">In Progress</span>`;
			case STATUS_COMPLETED:
				return `<span class="badge badge-secondary">Completed</span>`;
			default:
				return `<span class="badge badge-secondary">New</span>`;
		}
	}

	function buildStatusElement(entry) {
		var newSelected = (!entry.status || (entry.status === STATUS_NEW)) ? "selected": "";
		var progressSelected = (entry.status === STATUS_IN_PROGRESS) ? "selected": "";
		var completedSelected = (entry.status === STATUS_COMPLETED) ? "selected": "";

		return `<select class="form-control table-status editable" id="status-${entry.id}" name="status">
					<option value=${STATUS_NEW} ${newSelected}>New</option>
					<option value=${STATUS_IN_PROGRESS} ${progressSelected}>In Progress</option>
					<option value=${STATUS_COMPLETED} ${completedSelected}>Completed</option>
				</select>`;
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	var modal = document.getElementById('myModal');
	span.addEventListener("click", function () {
		modal.style.display = "none";
	});

	document.onkeydown = function (evt) {
		evt = evt || window.event;
		if (evt.keyCode == 27) {
			//var modal = document.getElementById('myModal');
			modal.style.display = "none";
		}
	};

	modal.onclick = function () {
		// var modal = document.getElementById('myModal');
		modal.style.display = "none";
	}

	function showToast(isSuccess) {
		let id = new Date().getTime();
		let message = isSuccess ? "The entry has been successfully saved!" : "Something went wrong!";
		let title = isSuccess ? "Success": "Error";
		var toastHtml = `
			<div id=${"toast-" + id} class="toast" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="toast-header">
					<strong class="mr-auto">${title}</strong>
				</div>
				<div class="toast-body">
					${message}
				</div>
			</div>
		`;

		document.getElementById('toast-container').innerHTML += toastHtml;
		$(`#${"toast-" + id}`).toast('show');

		setTimeout(clearToasts, 3000);
	}

	function clearToasts() {
		document.getElementById('toast-container').innerHTML = "";
	}
});