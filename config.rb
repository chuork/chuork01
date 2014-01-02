activate :directory_indexes

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

configure :development do
  set :debug_assets, true
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"

  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true
end

helpers do
  def talk_row(id)
    talk = talk_by_id(id)

    "#{talk.title || comming_soon}|[#{talk.speaker.name}](##{id})"
  end

  def talk_by_id(id)
    data.talks.detect {|talk| talk.id == id } || raise("Missing talk: id='#{id}'")
  end

  def comming_soon
    content_tag('i', '(近日公開予定)')
  end
end
