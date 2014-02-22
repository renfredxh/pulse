json.array!(@kits) do |kit|
  json.extract! kit, :id, :name
  json.url kit_url(kit, format: :json)
end
