allLoad = () ->
  allTasksCount = 0
  $('#allList').addClass 'active'
  $.ajax
    url: '/projects'
    dataType: 'json'
    success: (data) ->
      $.each data, (key, value) ->
        allTasksCount += value.tasks_count
      if (allTasksCount > 0)
        $('#allCount').html(allTasksCount)
        # $("task-list-body").html("<div id='tabs'></div>")
        # $.each data, (key, value) ->
        #   tabKey = 'tabs-' + key
        #   $("#{tabs}").html("<div id='" + tabKey + "'></div")
        #   tabKeyId = "#" + tabKey 
        #   $(tabKeyId).html()
      else
        $("task-list-body").html("<div>All tasks done. Time to relax</div>")  



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

