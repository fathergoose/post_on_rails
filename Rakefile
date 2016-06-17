# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

namespace :browse do
  desc "Browse this app's documentation locally"
  task :docs do
    os_kernel = `uname -s`
    case os_kernel
    when /Linux/
      `sensible-browser doc/app/index.html`
    when /Darwin/
      `open doc/app/index.html`
    else
      # Include a case for windows
      puts "ERROR:
      Please edit Rakefile and add your system's response
      to `uname`. Then add your system-appropriate command
      for opening a web-browser"
    end
  end

  desc "Browse this app's coverage report locally"
  task :coverage do
    os_kernel = `uname -s`
    case os_kernel
    when /Linux/
      `sensible-browser coverage/index.html`
    when /Darwin/
      `open coverage/index.html`
    else
      # Include a case for windows
      puts "ERROR:
      Please edit Rakefile and add your system's response
      to `uname`. Then add your system-appropriate command
      for opening a web-browser"
    end
  end
end
