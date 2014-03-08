json.extract! @rhythm, :id, :name
json.columns [*0..15] do |position|
  json.position position
  # Select all notes of a particular position and group them together
  notes = @rhythm.notes.select {|note| note.position == position }
  json.notes notes do |note|
    json.extract! note, :active, :volume
    json.row note.pattern.row
  end
end
