json.extract! @kit, :id, :name
json.instruments @kit.instruments, partial: 'instruments/instrument', as: :instrument
