const DeviceTypes = {
  1: 'Celular',
  2: 'Laptop',
  3: 'Tableta',
};

const Statuses = {
  1: 'Disponible',
  2: 'Prestado',
  3: 'Dañado',
};

class Device {
  constructor(
    IdDevice = null,
    Name,
    idType,
    Make,
    Status,
    Description = 'Sin información'
  ) {
    this.IdDevice = IdDevice;
    this.Name = Name;
    this.idType = idType;
    this.Type = DeviceTypes[`${idType}`];
    this.Make = Make;
    this.idStatus = Status;
    this.Status = Statuses[`${Status}`];
    this.Description = Description;
  }
}

export default Device;
