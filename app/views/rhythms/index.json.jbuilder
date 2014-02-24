json.array!(@rhythms) do |rhythm|
  json.extract! rhythm, :id
  json.url rhythm_url(rhythm, format: :json)
end
