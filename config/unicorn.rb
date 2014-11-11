worker_processes Integer(ENV["WEB_CONCURRENCY"] || 3)
preload_app true

before_fork do |server, worker|
  # The following is highly recomended for Rails + "preload_app true" as
  # there's no need for the master process to hold a connection.
  defined?(ActiveRecord::Base) and
    ActiveRecord::Base.connection.disconnect!
end

after_fork do |server, worker|
  defined?(ActiveRecord::Base) and
    ActiveRecord::Base.establish_connection
end
