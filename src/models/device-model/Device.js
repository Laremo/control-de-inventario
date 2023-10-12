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
  constructor(IdDevice = null, Name, idType, Make, Status, Description) {
    this.IdDevice = IdDevice;
    this.Name = Name;
    this.Type = DeviceTypes[`${idType}`];
    this.Make = Make;
    this.Status = Statuses[`${Status}`];
    this.Description = Description;
  }
}

export default Device;
