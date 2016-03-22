allLoad = () ->
  allTasksCount = 0
  $('#allList').addClass 'active'
  $.ajax
    url: '/projects'
    dataType: 'json'
    success: (data) ->
      console.log(data)
      $.each data, (key, value) ->
        allTasksCount += value.tasks_count
      $('#allCount').html(allTasksCount)

inboxLoad = () ->
  projectName = $('#inboxCount').data('projectId')
  $.ajax
    url: '/projects/' + projectName
    dataType: 'json'
    success: (data) ->
      tasksCount = data.tasks_count 
      $('#inboxCount').html(tasksCount)      



$ ->
  allLoad()
  inboxLoad()

