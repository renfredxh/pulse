json.array!(@samples) do |sample|
  json.extract! sample, :id, :path
  json.url sample_url(sample, format: :json)
end
