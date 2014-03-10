json.array!(@rhythms) do |rhythm|
  json.extract! rhythm, :id, :name
  json.url rhythm_url(rhythm, format: :json)
end
