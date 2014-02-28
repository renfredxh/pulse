json.extract! @kit, :id, :name
json.instruments @kit.setups do |setup|
  json.extract! setup.instrument, :id, :name, :category, :sample
  json.row setup.row
end
