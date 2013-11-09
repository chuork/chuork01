activate :directory_indexes

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Markdown settings
set :markdown_engine, :redcarpet
set :markdown, :tables             => true,
               :autolink           => true,
               :gh_blockcode       => true,
               :fenced_code_blocks => true,
               :with_toc_data      => true,
               :smartypants        => true

configure :development do
  set :debug_assets, true
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

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
